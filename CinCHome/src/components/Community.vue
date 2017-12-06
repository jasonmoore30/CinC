<template>
<v-content>
<v-parallax src="https://lonelyplanetwp.imgix.net/2014/12/Liberty-Bridge-Falls-Park-on-the-Reedy.jpg?fit=min&q=40&sharp=10&vib=20&w=1470" height="700">
      <v-layout column align-center justify-center class="white--text">
        <h1 class="white--text mb-2 display-3">CinC Community</h1>
      </v-layout>
    </v-parallax>
    <p></p>
    <h1>What are CinC Community Partners </h1>

    <h4>Community partnerships include the formal and informal local and global community connections, collaborative projects, and relationships that advance the CinC’s learning goals.
       Digital communications, online communities, social media, and digital learning environments often serve as connectors for these partnerships</h4>
    <p></p>
    <v-parallax src="http://www.southeastdiscovery.com/blog/wp-content/uploads/2014/04/The-Peace-Center-Greenville-South-Carolina.jpg" height="700">
      <v-layout column align-center justify-center class="white--text">
        <h1 class="white--text mb-2 display-3">CinC Community</h1>
      </v-layout>
    </v-parallax>
    <p></p>
 <h1>Who are our CinC Community Partners </h1>

    <h4>Community partnerships include the formal and informal local and global community connections, collaborative projects, and relationships that advance the CinC’s learning goals.
       Digital communications, online communities, social media, and digital learning environments often serve as connectors for these partnerships</h4>
    <p></p>
  <div
    id="e3"
    style="max-width: 1000px; margin: auto;"
    class="grey lighten-3"
  >

    <v-container
      fluid
      style="min-height: 10;"
      grid-list-xl
    >
<v-layout column>
    <v-flex xs12 sm6 offset-sm3>

      <v-container fluid grid-list-md class="grey lighten-4">
        <v-layout row wrap>
          <v-flex
            v-bind="{ [`xs${card.flex}`]: true }"
            v-for="card in cards"
            :key="card.title"
          >
            <v-card>
              <v-card-media
                :src="card.src"
                height="100px"
              >
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline white--text" v-text="card.title"></span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>

            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
    </v-container>
  </div>
    <p></p>
    <v-parallax src="http://www.carolinarealtyguide.com/images/dreamstime_s_30890018_800.jpg" height="700">
      <v-layout column align-center justify-center class="white--text">
        <h1 class="white--text mb-2 display-3">CinC Community</h1>
      </v-layout>
    </v-parallax>
    <p></p>
    <p></p>
    <p></p>
    </v-content>
</template>
<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Pre-fab homes', src: '/static/doc-images/cards/house.jpg', flex: 4 },
        { title: 'Favorite road trips', src: '/static/doc-images/cards/road.jpg', flex: 4 },
        { title: 'Best airlines', src: '/static/doc-images/cards/plane.jpg', flex: 4 },
        { title: 'Best airlines', src: '/static/doc-images/cards/plane.jpg', flex: 4 },
        { title: 'Best airlines', src: '/static/doc-images/cards/plane.jpg', flex: 4 },
        { title: 'Best airlines', src: '/static/doc-images/cards/plane.jpg', flex: 4 },
        { title: 'Best airlines', src: '/static/doc-images/cards/plane.jpg', flex: 4 },
        { title: 'Best airlines', src: '/static/doc-images/cards/plane.jpg', flex: 4 },
        { title: 'Best airlines', src: '/static/doc-images/cards/plane.jpg', flex: 4 }
      ]
    })
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
