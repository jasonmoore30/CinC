<template>
  <v-content>
    <v-parallax src="http://www.furman.edu/admission/EngageFurman/Visit/PublishingImages/PlanVisit.jpg" height="500">
      <v-layout column align-center justify-center class="white--text">
        <h1 class="white--text mb-2 display-3">CinC Faculty</h1>
      </v-layout>
    </v-parallax>

    <v-tabs dark grow>
      <v-toolbar color="purple" dark>
        <v-tabs-bar class="purple" slot="extension">
          <v-tabs-slider color="yellow"></v-tabs-slider>
          <v-tabs-item v-for="(tabName, i) in tabNames" :key="i" :to="tabName.url" :href="'#tab-' + (i + 1)">
            {{ tabName.title }}
          </v-tabs-item>
          <v-menu :nudge-width="100" left bottom>
            <v-list class="grey lighten-3">
              <v-list-tile tag="a" v-for="op in ops" :key="op.title" @click="">
                {{ op.title }}
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-tabs-bar>
      </v-toolbar>
      <v-tabs-items>
        <v-tabs-content v-for="i in 5" :key="i" :id="'tab-' + i">
          <v-card flat>

          </v-card>
        </v-tabs-content>
      </v-tabs-items>
    </v-tabs>
  </v-content>
</template>
<script>
  export default {
    data() {
      return {
        tabNames: [
          {
            title: "Faculty Home",
            url: "/faculty"
          },
          {
            title: "Project Opportunities",
            url: "/projects"
          },
          {
            title: "Experiences",
            url: "/experiences"
          },
          {
            title: "CinC Courses",
            url: "/courses"
          },
          {
            title: "Student Awards",
            url: "/awards"
          },
          {
            title: "Travel Opportunities",
            url: "/travel"
          }
        ],
        ops: [{
            title: "Research Conferences"
          },
          {
            title: "Research Competitions"
          },
          {
            title: "Programming Competitions"
          },
          {
            title: "Grace Hopper Celebration of Women in Computing"
          }
        ]
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