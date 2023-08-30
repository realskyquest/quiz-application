<script>
  import Header from "./Header.svelte";
  import Content from "./components/Content.svelte";
  import Footer from "./Footer.svelte";
  import Firebase from "./Firebase.svelte";

  // [1] Whether the quiz started or not, [2] The previous results of the quiz
  let quizIsStarted = false;
  let previousQuizResults = [0, 0];
</script>

<main>
  <Header />

  <!-- Firebase, for account handling -->
  <!-- <Firebase
    cloudData={previousQuizResults}
    hidePanel={quizIsStarted}
    on:returnData={(event) => {
      if (previousQuizResults != null) {
        previousQuizResults = event.detail;
      }
    }}
  /> -->

  <!-- The content which is the main part of the app -->
  <Content
    on:quizResults={(event) => {
      previousQuizResults = event.detail;
    }}
    on:quizStarted={() => {
      quizIsStarted = true;
    }}
    on:finished={() => {
      quizIsStarted = false;
    }}
    {previousQuizResults}
  />

  <Footer />
</main>
