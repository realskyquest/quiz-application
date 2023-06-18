<script>
  import { createEventDispatcher } from "svelte";
  import Results from "./Results.svelte";

  let dispatch = createEventDispatcher();

  export let lastQuizResultStats;
  export let lastQuizResultList;
</script>

<div class="w3-row-padding w3-center w3-dark-grey">
  <div class="w3-half">
    <!-- * Allow results of last quiz -->
    <Results {lastQuizResultStats} {lastQuizResultList} />
  </div>
  <div class="w3-half">
    <div class="w3-panel">
      <!-- * Modes -->
      <button
        on:click={() => {
          dispatch("return");
        }}
        class="animate__animated animate__fadeIn w3-button w3-card w3-block w3-grey"
        ><h2>Classic <br /> Quiz</h2></button
      >
    </div>
  </div>
</div>
