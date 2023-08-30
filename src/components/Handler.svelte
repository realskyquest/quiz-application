<script>
  import { createEventDispatcher, afterUpdate } from "svelte";
  let dispatch = createEventDispatcher();

  // Sounds here
  import { Sound } from "svelte-sound";
  import twinkle_mp3 from "/twinklesparkle.mp3";
  import click_mp3 from "/mouseclick.mp3";
  const twinkle_sound = new Sound(twinkle_mp3);
  const click_sound = new Sound(click_mp3);

  // Some functions and svelte files
  import { makeApiUrl, categories } from "../libs/Quiz.js";
  import Form from "./Form.svelte";
  import Answer from "./Answer.svelte";

  /*
  [1] Type of quiz, classic, etc..
  [2] current state, choose, started
  [3] Stores the api url, with options which is made by makeApiUrl
  */
  export let quizType = "";
  let state = "choose";
  let apiUrl = "";

  /*
  [1] The quizData, questions
  [2] The current question being used
  [3] Loading animation, when the data is being fetched
  */
  let quizData;
  let questionIndex = 0;
  let quizDataLoading = false;

  // The results holder
  let answerCorrect = 0;
  let answerWrong = 0;

  // [1] Visibility of the popup, [2] Whether the answer is correct or not
  let answerPopup = false;
  let answerValue = false;

  // Some variables that are used by Answer.svelte
  let difficulties = ["Easy", "Medium", "Hard"];
  let selectedCategory = "History";
  let selectedDifficulty = "Easy";
  let selectedQuestionAmount = 5;
  let selectedCountDownSeconds = 3;

  // Checks If the quiz is finished and plays a sound, sends back the results
  afterUpdate(() => {
    if (quizData != null && questionIndex == quizData.length) {
      twinkle_sound.play();
      state = "finished";
      dispatch("finished", [answerCorrect, answerWrong]);
    }
  });

  // Handles display of certain words
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

  // Gets the quiz data from the server
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

  // Handles the submit and build a api call
  async function handleSubmit() {
    click_sound.play();
    apiUrl = makeApiUrl(
      selectedCategory,
      selectedDifficulty,
      selectedQuestionAmount
    );
    state = "started";
    TC_timeLeft = selectedCountDownSeconds;
    quizData = await getQuizData();
  }

  // Some variables for Time Countdown
  let TC_timeLeft = selectedCountDownSeconds;
  let TC_timeup = false;

  // The algorithm that handles the timeout.
  if (quizType === "Time Countdown") {
    setInterval(() => {
      if (
        state == "started" &&
        quizDataLoading == false &&
        answerPopup == false
      ) {
        if (TC_timeLeft != 0) {
          // decrease
          TC_timeLeft = TC_timeLeft - 1;
        } else if (TC_timeLeft == 0) {
          // Time up!
          if (TC_timeup == false) {
            answerValue = false;
            answerPopup = true;
            TC_timeup = true;

            setTimeout(() => {
              answerWrong = answerWrong + 1;

              TC_timeup = false;
              answerPopup = false;
              questionIndex += 1;
              TC_timeLeft = selectedCountDownSeconds;
            }, 3000);
          }
        }
      }
    }, 1000);
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
<!-- END -->

{#if state === "choose"}
  <!-- Options panel -->
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
      {#if quizType === "Time Countdown"}
        <p class="text-dark text-opacity-75 h6 mt-2">
          Time limit for each question (seconds)
        </p>
        <Form
          values={[3, 4, 5, 6, 7, 8, 9, 10]}
          on:return={(event) => {
            selectedCountDownSeconds = event.detail;
          }}
        />
      {/if}
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
  <!-- END -->
{:else if quizDataLoading === true}
  <div class="text-center mt-5">
    <div class="spinner-border" />
  </div>
{:else if quizDataLoading === false && quizData}
  {#if questionIndex === quizData.length}
    <!-- Quiz ended -->
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
    <!-- END -->
  {:else}
    <!-- Question answer panel -->
    <div class="container mt-2">
      <div class="progress">
        <div
          class="progress-bar"
          style="width: {((questionIndex + 1) / quizData.length) * 100}%"
        >
          {questionIndex + 1}
        </div>
      </div>
      {#if quizType === "Time Countdown"}
        <div class="text-center">
          <p class="mt-2 h5">{TC_timeLeft} seconds left</p>
        </div>
      {/if}
    </div>
    {#each quizData as quiz}
      {#if quizData.indexOf(quiz) === questionIndex}
        {#if answerPopup === false}
          <Answer
            on:return={(event) => {
              if (answerPopup == false) {
                answerPopup = true;
                answerValue = event.detail;
                TC_timeLeft = selectedCountDownSeconds;

                if (answerValue == true) {
                  answerCorrect += 1;
                } else if (answerValue == false) {
                  answerWrong += 1;
                }

                setTimeout(() => {
                  answerPopup = false;
                  questionIndex += 1;
                }, 3000);
              }
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
                    Correct Answer is {decodeHTMLEntities(quiz.correct_answer)}
                  </p>
                </div>
              {/if}
            </div>
          </div>
        {/if}
      {/if}
    {/each}
    <!-- END -->
  {/if}
{/if}
