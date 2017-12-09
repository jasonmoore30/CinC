<template>
  <v-app light>
    <v-spacer></v-spacer>
    <router-view></router-view>


    <v-content>
      <v-carousel hide-delimiters>
        <v-carousel-item v-for="(pic,i) in carouselImg" v-bind:src="pic.src" :key="i"></v-carousel-item>
      </v-carousel>

      <div class="grey lighten-3">
        <v-container >
          <v-layout justify-space-between row wrap >
            <span class="display-2 black--text" v-text="aboutTitle"></span>
            <span class="display-1 black--text" v-text="about"></span>
          </v-layout>
        </v-container>
      </div>

      <v-container fluid grid-list-xl>
        <v-layout row wrap justify-space-between>
          <v-flex v-bind="{ [`xs${card.flex}`]: true }" v-for="card in cards" :key="card.title" :to="cards.url">
            <v-card height="300px" width="300px">
              <v-tooltip>
                <v-card-media slot="activator" :src="card.src" height="300px" width="300px">

                  <v-container fill-height fluid>
                    <v-layout row wrap align-center justify-center>
                      <v-flex xs12 class="text-xs-center">
                        <div id="backBox">
                        <span class="headline white--text" v-text="card.title"></span>
                        </div>
                      </v-flex>
                    </v-layout>
                  </v-container>

                </v-card-media>
              </v-tooltip>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

  
     <v-container fluid grid-list-xl>
        <v-layout justify-space-between row wrap>
          <v-flex v-bind="{ [`xs${card.flex}`]: true }" v-for="card in calCard" :key="card.title" :to="calCard.url">
            <v-card height="300px" width="300px">
              <tooltip>
                <v-card-media slot="activator" :src="card.src" height="300px" width= "300px">

                  <v-container fill-height fluid>
                    <v-layout row wrap align-center justify-center>
                      <v-flex xs12 class="text-xs-center">
                        <div id="backBox">
                        <span class="headline white--text" v-text="calCard.title"></span>
                        </div>
                      </v-flex>
                    </v-layout>
                  </v-container>

                </v-card-media>
                </tooltip>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

    </v-content>

  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        clipped: false,
        fixed: false,
        aboutTitle: "Mission Statement:",
        about: "Bring the Greenville-Furman communities together through computing in daily life.",
        title: "Computing in Community",

        carouselImg: [{
            src: '/static/carousel1.jpg'
          },
          {
            src: 'https://s3.amazonaws.com/newsimg.furman.edu/wp-content/uploads/2017/01/13173308/furman-sign-entrance-700.jpg'
          },
          {
            src: 'https://gallabrae.com/wp-content/uploads/2015/09/Furman-main-gate.jpg'

          }
        ],
        cards: [{
            title: "CinC Students",
            src: "/static/studentspic.jpg",
            url: "/Students",
            flex: 6
          },
          {
            title: "CinC Courses",
            url: "/Courses",
            src: "/static/20170918_ComputerScience_Lab-184.jpg",
            flex: 6
          },
          {
            title: "CinC Faculty",
            src: "/static/20170918_ComputerScience_Lab-130.jpg",
            url: "/Faculty",
            flex: 6
          },
          {
            title: "CinC Commutity Partners",
            src: "https://parkergroupservices.com/wp-content/uploads/New-Home-The-Parker-Group.jpg",
            url: "/CommunityPartners",
            flex: 6
          }
        ],
        calCard: [{
            title: "Calendar",
            src: "http://www.delhifbc.com/uploads/2/1/9/6/21960794/upcomingevents_orig.jpg",
            flex: 6
        }],
      };
    }
  };

</script>

<style>
  #backBox {
    background-color: rgba(0, 0, 0, 0.3);
  }

  #cardColumns {
    column-count: 2;
   }

</style>
