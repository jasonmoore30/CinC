<template>
  <v-app light>
    <v-spacer></v-spacer>
      <v-tabs dark grow>
      <v-toolbar color="purple" 
        fixed
        dense
        dark 
        scroll threshold= "100"
        scroll-target="#scrolling-techniques"
        app>
        <v-toolbar-title>Computing in Community</v-toolbar-title>
        <v-spacer></v-spacer>
        
        <v-tabs-bar class="purple" slot="extension">
          <!-- The toolbar items -->
          <v-tabs-item
            v-for="(item, i) in items"
            :key="i"
            :href="src"
          >
            {{ item.title }}
          </v-tabs-item>
          <!--The drop down menu 
          <v-menu :nudge-width="100" left bottom>
            <v-tabs-item slot="activator">
              Menu
              <v-icon>arrow_drop_down</v-icon>
            </v-tabs-item>
            <v-list class="grey lighten-3">
              <v-list-tile
                tag="a"
                v-for="n in 4"
                :key="n"
                @click=""
              >
                Item {{ n }}
              </v-list-tile>
            </v-list>
          </v-menu>
          -->
        </v-tabs-bar>
      </v-toolbar>
  </v-tabs>

<v-content>
      <v-carousel hide-delimiters>
        <v-carousel-item v-for="(item,i) in items2" v-bind:src="item.src" :key="i"></v-carousel-item>
      </v-carousel>
      
      <v-container>
        <v-layout justify-space-between row wrap>
        <span class="display-3 black--text" v-text="aboutTitle"></span>
        <span class="display-2 black--text" v-text="about"></span>
        </v-layout>
      </v-container>

      <v-container fluid grid-list-xl >
        <v-layout justify-space-between row wrap>
          <v-flex
            v-bind="{ [`xs${card.flex}`]: true }" 
            v-for="card in cards":key="card.title">
            <v-card height="200px">
              <v-tooltip bottom>
                <span>Interesting 2 sentence description of what the linked page is</span>
              <v-card-media slot="activator" :src="card.src" height="200px">
               
                <v-container fill-height fluid>
                  <v-layout row wrap align-center justify-center>
                    <v-flex xs12  class="text-xs-center">
                      <span class="headline white--text" v-text="card.title"></span>
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

    <v-footer :fixed="fixed" app>
      <span>3300 Poinsett Highway
      Greenville, South Carolina, 29613
      864-294-2000</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      fixed: false,
      aboutTitle:"About statement:",
      about:"This is our awesome about statement that is being used to seperate the two picture stuff",
      title: "Computing in Community",
      items: [
        {
          title:"Students",
          src:"/Students"},
        {        
          title:"Faculty",
          src:"/Faculty"},
        {
          title:"Community Partners", 
          src:""},
        {
          title:"Community News",
          src:""},
          ],
      items2: [
          {
            src: 'https://images.fineartamerica.com/images-medium-large-5/3-furman-university-charles-daniel-chapel-greenville-sc-willie-harper.jpg'},
          {
            src: 'https://s3.amazonaws.com/newsimg.furman.edu/wp-content/uploads/2017/01/13173308/furman-sign-entrance-700.jpg'},
          {
            src: 'https://gallabrae.com/wp-content/uploads/2015/09/Furman-main-gate.jpg'}
        ],
      cards: [
        {
          title: "CinC Students",
          src: "https://c1.staticflickr.com/8/7304/9194117026_98de91b807_b.jpg",
          flex: 6},
        {
          title: "CinC Courses",
          src:
            "https://campusmap.furman.edu/system/points/pictures/000/000/109/medium/PlylerHall.jpg?1407961614",
          flex: 6},
        {
          title: "CinC Faculty",
          src:
            "https://gallabrae.com/wp-content/uploads/2015/09/Furman-main-gate.jpg",
          flex: 6},
        {
          title: "CinC Commutity Partners",
          src:
            "https://images.fineartamerica.com/images-medium-large-5/3-furman-university-charles-daniel-chapel-greenville-sc-willie-harper.jpg",
          flex: 6}
        ],
    };
  }
};
</script>

<style>

</style>
