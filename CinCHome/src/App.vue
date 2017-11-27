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
           v-for="(tabName, i) in tabNames" :key="i" :to="tabName.url" :href="'#tab-' + (i + 1)">
            {{ tabName.title }}
          
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

      <v-container fluid grid-list-xl >
        <v-layout flex-direction:column align-start>
          <v-flex
            v-bind="{ [`xs${card.flex}`]: true }"
            v-for="card in cardsL":key="card.title"
            :to="cardsL.url">
            <v-card height="300px">
              <v-tooltip >
              <v-card-media slot="activator" :src="card.src" height="300px">
               
                <v-container fill-height fluid>
                  <v-layout  align-left justify-center>
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

      <v-container fluid grid-list-xl >
        <v-layout flex-direction:column >
          <v-flex contain>
            <v-card >
               <v-layout >
                  
               </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

      <v-container fluid grid-list-xl >
        <v-layout flex-direction:column>
          <v-flex
            v-bind="{ [`xs${card.flex}`]: true }"
            v-for="card in cardsR":key="card.title" >
            <v-card height="200px">
              <v-tooltip >
              <v-card-media slot="activator" :src="card.src" height="200px">
               
                <v-container fill-height fluid>
                  <v-layout align-right justify-center>
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
      about:"This is our awesome about statement that is being used to seperate the two picture's stuff",
      title: "Computing in Community",
      tabNames: [
        {
          title:"Students",
          url:"/Students"},
        {        
          title:"Faculty",
          url:"/Faculty"},
        {
          title:"Community Partners", 
          url:"/CommunityPartners"},
        {
          title:"Calendar",
          url:"/Calendar"},
        {
          title:"Blog",
          url:"/Blog"},
          ],


      carouselImg: [
          {
            src: 'https://images.fineartamerica.com/images-medium-large-5/3-furman-university-charles-daniel-chapel-greenville-sc-willie-harper.jpg'},
          {
            src: 'https://s3.amazonaws.com/newsimg.furman.edu/wp-content/uploads/2017/01/13173308/furman-sign-entrance-700.jpg'},
          {
            src: 'https://gallabrae.com/wp-content/uploads/2015/09/Furman-main-gate.jpg'}
        ],

      cardsL: [
        {
          title: "CinC Students",
          src: "https://c1.staticflickr.com/8/7304/9194117026_98de91b807_b.jpg",
          url:"/Students" ,
          flex: 4},
        {
          title: "CinC Courses",
          link:"/Courses",
          src:
            "https://campusmap.furman.edu/system/points/pictures/000/000/109/medium/PlylerHall.jpg?1407961614",
          flex: 4},
      ],
      cardsR: [
        {
          title: "CinC Faculty",
          src:
            "https://gallabrae.com/wp-content/uploads/2015/09/Furman-main-gate.jpg",
          url: "/Faculty",
          flex: 4},
        {
          title: "CinC Commutity Partners",
          src:
            "https://images.fineartamerica.com/images-medium-large-5/3-furman-university-charles-daniel-chapel-greenville-sc-willie-harper.jpg",
          url: "/CommunityPartners",  
          flex: 4}
        ],
    };
  }
};
</script>

<style>
  #aboutStatement {
    background-color: grey;
  }

</style>
