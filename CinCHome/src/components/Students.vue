<template>
  <v-content>
    <v-parallax src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/18056693_1423117824428387_6400334492341698901_n.jpg?oh=def96893d7389e6446b27bd689ed627a&oe=5A93EC1D" height="1000">
      <v-layout column align-center justify-center class="white--text">
        <h1 class="white--text mb-2 display-3">CinC Students</h1>
      </v-layout>
    </v-parallax>
<p></p>
    <p></p>
    <p></p>
    <h3>Meet the dedicated faculty and staff members in the Computer Science Department and see what courses they're offering</h3>
    <v-parallax src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/17795939_1403594246380745_8462921258604241790_n.jpg?oh=824a64b0714989171c3f7870588ea347&oe=5A92A0A1" height="600">
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
