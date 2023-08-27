<script>
  import { createEventDispatcher, afterUpdate } from "svelte";
  let dispatch = createEventDispatcher();

  import { Sound } from "svelte-sound";
  import twinkle_mp3 from "/twinklesparkle.mp3";
  import click_mp3 from "/mouseclick.mp3";
  const twinkle_sound = new Sound(twinkle_mp3);
  const click_sound = new Sound(click_mp3);

  import { makeApiUrl, categories } from "../libs/Quiz.js";
  import Form from "./Form.svelte";
  import Answer from "./Answer.svelte";

  export let quizType = "";
  let state = "choose";
  let apiUrl = "";

  let quizData;
  let questionIndex = 0;
  let quizDataLoading = false;

  let answerCorrect = 0;
  let answerWrong = 0;

  let answerPopup = false;
  let answerValue = false;

  let difficulties = ["Easy", "Medium", "Hard"];
  let selectedCategory = "History";
  let selectedDifficulty = "Easy";
  let selectedQuestionAmount = 5;

  afterUpdate(() => {
    if (quizData != null && questionIndex == quizData.length) {
      twinkle_sound.play();
      dispatch("finished", [answerCorrect, answerWrong]);
    }
  });

  function decodeHTMLEntities(str) {
    var element = document.createElement("div");
    if (str && typeof str === "string") {
      element.innerHTML = str;
      str = element.textContent;
      element.textContent = "";
    }
    element.remove();
    return str;
  }

  async function getQuizData() {
    try {
      quizDataLoading = true;
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (response.ok) {
        quizDataLoading = false;
        return data.results;
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.log("Quiz Error: |", error, "|");
    }
  }

  async function handleSubmit() {
    click_sound.play();
    apiUrl = makeApiUrl(
      selectedCategory,
      selectedDifficulty,
      selectedQuestionAmount
    );
    state = "started";
    quizData = await getQuizData();
  }
</script>

<!-- Title of game mode -->
<div class="container mt-5">
  {#if quizType === "Classic"}
    <div
      class="container text-center rounded-2 p-2"
      style="background-color: #4da6ff;"
    >
      <p class="h4">Classic</p>
    </div>
  {:else if quizType === "Time Countdown"}
    <div
      class="container text-center rounded-2 p-2"
      style="background-color: #ffe478;"
    >
      <p class="h4">Time Countdown</p>
    </div>
  {:else}
    <div
      class="container text-center rounded-2 p-2"
      style="background-color: #eb564b;"
    >
      <p class="h4">Rush Attack</p>
    </div>
  {/if}
</div>

<!-- Options panel -->
{#if state === "choose"}
  <div class="container text-center">
    <form class="row" on:submit|preventDefault={handleSubmit}>
      <p class="text-dark text-opacity-75 h6 mt-2">Category</p>
      <Form
        values={categories}
        on:return={(event) => {
          selectedCategory = event.detail;
        }}
      />
      <p class="text-dark text-opacity-75 h6 mt-2">Difficulty</p>
      <Form
        values={difficulties}
        on:return={(event) => {
          selectedDifficulty = event.detail;
        }}
      />
      <p class="text-dark text-opacity-75 h6 mt-2">Amount of questions</p>
      <Form
        values={[5, 10, 15, 20, 25, 30, 35, 40, 45, 50]}
        on:return={(event) => {
          selectedQuestionAmount = event.detail;
        }}
      />
      <button class="btn text-bg-success mt-2">Submit </button>
    </form>
    <button
      on:click={() => {
        click_sound.play();
        dispatch("exit", "finished");
      }}
      class="btn text-bg-danger mt-2">Exit</button
    >
  </div>
{:else if state === "started"}
  {#if quizDataLoading === true}
    <div class="text-center mt-5">
      <div class="spinner-border" />
    </div>
  {:else if quizDataLoading === false && quizData}
    {#if questionIndex === quizData.length}
      <div class="text-center animate__animated animate__fadeIn">
        {#if answerCorrect >= answerWrong}
          <h4 class="h4 mt-2">Good job!</h4>
        {:else}
          <h4 class="h4 mt-2">Keep practicing!</h4>
        {/if}

        <p>
          Correct answers = {answerCorrect} <br />
          Wrong answers = {answerWrong}
        </p>

        <button
          on:click={() => {
            click_sound.play();
            dispatch("exit", "finished");
          }}
          class="btn text-bg-danger mt-2">Exit</button
        >
      </div>
    {:else}
      <div class="container mt-2">
        <div class="progress">
          <div
            class="progress-bar"
            style="width: {((questionIndex + 1) / quizData.length) * 100}%"
          >
            {questionIndex + 1}
          </div>
        </div>
      </div>
      {#each quizData as quiz}
        {#if quizData.indexOf(quiz) === questionIndex}
          {#if answerPopup === false}
            <Answer
              on:return={(event) => {
                answerPopup = true;
                answerValue = event.detail;

                if (answerValue == true) {
                  answerCorrect += 1;
                } else if (answerValue == false) {
                  answerWrong += 1;
                }

                setTimeout(() => {
                  answerPopup = false;
                  questionIndex += 1;
                }, 3000);
              }}
              question={quiz}
            />
          {:else}
            <div class="container text-center">
              <h4 class="h4 text-dark text-opacity-75 mt-2">
                {decodeHTMLEntities(quizData[questionIndex].question)}
              </h4>

              <div class="mt-5 animate__animated animate__pulse text-light">
                {#if answerValue === true}
                  <div class="p-5 rounded-2" style="background-color: #3ca370;">
                    <h4 class="h4">
                      Your answer is correct<br />Well done!
                    </h4>
                  </div>
                {:else if answerValue === false}
                  <div class="p-5 rounded-2" style="background-color: #eb564b;">
                    <h4 class="h4">
                      Your answer is wrong<br />Try better next time!
                    </h4>
                    <p class="text-dark">
                      Correct Answer is {decodeHTMLEntities(
                        quiz.correct_answer
                      )}
                    </p>
                  </div>
                {/if}
              </div>
            </div>
          {/if}
        {/if}
      {/each}
    {/if}
  {/if}
{/if}
