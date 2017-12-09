<template>
<v-content>

<v-parallax src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/17991925_1430645887008914_8905570794179922479_n.jpg?oh=3dc06f00af134b068c67040a42935494&oe=5A9813A5" height="500">
      <v-layout column align-center justify-center class="white--text">
        <h1 class="white--text mb-3 display-3">CinC Faculty</h1>
      </v-layout>
    </v-parallax>
    <p></p>
    <p></p>
    <p></p>
    <h3>Meet the dedicated faculty and staff members in the Computer Science Department and see what courses they're offering</h3>
    <v-parallax src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/17155195_1373612002712303_6131280186533422218_n.jpg?oh=24a7f3f5a918ec8f8a482b9380c34f26&oe=5A9A5276" height="600">
      <v-layout column align-center justify-center class="white--text">
        <h1 class="white--text mb-2 display-3">CinC Faculty</h1>
      </v-layout>
    </v-parallax>
    <p></p>
    <p></p>
    <p></p>
    <h3>Looking for a Teaching Fellow or Student Fellow? Send an application here!</h3>
    <v-parallax src="http://www.carolinarealtyguide.com/images/dreamstime_s_30890018_800.jpg" height="700">
      <v-layout column align-center justify-center class="white--text">
        <h1 class="white--text mb-2 display-3">CinC Faculty</h1>
      </v-layout>
    </v-parallax>
    <p></p>
    <p></p>
    <p></p>
    <h3>Take a look at the current project opportunities available for students. Want to submit a project idea? Apply here</h3>
    </v-content>
</template>
<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>
<style>
  body {
    font-family: Helvetica, sans-serif;
  }

  .container {
    width: 5000px;
  }

  h1 {
    text-align: center;
  }

  img {
    text-align: center;
  }

  .submitted {
    color: #4fc08d;
  }

  .disabled {
    color: orange;
  }
  /* some simple transitions to make the upvote and downvote
buttons fade in as a visual cue for the user */

  .glyphicon {
    opacity: 1;
    transition: opacity 0.25s ease-in-out;
    -moz-transition: opacity 0.25s ease-in-out;
    -webkit-transition: opacity 0.25s ease-in-out;
  }

  .glyphicon:hover {
    opacity: 0.75;
    cursor: pointer;
  }

</style>
