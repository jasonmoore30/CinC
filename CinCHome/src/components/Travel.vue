<template>
  <v-content>
    <v-parallax src="http://www.furman.edu/admission/EngageFurman/Visit/PublishingImages/PlanVisit.jpg" height="500">
      <v-layout column align-center justify-center class="white--text">
        <h1 class="white--text mb-2 display-3">CinC Students</h1>
      </v-layout>
    </v-parallax>


    <p></p>
    <p></p>
  <v-layout column>
    <v-flex xs12 sm8 offset-sm2>

      <v-container fluid grid-list-md class="grey lighten-4">
        <v-layout row wrap>
          <v-flex xs12 sm12 >
      <v-card>
        <v-card-media
          src="..\assets\gracehopper.png"
          height="300px"

        >
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <div class="headline">Grace Hopper Celebration for Women in Comuting</div>
            <span class="grey--text">1,000 miles of wonder</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat>Share</v-btn>
          <v-btn flat color="purple">Explore</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show">
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
      <v-spacer></v-spacer>
      <v-card>
        <v-card-media
          src="/static/doc-images/cards/sunshine.jpg"
          height="200px"

        >
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <div class="headline">Research Competitions</div>
            <span class="grey--text">1,000 miles of wonder</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat>Share</v-btn>
          <v-btn flat color="purple">Explore</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show">
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
      <v-spacer></v-spacer>
      <v-card>
        <v-card-media
          src="/static/doc-images/cards/sunshine.jpg"
          height="200px"

        >
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <div class="headline">Research Conferences</div>
            <span class="grey--text">1,000 miles of wonder</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat>Share</v-btn>
          <v-btn flat color="purple">Explore</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show">
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
      <v-card>
        <v-card-media
          src="/static/doc-images/cards/sunshine.jpg"
          height="200px"

        >
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <div class="headline">Programming Competitions</div>
            <span class="grey--text">1,000 miles of wonder</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat>Share</v-btn>
          <v-btn flat color="purple">Explore</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show">
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>

        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
  </v-content>
</template>
<script>
  export default {
   data() {
      show: false
      return {

      }
    }
    }
</script>
