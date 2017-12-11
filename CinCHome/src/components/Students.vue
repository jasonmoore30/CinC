<template>
  <v-content>
    <router-view></router-view>
    <v-parallax src="../static/students1.jpg" height="700">
      <div id="backBox">
        <v-layout column align-center justify-center class="white--text">
          <h1 class="white--text mb-2 display-3">
            Who are CinC Students
          </h1>
        </v-layout>
      </div>
    </v-parallax>
    <div align="center">
      <h4>
        CinC students have been a large part of the CinC community. They participate in research, programming competitions, and conferences.
        CinC students work on projects with Furman faculty members, local Greenville community members, or even professional
        tech companies! Explore the great things CinC students can do.
      </h4>
    </div>
    <p></p>
    <v-parallax src="../static/students2.jpg" height="600">
      <div id="backBox">
        <v-layout column align-center justify-center class="white--text">
          <h1 class="white--text mb-2 display-3">
            Learn more about CinC Student Experiences
          </h1>
        </v-layout>
      </div>
    </v-parallax>
    <p></p>
    <div align="center">
      <h4>
        From internships to research, CinC students share their thoughts, advice, and things they've learned in our Students experiences
        page.
      </h4>
    </div>
    <div class="text-xs-center">
      <v-btn outline color="purple darken-3" href="/#/Students/experiences">Student Experiences</v-btn>
      <v-btn outline color="purple darken-3" href="/#/Students/courses">CinC Courses</v-btn>
      <v-btn outline color="purple darken-3" href="/#/Students/awards">Student Awards</v-btn>
    </div>
    <p></p>
    <v-parallax src="../static/students4.jpg" height="600">
      <div id="backBox">
        <v-layout column align-center justify-center class="white--text">
          <h1 class="white--text mb-2 display-3">
            CinC Student Opportunities
          </h1>
        </v-layout>
      </div>
    </v-parallax>
    <div align="center">
      <h4>
        CinC connects students to travel opportunities, like conferences, and project opportunities, like internships. Check out
        the different projects that are open and upcoming events.
      </h4>
    </div>
    <div class="text-xs-center">
      <v-btn outline color="purple darken-3" href="/#/Students/travelops">Travel Opportunities</v-btn>
      <v-btn outline color="purple darken-3" href="/#/Students/projectops">Project Opportunities</v-btn>
    </div>
    <p></p>
  </v-content>
</template>
<script>
  export default {
    data() {
      return {
        cincstuds: [{
            title: "Students Home",
            url: '/Students'
          },
          {
            title: "Project Opportunities",
            url: '/Students/projectops'
          },
          {
            title: "Student Experiences",
            url: '/Students/experiences'
          },
          {
            title: "CinC Courses",
            url: '/Students/courses'
          },
          {
            title: "Travel Opportunities",
            url: '/Students/travelops'
          },
          {
            title: "Student Awards",
            url: '/Students/awards'
          }
        ],
      }
    }
  }
</script>
<style scoped>
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
