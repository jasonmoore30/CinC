<template>
  <v-app light>
    <v-spacer></v-spacer>
    <router-view></router-view>


    <v-content>
      <v-carousel hide-delimiters>
        <v-carousel-item v-for="(pic,i) in carouselImg" v-bind:src="pic.src" :key="i"></v-carousel-item>
      </v-carousel>

      <div class="grey lighten-3" id="about">
        <v-container >
          <v-layout justify-space-between row wrap >
            <img src="/static/bwLogo.png" style="height:250px;width:250px;clear:both">
            <div id= "aboutText">
            <span class="display-2 black--text" v-text="aboutTitle"></span>
            <span class="display-1 black--text" v-text="about"></span>
            </div>
          </v-layout>
        </v-container>
      </div>
  
      <v-container fluid grid-list-xl>
        <v-layout row wrap justify-space-between>
          <v-flex v-bind="{ [`xs${card.flex}`]: true }" v-for="card in cards" :key="card.title" :href="cards.url">
            <v-card height="300px" width="300px">
              <v-tooltip>
                <v-card-media slot="activator" :src="card.src" height="300px" width="300px">

                  <v-container fill-height fluid>
                    <v-layout row wrap align-center justify-center>
                      <v-flex xs12 class="text-xs-center">
                        <div id="backBox" href="/Courses">
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
          <v-flex v-bind="{ [`xs${card.flex}`]: true }" v-for="card in calBlogCards" :key="card.title" :href="calBlogCards.url">
            <v-card height="100px">
              <tooltip>
                <v-card-media slot="activator" :src="card.src" height="100px">

                  <v-container fill-height fluid>
                    <v-layout row wrap align-center justify-center>
                      <v-flex xs12 class="text-xs-center">
                        <div id="backBox">
                        <span class="headline white--text" v-text="calBlogCards.title"></span>
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

      

      <div id="calBox">
          <span class="calEventBox" onload="performGetRequest1()"> </span>
          <span class="calEventBox" onload="performGetRequest2()"> </span>
          <span class="calEventBox" onload="performGetRequest3()"> </span>
      </div>

      <div id="blogBox">
          <span> This is where the blog will show </span>
      </div>

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
        calEvent: [],

        carouselImg: [{
            src: '/static/mallPic.jpg'
          },
          {
            src: '/static/carousel1.jpg'
          },
          {
            src: '/static/fancyPic.jpg'

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
            title: "CinC Communtity Partners",
            src: "/static/comunityPartnersPic.jpg",
            url: "/CommunityPartners",
            flex: 6
          }
        ],
        calBlogCards: [{
            title: "Calendar",
            src: "http://www.delhifbc.com/uploads/2/1/9/6/21960794/upcomingevents_orig.jpg",
            flex: 6
        },
        {
            title: "Blog",
            src:"/static/blogPic.jpg",
            flex: 6
        }],
      };
    },

    methods() { 

      performGetRequest1(); {
        var resultElement = document.getElementById('1');
        resultElement.innerHTML = '';
      }
    }
  };


</script>

<style>
  #about {
    margin-top:2%;
  }

  #about img {
    margin:auto;
    clear:both;
  }

  #aboutText {
    float: right;
    clear: both;
  }

  #backBox {
    background-color: rgba(0, 0, 0, 0.3);
  }

  #calBox {
    background-color:lightgrey;
    height: 300px;
    width:47%;
    margin-left: 2%;
    margin-bottom: 2%;
    float: left;
    clear: none;
  }

  #blogBox {
    background-color:lightgrey;
    height: 300px;
    width:47%;
    margin-right: 2%;
    margin-bottom:2%;
    float: right;
    clear: none;
  }

</style>
