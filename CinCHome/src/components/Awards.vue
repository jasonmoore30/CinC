<template>
  <v-content>
    <p></p>
    <center>
      <h3>Furman University Computer Science Department has awarded outstanding CS students over the years.</h3>
    </center>

    <v-layout row>
      <v-flex xs12 offset-xs1>
        <v-layout>
          <v-flex xs9 offset-xs1>
            <v-card>
              <v-toolbar color="grey lighten 3">
                <v-toolbar-title>Dr. Kenneth C. Abernathy Award in Computer Science</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-container style="max-height: 300px" class="scroll-y" id="scroll-target">
                <v-list three-line>
                  <template v-for="abernathyAward in abernathyAwards">
                    <v-subheader v-if="abernathyAward.header" v-text="abernathyAward.header"></v-subheader>
                    <v-divider v-else-if="abernathyAward.divider" v-bind:inset="abernathyAward.inset"></v-divider>
                    <v-list-tile avatar v-else v-bind:key="abernathyAward.title" >
                      <v-list-tile-avatar>
                        <img v-bind:src="abernathyAward.avatar" />
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title v-html="abernathyAward.title"></v-list-tile-title>
                        <v-list-tile-sub-title v-html="abernathyAward.subtitle"></v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </template>
                </v-list>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>

        <p></p>

        <v-layout>
          <v-flex xs9 offset-xs1>
            <v-card>
              <v-toolbar color="grey lighten 3">
                <v-toolbar-title>Heatherington Scholarship for Exceptional Computer Science Students</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-container style="max-height: 300px" class="scroll-y" id="scroll-target">
                <v-list three-line>
                  <template v-for="heatheringtonAward in heatheringtonAwards">
                    <v-subheader v-if="heatheringtonAward.header" v-text="heatheringtonAward.header"></v-subheader>
                    <v-divider v-else-if="heatheringtonAward.divider" v-bind:inset="heatheringtonAward.inset"></v-divider>
                    <v-list-tile avatar v-else v-bind:key="heatheringtonAward.title" >
                      <v-list-tile-avatar>
                        <img v-bind:src="heatheringtonAward.avatar" />
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title v-html="heatheringtonAward.title"></v-list-tile-title>
                        <v-list-tile-sub-title v-html="heatheringtonAward.subtitle"></v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </template>
                </v-list>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>

        <p></p>

        <v-layout>
          <v-flex xs9 offset-xs1>
            <v-card>
              <v-toolbar color="grey lighten 3">
                <v-toolbar-title>Computing in Community Awards</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-container style="max-height: 300px" class="scroll-y" id="scroll-target">
                <v-list three-line>
                  <template v-for="CinCaward in CinCawards">
                    <v-subheader v-if="CinCaward.header" v-text="CinCaward.header"></v-subheader>
                    <v-divider v-else-if="CinCaward.divider" v-bind:inset="CinCaward.inset"></v-divider>
                    <v-list-tile avatar v-else v-bind:key="CinCaward.title">
                      <v-list-tile-avatar>
                        <img v-bind:src="CinCaward.avatar" />
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title v-html="CinCaward.title"></v-list-tile-title>
                        <v-list-tile-sub-title v-html="CinCaward.subtitle"></v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </template>
                </v-list>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>

        <p></p>

        <v-layout>
          <v-flex xs9 offset-xs1>
            <v-card>
              <v-toolbar color="grey lighten 3">
                <v-toolbar-title>Computer Science-Mathematics Major Award for Excellence</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-container style="max-height: 300px" class="scroll-y" id="scroll-target">
                <v-list three-line>
                  <template v-for="CAMaward in CAMawards">
                    <v-subheader v-if="CAMaward.header" v-text="CAMaward.header"></v-subheader>
                    <v-divider v-else-if="CAMaward.divider" v-bind:inset="CAMaward.inset"></v-divider>
                    <v-list-tile avatar v-else v-bind:key="CAMaward.title" >
                      <v-list-tile-avatar>
                        <img v-bind:src="CAMaward.avatar" />
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title v-html="CAMaward.title"></v-list-tile-title>
                        <v-list-tile-sub-title v-html="CAMaward.subtitle"></v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </template>
                </v-list>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
        <p></p>
      </v-flex>
    </v-layout>
  </v-content>
