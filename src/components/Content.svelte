<script>
  import { createEventDispatcher, afterUpdate } from "svelte";
  let dispatch = createEventDispatcher();

  // Sounds here
  import { Sound } from "svelte-sound";
  import click_mp3 from "/mouseclick.mp3";
  const click_sound = new Sound(click_mp3);

  import Handler from "./Handler.svelte";

  /* 
  [1] The type of quiz choosen, 
  [2] Whether the quiz started, 
  [3] The results of the previous quiz stored in a array
  */
  let quizType = "";
  let quizStarted = false;
  export let previousQuizResults = [0, 0];

  // Simple fade animation, when a mode is chosen
  let quizStartedAnimation = false;

  // Shows the options panel after 0.5 seconds
  afterUpdate(() => {
    if (quizStarted == true) {
      setTimeout(() => {
        quizStartedAnimation = true;
        dispatch("quizStarted");
      }, 500);
    }
  });
</script>

{#if quizStarted === true}
  {#if quizStartedAnimation == false}
    <!-- inactive copy of modes panel for the fading animation -->
    <div class="container mt-5 animate__animated animate__fadeOut">
      <div class="row">
        <div class="col">
          <div class="d-grid gap-3">
            <button
              type="button"
              class="btn btn-lg"
              style="background-color: #4da6ff;">Classic</button
            >
            <button
              type="button"
              class="btn btn-lg"
              style="background-color: #ffe478;">Time Countdown</button
            >
            <button
              type="button"
              class="btn btn-lg"
              style="background-color: #eb564b;"
              disabled>Rush Attack</button
            >
          </div>
        </div>
        <div class="col">
          <div class="text-center">
            <h4 class="h4">Previous quiz results</h4>

            {#if previousQuizResults[0] >= previousQuizResults[1]}
              <p class="h5 text-dark text-opacity-75 mt-2">Good job!</p>
            {:else}
              <p class="h5 text-dark text-opacity-75 mt-2">Keep practicing!</p>
            {/if}

            <p>
              Correct answers = {previousQuizResults[0]} <br />
              Wrong answers = {previousQuizResults[1]}
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- END -->
  {:else}
    <!-- Handler -->
    <div class="animate__animated animate__fadeIn animate__delay-1s">
      <Handler
        on:exit={(event) => {
          if (event.detail == "finished") {
            dispatch("finished");
          }
          quizStarted = false;
          quizStartedAnimation = false;
        }}
        on:finished={(event) => {
          dispatch("quizResults", event.detail);
        }}
        {quizType}
      />
    </div>
    <!-- END -->
  {/if}
{:else}
  <!-- Modes panel -->
  <div class="container mt-5">
    <div class="row">
      <div class="col">
        <div class="d-grid gap-3">
          <button
            type="button"
            class="btn text-dark btn-lg animate__animated animate__pulse"
            style="background-color: #4da6ff;"
            on:click={() => {
              click_sound.play();
              quizType = "Classic";
              quizStarted = true;
            }}>Classic</button
          >
          <button
            type="button"
            class="btn text-dark btn-lg animate__animated animate__pulse animate__delay-1s"
            style="background-color: #ffe478;"
            on:click={() => {
              quizType = "Time Countdown";
              quizStarted = true;
            }}>Time Countdown</button
          >
          <button
            type="button"
            class="btn text-dark btn-lg"
            style="background-color: #eb564b;"
            disabled
            on:click={() => {
              quizType = "Rush Attack";
              quizStarted = true;
            }}>Rush Attack</button
          >
        </div>
      </div>
      <div class="col">
        <div class="text-center">
          <h4 class="h4">Previous quiz results</h4>

          {#if previousQuizResults[0] >= previousQuizResults[1]}
            <p class="h5 text-dark text-opacity-75 mt-2">Good job!</p>
          {:else}
            <p class="h5 text-dark text-opacity-75 mt-2">Keep practicing!</p>
          {/if}

          <p>
            Correct answers = {previousQuizResults[0]} <br />
            Wrong answers = {previousQuizResults[1]}
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- END -->
{/if}
