<script>
  export let lastQuizResultStats;
  export let lastQuizResultList;
</script>

<div
  class="animate__animated animate__fadeIn w3-panel w3-leftbar w3-border-blue w3-card w3-pale-blue"
>
  <h3>Previous Quiz</h3>
  {#if lastQuizResultStats}
    <h5>{lastQuizResultStats}</h5>
  {/if}
  <div
    class="animate__animated animate__pulse w3-panel w3-leftbar w3-pale-green w3-border-green"
  >
    <p>
      {#if lastQuizResultList}
        {#each lastQuizResultList as list}
          {list}<br />
        {/each}
      {/if}
    </p>
  </div>
</div>
