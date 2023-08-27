<script>
  import { createEventDispatcher } from "svelte";
  let dispatch = createEventDispatcher();

  // The data to display
  export let values = [];

  // The selectedValue is reserved for radio and select || selectedValues is reserved for checkbox
  let selectedValue = null;

  // When the values change it saves them to the reserved variables
  function handleChange(event) {
    const target = event.target;
    const value = target.value;

    selectedValue = value;
  }

  // Sends the selectedValue OR selectedValues
  function handleReturn() {
    dispatch("return", selectedValue);
  }

  // Reactive values, when selectedValue or selectedValues change, handleReturn is fired
  $: {
    selectedValue;
    handleReturn();
  }
</script>

<!-- * Select -->
<select class="form-select mt-2" on:change={handleChange}>
  {#each values as value}
    <option {value}>{value}</option>
  {/each}
</select>
