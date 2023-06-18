<script>
  import { afterUpdate } from "svelte";
  import Main from "./components/Main.svelte";
  import Quiz from "./components/QuizDetails.svelte";
  import Answer from "./components/Answer.svelte";

  let difficulty = "easy";
  let questionsArray = [];

  let currentNest = "main";

  // Loads the saved values as integer
  let totalQuiz = 0;
  let totalCorrects = 0;
  let totalWrongs = 0;

  // Loads the saved values as string and array
  let lastQuizResultStats = localStorage.getItem("lastQuizResultStats");
  let lastQuizResultList = JSON.parse(
    localStorage.getItem("lastQuizResultList")
  );

  // Handles the saving to localStorage
  afterUpdate(() => {
    if (totalQuiz > 0 && (totalCorrects >= 0 || totalWrongs >= 0)) {
      localStorage.setItem("totalQuiz", totalQuiz.toString());
      localStorage.setItem("totalCorrects", totalCorrects.toString());
      localStorage.setItem("totalWrongs", totalWrongs.toString());
    } else if (parseInt(localStorage.getItem("totalQuiz")) > 0) {
      totalQuiz = parseInt(localStorage.getItem("totalQuiz"));
      totalCorrects = parseInt(localStorage.getItem("totalCorrects"));
      totalWrongs = parseInt(localStorage.getItem("totalWrongs"));
    }
    if (lastQuizResultList != null && lastQuizResultStats != null) {
      localStorage.setItem("lastQuizResultStats", lastQuizResultStats);
      localStorage.setItem(
        "lastQuizResultList",
        JSON.stringify(lastQuizResultList)
      );
    }
  });
</script>

<!-- TODO: User Data -->
<div class="w3-panel">
  <p>
    PFP Username
    {totalQuiz}
    {#if totalCorrects >= 0 && totalWrongs >= 0}
      {totalCorrects} {totalWrongs}
    {/if}
  </p>
</div>

{#if currentNest === "main"}
  <Main
    {lastQuizResultStats}
    {lastQuizResultList}
    on:return={() => {
      currentNest = "form";
    }}
  />
{:else if currentNest === "form"}
  <Quiz
    on:returnArray={(event) => {
      questionsArray = event.detail;
      currentNest = "answer";
    }}
    on:returnDifficulty={(event) => {
      difficulty = event.detail;
    }}
  />
{:else if currentNest === "answer"}
  <Answer
    {questionsArray}
    on:return={(event) => {
      currentNest = "main";
      lastQuizResultStats = event.detail[0];
      lastQuizResultList = event.detail[1];

      totalQuiz = totalQuiz + 1;
      totalCorrects = totalCorrects + event.detail[2];
      totalWrongs = totalWrongs + event.detail[3];
    }}
  />
{/if}
