<script>
  import Header from "./Header.svelte";
  import Content from "./components/Content.svelte";
  import Footer from "./Footer.svelte";
  import Firebase from "./Firebase.svelte";

  let quizIsStarted = false;
  let previousQuizResults = [0, 0];
</script>

<main>
  <Header />

  <Firebase
    cloudData={previousQuizResults}
    hidePanel={quizIsStarted}
    on:returnData={(event) => {
      if (previousQuizResults != null) {
        previousQuizResults = event.detail;
      }
    }}
  />

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
