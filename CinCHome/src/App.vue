<template>
  <v-app light>
<v-spacer></v-spacer>
     <v-tabs dark grow>
    <v-toolbar color="purple" dark>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Computing in Community</v-toolbar-title>
      <v-spacer></v-spacer>
      
      <v-tabs-bar class="purple" slot="extension">
        <!-- The toolbar items -->
        <v-tabs-item
          v-for="(item, i) in items"
          :key="i"
          :href="'#tab-' + (i + 1)"
        >
          {{ item }}
        </v-tabs-item>
        <!--The drop down menu -->
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
      </v-tabs-bar>
    </v-toolbar>
    <v-tabs-items>
      <v-tabs-content
        v-for="i in 5"
        :key="i"
        :id="'tab-' + i"
      >
        <v-card flat>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tabs-content>
    </v-tabs-items>
  </v-tabs>

    <main>
 <v-layout column class="deep-purple darken-4">
    <v-flex xs12>
      <v-container fluid grid-list-xl>
        <v-layout justify-space-between row wrap>
          <v-flex
            v-bind="{ [`xs${card.flex}`]: true }" 
            v-for="card in cards":key="card.title">
            <v-card>
              <v-tooltip bottom>
                <span>Interesting 2 sentence descriptiion of what the linked page is</span>
              <v-card-media slot="activator" :src="card.src" height="200px">

                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline white--text" v-text="card.title"></span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
             </v-tooltip>
              <v-card-actions class="white">
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      </div>
    </v-flex>
  </v-layout>
    </main>

    <v-footer :fixed="fixed" app>
      <span>3300 Poinsett Highway
      Greenville, South Carolina, 29613
      864-294-2000</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        fixed: false,
        items: [
          'Students', 'Faculty', 'Community Partnres', 'Community News',
        ],
        cards: [
        { title: 'CinC Students', src: 'https://c1.staticflickr.com/8/7304/9194117026_98de91b807_b.jpg', flex: 6 },
        { title: 'CinC Courses', src: 'https://campusmap.furman.edu/system/points/pictures/000/000/109/medium/PlylerHall.jpg?1407961614', flex: 6 },
        { title: 'CinC Faculty', src: 'https://gallabrae.com/wp-content/uploads/2015/09/Furman-main-gate.jpg', flex: 6 },
        { title: 'CinC Commutity Partners', src: 'https://images.fineartamerica.com/images-medium-large-5/3-furman-university-charles-daniel-chapel-greenville-sc-willie-harper.jpg', flex: 6 }
      ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        title: 'Computing in Community'
      }
    }
  }
</script>

<style>

</style>
