<script>
  import { createEventDispatcher } from "svelte";
  let dispatch = createEventDispatcher();
  import Form from "./Form.svelte";

  // Gets the functions for getting data
  import { makeApiUrl, callFetch } from "../libs/Otdb_API_Handler.js";

  // Gets variables and functions from a module
  import {
    categories,
    difficulties,
    capitalizeFirstLetter,
  } from "../libs/module.js";

  // Currently chosen quiz details
  let selectedCategory = "history";
  let selectedDifficulty = "easy";

  // Questions from the api
  let quizData;

  // Handles the submit by calling a apiUrl maker and a fetcher
  async function handleSubmit() {
    const fetchUrl = makeApiUrl(selectedCategory, selectedDifficulty);
    quizData = callFetch(fetchUrl);
    let collected = await quizData;
    if (collected) {
      dispatch("returnArray", collected);
    }
  }

  $: {
    dispatch("returnDifficulty", selectedDifficulty);
  }
</script>

<div class="w3-panel w3-dark-grey">
  <form class="w3-panel" on:submit|preventDefault={handleSubmit}>
    <Form
      formType="select"
      values={categories}
      on:return={(event) => {
        selectedCategory = event.detail;
      }}
    />
    <div class="w3-margin-top" />
    <Form
      formType="select"
      values={difficulties}
      on:return={(event) => {
        selectedDifficulty = event.detail;
      }}
    />

    <div class="w3-panel">
      <button class="w3-button w3-card w3-margin-top w3-block w3-grey"
        >Submit</button
      >
    </div>
  </form>
</div>

{#await quizData}
  <div
    class="animate__animated animate__zoomIn w3-panel w3-center w3-leftbar w3-pale-yellow w3-border-yellow"
  >
    <h3>Wait...</h3>
  </div>
{/await}