</template>
<script>
  export default {
    data() {
      return {
        abernathyAwards: [{
            header: 'Outstanding Major in the Computer Science Department'
          },
          {
            divider: true,
            inset: true
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Melissa Amick',
            subtitle: "1996"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Greg Cogdell',
            subtitle: "1996"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Sherry Dillinger',
            subtitle: "1997"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Chad Huneycutt',
            subtitle: "1997"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Derek Bruff',
            subtitle: "1998"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Sara Koenug',
            subtitle: "1998"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Hans Bechtel',
            subtitle: "1999"
          },
{
            avatar: 'static/BellTower.png',
            title: 'Konstantin Stoyanov',
            subtitle: "1999"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Lindsey Collicott',
            subtitle: "2000"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'David Bykowski',
            subtitle: "2000"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Brian Franklin',
            subtitle: "2001"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'John Miller',
            subtitle: "2001"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Luke Chuang',
            subtitle: "2002"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Jonathan Howarth',
            subtitle: "2002"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Winter Liu',
            subtitle: "2002"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Will Lowry',
            subtitle: "2003"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Jacob Schroder',
            subtitle: "2003"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Kevin Crosby',
            subtitle: "2004"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Carl Johnson',
            subtitle: "2004"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Kevin Smith',
            subtitle: "2005"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Tyler Johnson',
            subtitle: "2006"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Adam Murphree',
            subtitle: "2006"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Joel Coffman',
            subtitle: "2007"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Brittany Smith',
            subtitle: "2007"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Stephen Abbott',
            subtitle: "2008"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Justin Moore',
            subtitle: "2008"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'William Baucom',
            subtitle: "2009"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Angelica Blackman',
            subtitle: "2010"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'David McHugh',
            subtitle: "2010"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Chad Stolper',
            subtitle: "2011"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Phillip Calvin',
            subtitle: "2012"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Ashley Videtto',
            subtitle: "2012"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Diane Mickelson',
            subtitle: "2013"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Tyler Droll',
            subtitle: "2013"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Paul Aluri',
            subtitle: "2014"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Seth Greenstein',
            subtitle: "2014"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Douglas Wartler',
            subtitle: "2014"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Jeff Dye',
            subtitle: "2015"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Richard Harch',
            subtitle: "2015"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Sam Hill',
            subtitle: "2016"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Andrew Safigan',
            subtitle: "2016"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Daniela Mesa Sanchez',
            subtitle: "2017"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Danny Rivers',
            subtitle: "2017"
          }

        ],
        heatheringtonAwards: [{
            header: "Given in the honor of Dr. Ann Heatherington, one of Furman's first female graduates in computer science"
          },
          {
            divider: true,
            inset: true
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Jeff Dye',
            subtitle: "2014-15"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Sam Hill',
            subtitle: "2014-15"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Andrew Emerson',
            subtitle: "2015-16"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Madeline Bauer',
            subtitle: "2016-17"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Andrew Emerson',
            subtitle: "2016-17"
          },


        ],
        CinCawards: [{
            header: 'For leadership and general excellence in undergraduate Computer Science research and community engagement and service'
          },
          {
            divider: true,
            inset: true
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Aubrey Connors',
            subtitle: "2017"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Trilby Hren',
            subtitle: "2017"
          }

        ],
        CAMawards: [{
            header: 'Outstanding Computer Science-Mathematics Major in the Computer Science Department'
          },
          {
            divider: true,
            inset: true
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Tony Snyder',
            subtitle: "2007"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Amanda Noyes',
            subtitle: "2009"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Kory Kraft',
            subtitle: "2013"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Jonathan Mellman',
            subtitle: "2014"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Rahul Isaac',
            subtitle: "2015"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Maggie Grisell',
            subtitle: "2016"
          },
          {
            avatar: 'static/BellTower.png',
            title: 'Patrick Musau',
            subtitle: "2017"
          }

        ]
      }
    }
  }

</script>
