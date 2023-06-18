<script>
  import { createEventDispatcher } from "svelte";
  import Results from "./Results.svelte";

  let dispatch = createEventDispatcher();
  export let questionsArray = [];

  let correctQuestions = 0;
  let wrongQuestions = 0;
  let currentQuestion = 0;

  let answerCorrect = null;
  let correctArray = [];

  // Shuffles the answers
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Gets the answers
  function getAnswers(question) {
    let answersArray = [question.correct_answer, ...question.incorrect_answers];

    answersArray = shuffleArray(answersArray);
    return answersArray;
  }

  // Checks if answer is correct
  function checkAnswer(value) {
    correctArray.push(questionsArray[currentQuestion].correct_answer);

    if (value == questionsArray[currentQuestion].correct_answer) {
      currentQuestion += 1;
      correctQuestions += 1;
      answerCorrect = true;
    } else {
      currentQuestion += 1;
      wrongQuestions += 1;
      answerCorrect = false;
    }
    setTimeout(() => {
      answerCorrect = null;
    }, 100);
  }

  let answers;
  let progressBarStyle = "width: 1%; transition: width 0.5s ease;";

  $: progressBarStyle = `width: ${
    (currentQuestion / questionsArray.length) * 100
  }%; transition: width 0.5s ease;`;

  $: {
    if (currentQuestion < questionsArray.length)
      answers = getAnswers(questionsArray[currentQuestion]);
  }
</script>

{#if currentQuestion !== questionsArray.length}
  <div
    class="w3-panel w3-center w3-leftbar w3-rightbar w3-pale-blue w3-border-blue"
  >
    <p>{currentQuestion}/{questionsArray.length}</p>
    <div
      class="w3-container w3-margin-bottom w3-round w3-blue"
      style={progressBarStyle}
    >
      <br />
    </div>
  </div>
{/if}

<div class="w3-panel w3-dark-grey">
  {#if answerCorrect === null}
    {#if currentQuestion === questionsArray.length}<!-- All answers answered -->
      <Results
        lastQuizResultStats={`Correct questions: ${correctQuestions}, Wrong questions: ${wrongQuestions}`}
        lastQuizResultList={correctArray}
      />
      <button
        on:click={() => {
          let returnList = [
            `Correct questions: ${correctQuestions}, Wrong questions: ${wrongQuestions}`,
            correctArray,
            correctQuestions,
            wrongQuestions,
          ];
          dispatch("return", returnList);
        }}
        class="w3-button w3-block w3-card w3-grey w3-margin-bottom"
        >Return</button
      >
    {:else}<!-- Answer the questions -->
      <div
        class="animate__animated animate__slideInLeft w3-panel w3-card-4 w3-blue"
      >
        <p>
          Question: {questionsArray[currentQuestion].question}
        </p>
      </div>
      <div class="w3-panel">
        {#each answers as answer}
          <button
            on:click={() => {
              checkAnswer(answer);
            }}
            class="animate__animated animate__fadeInLeft w3-button w3-block w3-card w3-grey"
            >{answer}</button
          ><br />
        {/each}
      </div>
    {/if}
  {:else if answerCorrect === true}<!-- Answer is correct -->
    <div class="w3-panel w3-card-4 w3-blue">
      <p>
        Question: {questionsArray[currentQuestion - 1].question}
      </p>
      <h3>The correct answer is {correctArray[correctArray.length - 1]}</h3>
    </div>
    <div class="w3-panel w3-leftbar w3-border-green w3-pale-green w3-center">
      <h1 class="w3-margin animate__animated animate__rubberBand">Correct</h1>
    </div>
  {:else if answerCorrect === false}<!-- Answer is wrong -->
    <div class="w3-panel w3-card-4 w3-blue">
      <p>
        Question: {questionsArray[currentQuestion - 1].question}
      </p>
      <h3>The correct answer is {correctArray[correctArray.length - 1]}</h3>
    </div>
    <div class="w3-panel w3-leftbar w3-border-red w3-pale-red w3-center">
      <h1 class="w3-margin animate__animated animate__rubberBand">Wrong</h1>
    </div>
  {/if}
</div>
