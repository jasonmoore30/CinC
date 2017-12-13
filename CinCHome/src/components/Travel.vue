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
          src="static/gracehopper.png"
          height="400px"
 
        >
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <div class="headline">Grace Hopper Celebration for Women in Comuting</div>
            <span class="grey--text">GHC 18 will be Sep. 26–28 in Houston, TX.</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="purple" href="https://ghc.anitab.org/">Learn More</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="show1 = !show1">
            <v-icon>{{ show1 ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
            </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show1">
The Grace Hopper Celebration is the world's largest gathering of women technologists.
It is produced by AnitaB.org and presented in partnership with ACM.
The Grace Hopper Celebration consists of a combination of technical sessions and career sessions and includes a poster session, career fair, awards ceremony, and more. The conference features 650 presenters. Potential presenters submit proposals for panels, workshops, presentations, Birds of a Feather sessions, New Investigators papers, PhD Forum, and Poster Session, including ACM Student Research Competition.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
      <p></p>
 
      <v-card>
        <v-card-media
          src="static/travel1.jpg"
          height="400px"
 
        >
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <div class="headline">Research Competitions</div>
            <span class="grey--text">Present your original research at a CS research conference</span>
          </div>
        </v-card-title>
        <v-card-actions>

          <v-btn flat color="purple"  href="https://www.acm.org/conferences">Learn More</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="show2 = !show2">
            <v-icon>{{ show2 ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show2">
            Student Research Competitions offer a unique forum for undergraduate and graduate students to present their original research at sponsored and co-sponsored conferences before a panel of judges and attendees.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
      <p></p>
      <v-card>
        <v-card-media
          src="static/travel2.jpg"
          height="400px"
 
        >
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <div class="headline">Research Conferences</div>
            <span class="grey--text">Explore other student and professional computer science research</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="purple" href="https://www.computer.org/web/conferences/calendar">Learn More</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="show3 = !show3">
            <v-icon>{{ show3 ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show3">
            The open exchange of ideas and the freedom of thought and expression are central to the aims and goals of CS conferences.  These aims and goals require an environment that recognizes the inherent worth of every person and group, that fosters dignity, understanding, and mutual respect, and that embraces diversity.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
      <p></p>
      <v-card>
        <v-card-media
          src="static/travel3.jpg"
          height="400px"
 
        >
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <div class="headline">Programming Competitions</div>
            <span class="grey--text">It's an opportunity for students to test their ability in designing, understanding and implementing algorithms.
</span>
          </div>
        </v-card-title>
        <v-card-actions>
 
          <v-btn flat color="purple" href="http://trycomputing.org/inspire/computing-student-opportunities">Learn More</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="show4 = !show4">
            <v-icon>{{ show4 ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show4">
            A programming competition generally involves the host presenting a set of logical or mathematical problems to the contestants (who can vary in number from tens to several thousands), and contestants are required to write computer programs capable of solving each problem. Judging is based mostly upon number of problems solved and time spent for writing successful solutions, but may also include other factors (quality of output produced, execution time, program size, etc.)
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
    data: () => ({
      show1: false,
      show2: false,
      show3: false,
      show4: false
    })
  }
</script>


