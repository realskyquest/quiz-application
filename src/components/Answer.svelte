<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  // Sounds here
  import { Sound } from "svelte-sound";
  import click_mp3 from "/mouseclick.mp3";
  const click_sound = new Sound(click_mp3);

  // The current question and a array of answers
  export let question;
  let answers = [question.correct_answer, ...question.incorrect_answers];

  // Mr shuffler
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // HAndler of words
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

  // Checker of answers
  function checkAnswer(value) {
    if (value == question.correct_answer) {
      dispatch("return", true);
    } else {
      dispatch("return", false);
    }
  }

  // SHufflE...
  answers = shuffleArray(answers);
</script>

<div class="container text-center">
  <h4
    class="h4 text-dark text-opacity-75 mt-2 animate__animated animate__slideInLeft"
  >
    {decodeHTMLEntities(question.question)}
  </h4>

  <div class="row">
    {#each answers as answer}
      <button
        on:click={() => {
          click_sound.play();
          checkAnswer(answer);
        }}
        class="btn h6 mt-2 p-2 animate__animated animate__fadeIn"
        style="background-color: #c2c2d1;"
      >
        {decodeHTMLEntities(answer)}
      </button>
    {/each}
  </div>
</div>
