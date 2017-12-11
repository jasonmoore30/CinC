<template>
<v-content>
<v-parallax src="https://lonelyplanetwp.imgix.net/2014/12/Liberty-Bridge-Falls-Park-on-the-Reedy.jpg?fit=min&q=40&sharp=10&vib=20&w=1470" height="700">
      <v-layout column align-center justify-center class="white--text">
        <h1 class="white--text mb-2 display-3">CinC Community</h1>
      </v-layout>
    </v-parallax>
    <p></p>
    <p></p>
    <p></p>
    <v-parallax src="http://www.southeastdiscovery.com/blog/wp-content/uploads/2014/04/The-Peace-Center-Greenville-South-Carolina.jpg" height="700">
      <v-layout column align-center justify-center class="white--text">
        <h1 class="white--text mb-2 display-3">CinC Community</h1>
      </v-layout>
    </v-parallax>
    <p></p>
    <p></p>
    <p></p>
    <v-parallax src="http://www.carolinarealtyguide.com/images/dreamstime_s_30890018_800.jpg" height="700">
      <v-layout column align-center justify-center class="white--text">
        <h1 class="white--text mb-2 display-3">CinC Community</h1>
      </v-layout>
    </v-parallax>
    <p></p>
    <p></p>
    <p></p>
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
<style scoped>
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
