<script>
  import { createEventDispatcher } from "svelte";
  import { capitalizeFirstLetter } from "../libs/module";
  let dispatch = createEventDispatcher();

  // Type of form(checkbox, radio, select) || The data to display
  export let formType = "N/A";
  export let values = [];

  // The selectedValue is reserved for radio and select || selectedValues is reserved for checkbox
  let selectedValue = null;
  let selectedValues = [];

  // When the values change it saves them to the reserved variables
  function handleChange(event) {
    if (formType == "check") {
      const checkbox = event.target;
      const value = checkbox.value;

      if (checkbox.checked) {
        selectedValues = [...selectedValues, value];
      } else {
        selectedValues = selectedValues.filter((v) => v !== value);
      }
    } else if (formType == "radio" || formType === "select") {
      const target = event.target;
      const value = target.value;

      selectedValue = value;
    }
  }

  // Sends the selectedValue OR selectedValues
  function handleReturn() {
    if (formType == "check") {
      dispatch("return", selectedValues);
    } else if (formType == "radio" || formType === "select") {
      dispatch("return", selectedValue);
    }
  }

  // Reactive values, when selectedValue or selectedValues change, handleReturn is fired
  $: {
    selectedValue;
    selectedValues;
    handleReturn();
  }
</script>

{#if formType === "check"}
  <!-- * Checkbox -->
  {#each values as value}
    <p>
      <input
        class="w3-check"
        type="checkbox"
        {value}
        on:change={handleChange}
      />
      {capitalizeFirstLetter(value)}
    </p>
  {/each}
{:else if formType === "radio"}
  <!-- * Radio -->
  {#each values as value}
    <p>
      <input
        class="w3-radio"
        type="radio"
        name="radioOption"
        {value}
        on:change={handleChange}
      />
      {capitalizeFirstLetter(value)}
    </p>
  {/each}
{:else if formType === "select"}
  <!-- * Select -->
  <select class="w3-select" on:change={handleChange}>
    {#each values as value}
      <option {value}>{capitalizeFirstLetter(value)}</option>
    {/each}
  </select>
{/if}
