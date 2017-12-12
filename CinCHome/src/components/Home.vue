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
            <span class="display-1 black--text" v-text="about"></span>
            </div>
          </v-layout>
        </v-container>
      </div>
  
      <v-container fluid grid-list-xl>
        <v-layout row wrap justify-space-between>
          <v-flex v-bind="{ [`xs${card.flex}`]: true }" v-for="card in cards" :key="card.title" :href="cards.url">
            <router-link :to="card.url">
              <v-card height="300px" width="300px">
                <v-tooltip>
                  <v-card-media slot="activator" :src="card.src" height="300px" width="300px">

                    <v-container fill-height fluid>
                      <v-layout row wrap align-center justify-center>
                        <v-flex xs12 class="text-xs-center">
                          <div id="backBox">
                            <span class="headline white--text">{{card.title}}</span>
                          </div>
                        </v-flex>
                      </v-layout>
                    </v-container>

                  </v-card-media>
                </v-tooltip>
              </v-card>
            </router-link>
          </v-flex>
        </v-layout>
      </v-container>

  
     <v-container fluid grid-list-xl>
        <v-layout justify-space-between row wrap>
          <v-flex v-bind="{ [`xs${card.flex}`]: true }" v-for="card in calBlogCards" :key="card.title">
             <router-link :to="card.url">
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
            </router-link>
          </v-flex>
        </v-layout>
      </v-container>

      <!-- <div id="calBox">

         <span class="display-1 white"> Title: {{this.calEvent[0].title}}</span>
      </div> -->

    <div id="calBox">
      <table>
        <caption><b>Calendar</b></caption>
        <tr>
          <th>Title</th>
          <th>Event</th>
          <th>Event Date </th>
          <th>Location </th>
        </tr>
        <tr>
          <td>{{this.calEvent[0].title}}</td>
          <td>{{this.calEvent[0].description}}</td>
          <td>{{this.calEvent[0].start_time}}</td>
          <td>{{this.calEvent[0].location}}</td>
        </tr>
        <tr>
          <td>{{this.calEvent[1].title}}</td>
          <td>{{this.calEvent[1].description}}</td>
          <td>{{this.calEvent[1].start_time}}</td>
          <td>{{this.calEvent[1].location}}</td>
        </tr>
        <tr>
          <td>{{this.calEvent[2].title}}</td>
          <td>{{this.calEvent[2].description}}</td>
          <td>{{this.calEvent[2].start_time}}</td>
          <td>{{this.calEvent[2].location}}</td>
        </tr>
      </table>
    </div>

      <div id="blogBox">
        <table>
          <caption>Most Recent Blog Post </caption>
          <tr>
            <th>Title</th>
            <th>Post</th>
            <th>Date</th>
          </tr>
          <tr>
            <td>{{this.blogPost[0].title}}</td>
            <td>{{this.blogPost[0].body}}</td>
            <td>{{this.blogPost[0].post_date}}</td>
          </tr>
        </table>
      </div>

    </v-content>
  </v-app>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
        clipped: false,
        fixed: false,
        about: "Bring the Greenville-Furman communities together through computing in daily life.",
        title: "Computing in Community",
        calEvent: [],
        blogPost: [],

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
            src: "/static/upcomingevents.jpg",
            flex: 6,
            url:"/Calendar"
        },
        {
            title: "Blog",
            src:"/static/blogPic.jpg",
            flex: 6,
            url:"/Blog"
        }],
      };
    },

    methods: {

      fetchEvent() {
      let self = this
      axios.get('https://safe-beach-15501.herokuapp.com/api/calendar/events').then(
        response => {
          console.log(response)
          let temp = response.data
          temp.forEach(obj => {obj.editdialog = false})
          self.calEvent = temp
        }
      )
      },
      fetchBlog() {
      let self = this
      axios.get('https://safe-beach-15501.herokuapp.com/api/blog/posts').then(
        response => {
          console.log(response)
          let temp = response.data
          temp.forEach(obj => {obj.editdialog = false})
          self.blogPost = temp
        }
      )
      }
    },
    mounted: function() {
      self = this;
      self.fetchEvent();
      self.fetchBlog();
    }
  }

</script>

<style>

table, th, td{
  border:1px solid white;
  border-collapse:collapse;
  margin: 2%;
  color:white;
  font-size:14px;

}
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
    background-color: rgba(0, 0, 0, 0.5);
  }

  a:link {
    color:white;
    background-color: transparent;
    text-decoration: none;
  }

  #calBox {
    background-color:purple;
    height: 300px;
    width:47%;
    margin-left: 2%;
    margin-bottom: 2%;
    float: left;
    clear: none;
  }

  #blogBox {
    background-color:purple;
    height: 100px;
    width:47%;
    margin-right: 2%;
    margin-bottom:2%;
    float: right;
    clear: none;
  }
</style>
