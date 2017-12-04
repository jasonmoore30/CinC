<template>
  <v-content>



    <p></p>
    <p></p>
  <v-layout column>
    <v-flex xs12 sm8 offset-sm2>

      <v-container fluid grid-list-md class="grey lighten-4">
        <v-layout row wrap>
          <v-flex xs12 sm12 >
      <v-card>
        <v-card-media
          src="/static/gracehopper.png"
          height="400px"

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
      <p></p>

      <v-card>
        <v-card-media
          src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/17800488_1403123846427785_3900485199143704262_n.jpg?oh=2c99b8a56109a2b91b0241cbc93b9c3a&oe=5AD57E1E"
          height="400px"

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
      <p></p>
      <v-card>
        <v-card-media
          src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/17759701_1403482169725286_5912564940964148913_n.jpg?oh=8cccc6a7af6b950c92ecd5f4cda8429e&oe=5A8D55C1"
          height="400px"

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
      <p></p>
      <v-card>
        <v-card-media
          src="https://globalhack.org/hack-resources/uploads/2017/05/Global-Hack-6-2710_FAQweb.jpg"
          height="400px"

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
