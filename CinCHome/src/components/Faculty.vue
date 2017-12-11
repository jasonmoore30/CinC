<template>
<v-content>
 
    <v-parallax src="../static/fac1.jpg" height="500">
      <div id="backBox">
        <v-layout column align-center justify-center class="white--text">
          <h1 class="white--text mb-3 display-3">CinC Faculty</h1>
        </v-layout>
      </div>
    </v-parallax>
   <div align="center">
      <h4>
        CinC faculty are the backbone of the CinC community. They are the ones providing research projects and connecting students with internships.
        CinC faculty work hard to ensure that projects with CinC students, local Greenville community members, and professional tech companies get done. Explore the great things CinC faculty can do.
      </h4>
    </div>
    <v-parallax src="../static/fac2.jpg" height="600">
<div id="backBox">
      <v-layout column align-center justify-center class="white--text">
        <h1 class="white--text mb-2 display-3">CinC Faculty</h1>
      </v-layout>
</div>
    </v-parallax>
    <p></p>
    <div align="center">
      <h4>
        If you're looking for a student fellow for a current project, have a project idea, or just want to browse ongoing projects, look no further.
      </h4>
    </div>
 <div class="text-xs-center">
      <v-btn outline color="purple darken-3" href="/#/Faculty/projects">Faculty Projects</v-btn>
      <v-btn outline color="purple darken-3" href="/#/Faculty/teachingfellow">Teaching Fellow</v-btn>
      <v-btn outline color="purple darken-3" href="/#/Faculty/studentfellow">Student Fellow</v-btn>
    </div>
    <p></p>
    <v-parallax src="../static/fac3.jpg" height="700">
<div id="backBox">
      <v-layout column align-center justify-center class="white--text">
        <h1 class="white--text mb-2 display-3">CinC Faculty</h1>
      </v-layout>
</div>
    </v-parallax>
    <p></p>
    <div align="center">
      <h4>
        Explore some of the current CinC courses and read up on some faculty experiences.
      </h4>
    </div>
 <div class="text-xs-center">
      <v-btn outline color="purple darken-3" href="/#/Faculty/experiences">Faculty Experiences</v-btn>
      <v-btn outline color="purple darken-3" href="/#/Faculty/courses">CinC Courses</v-btn>
    </div>
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
<<style scoped>
#backBox {
    background-color: rgba(0, 0, 0, 0.5);
  }
 
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
