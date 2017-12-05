<template>
  <v-app light>
    <v-spacer></v-spacer>
    <router-view></router-view>


    <v-content>
      <v-carousel hide-delimiters>
        <v-carousel-item v-for="(pic,i) in carouselImg" v-bind:src="pic.src" :key="i"></v-carousel-item>
      </v-carousel>

      <div id="aboutStatment">
        <v-container>
          <v-layout justify-space-between row wrap class="grey">
            <span class="display-3 black--text" v-text="aboutTitle"></span>
            <span class="display-2 black--text" v-text="about"></span>
          </v-layout>
        </v-container>
      </div>

      <v-container fluid grid-list-xl>
        <v-layout justify-space-between row wrap>
          <v-flex v-bind="{ [`xs${card.flex}`]: true }" v-for="card in cards" :key="card.title" :to="cards.url">
            <v-card height="300px">
              <v-tooltip>
                <v-card-media slot="activator" :src="card.src" height="300px">

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
    </v-content>

  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        clipped: false,
        fixed: false,
        aboutTitle: "About statement:",
        about: "This is our awesome about statement that is being used to seperate the two picture's stuff",
        title: "Computing in Community",

        carouselImg: [{
            src: 'https://images.fineartamerica.com/images-medium-large-5/3-furman-university-charles-daniel-chapel-greenville-sc-willie-harper.jpg'
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
            src: "https://c1.staticflickr.com/8/7304/9194117026_98de91b807_b.jpg",
            url: "/Students",
            flex: 6
          },
          {
            title: "CinC Courses",
            link: "/Courses",
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
      };
    }
  };

</script>

<style>
  #aboutStatement {
    background-color: grey;
  }

  #backBox {
    background-color: rgba(0, 0, 0, 0.3);
  }


</style>
