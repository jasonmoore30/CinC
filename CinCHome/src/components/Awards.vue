<template>
  <v-content>
    <p></p>
<center>
  <h3 >Furman University Computer Science Department has awarded outstanding CS students over the years.</h3>
</center>
  <v-layout row>
    <v-flex xs10 offset-xs1>
      <v-card>
        <v-toolbar color="grey lighten 3">

          <v-toolbar-title >Dr. Kenneth C. Abernathy Award in Computer Science</v-toolbar-title>
          <v-spacer></v-spacer>

        </v-toolbar>
        <v-list three-line>
          <template v-for="abernathyAward in abernathyAwards">
            <v-subheader v-if="abernathyAward.header" v-text="abernathyAward.header"></v-subheader>
            <v-divider v-else-if="abernathyAward.divider" v-bind:inset="abernathyAward.inset"></v-divider>
            <v-list-tile avatar v-else v-bind:key="abernathyAward.title" @click="">
              <v-list-tile-avatar>
                <img v-bind:src="abernathyAward.avatar"/>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="abernathyAward.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="abernathyAward.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
      <p></p>
      <v-card>
        <v-toolbar color="grey lighten 3">

          <v-toolbar-title >Heatherington Scholarship for Exceptional Computer Science Students</v-toolbar-title>
          <v-spacer></v-spacer>

        </v-toolbar>
        <v-list three-line>
          <template v-for="heatheringtonAward in heatheringtonAwards">
            <v-subheader v-if="heatheringtonAward.header" v-text="heatheringtonAward.header"></v-subheader>
            <v-divider v-else-if="heatheringtonAward.divider" v-bind:inset="heatheringtonAward.inset"></v-divider>
            <v-list-tile avatar v-else v-bind:key="heatheringtonAward.title" @click="">
              <v-list-tile-avatar>
                <img v-bind:src="heatheringtonAward.avatar"/>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="heatheringtonAward.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="heatheringtonAward.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
      <p></p>
    <v-card>
        <v-toolbar color="grey lighten 3">

          <v-toolbar-title >Computing in Community Awards</v-toolbar-title>
          <v-spacer></v-spacer>

        </v-toolbar>
        <v-list three-line>
          <template v-for="CinCaward in CinCawards">
            <v-subheader v-if="CinCaward.header" v-text="CinCaward.header"></v-subheader>
            <v-divider v-else-if="CinCaward.divider" v-bind:inset="CinCaward.inset"></v-divider>
            <v-list-tile avatar v-else v-bind:key="CinCaward.title" @click="">
              <v-list-tile-avatar>
                <img v-bind:src="CinCaward.avatar"/>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="CinCaward.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="CinCaward.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
      <p></p>
       <v-card>
        <v-toolbar color="grey lighten 3">

          <v-toolbar-title >Computer Science-Mathematics Major Award for Excellence</v-toolbar-title>
          <v-spacer></v-spacer>

        </v-toolbar>
        <v-list three-line>
          <template v-for="CAMaward in CAMawards">
            <v-subheader v-if="CAMaward.header" v-text="CAMaward.header"></v-subheader>
            <v-divider v-else-if="CAMaward.divider" v-bind:inset="CAMaward.inset"></v-divider>
            <v-list-tile avatar v-else v-bind:key="CAMaward.title" @click="">
              <v-list-tile-avatar>
                <img v-bind:src="CAMaward.avatar"/>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="CAMaward.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="CAMaward.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
      <p></p>
    </v-flex>
  </v-layout>
  </v-content>
</template>
<script>
  export default {
    data () {
      return {
        abernathyAwards: [
          { header: 'Outstanding Major in the Computer Science Department' },
          { avatar: '/static/BellTower.png', title: 'Melissa Amick', subtitle: "1996" },
          { divider: true, inset: true },
          { avatar: '/static/BellTower.png', title: 'Greg Cogdell', subtitle: "1996" },
          { divider: true, inset: true }

        ],
        heatheringtonAwards: [
          { header: "Given in the honor of Dr. Ann Heatherington, one of Furman's first female graduates in computer science" },
          { avatar: '/static/BellTower.png', title: 'Jeff Dye', subtitle: "2014-15" },
          { divider: true, inset: true },
          { avatar: '/static/BellTower.png', title: 'Sam Hill', subtitle: "2014-15" },
          { divider: true, inset: true }
        ],
        CinCawards: [
          { header: 'For leadership and general excellence in undergraduate Computer Science research and community engagement and service' },
          { avatar: '/static/BellTower.png', title: 'Aubrey Connors', subtitle: "2017" },
          { divider: true, inset: true },
          { avatar: '/static/BellTower.png', title: 'Trilby Hren', subtitle: "2017" },
          { divider: true, inset: true },
        ],
        CAMawards: [
          { header: 'Outstanding Computer Science-Mathematics Major in the Computer Science Department' },
          { avatar: '/static/BellTower.png', title: 'Tony Snyder', subtitle: "2007" },
          { divider: true, inset: true },
          { avatar: '/static/BellTower.png', title: 'Amanda Noyes', subtitle: "2009" },
          { divider: true, inset: true },
        ]
      }
    }
  }
</script>
