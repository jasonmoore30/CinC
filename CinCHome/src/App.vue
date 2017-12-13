<template>
  <v-app light>

    <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

      <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
    </head>
    <v-spacer></v-spacer>
    <router-view></router-view>
    <v-tabs dark grow>
      <v-toolbar extended color="purple"  fixed prominent dark extended scroll threshold="100" scroll-target="#scrolling-techniques"
        app>
        <p></p>

        <v-toolbar-title class="display-3"> <p></p> <p> </p> Computing in Community</v-toolbar-title>
        <v-spacer></v-spacer>      

        <v-tabs-bar class="purple" slot="extension">


          <!-- The toolbar items -->
          <v-tabs-item v-for="(homeTab, i) in homeTabs" :key="i" :to="homeTab.url" :href="'#tab-' + (i + 1)">
            {{ homeTab.title }}
          </v-tabs-item>
          <v-menu open-on-hover bottom offset-y>
            <v-tabs-item slot="activator">
              CinC Students
              <v-icon>arrow_drop_down</v-icon>
            </v-tabs-item>
            <v-list class="grey lighten-3">
              <v-list-tile tag="a" v-for="cincstud in cincstuds" :key="cincstud.title" :to="cincstud.url" @click="">
                {{ cincstud.title }}
              </v-list-tile>
            </v-list>
          </v-menu>
          <p></p>
          <v-menu open-on-hover top offset-y>
            <v-tabs-item slot="activator">
              CinC Faculty
              <v-icon>arrow_drop_down</v-icon>
            </v-tabs-item>
            <v-list class="grey lighten-3">
              <v-list-tile tag="a" v-for="cincfac in cincfacs" :key="cincfac.title" :to="cincfac.url" @click="">
                {{ cincfac.title }}
              </v-list-tile>
            </v-list>
          </v-menu>
          <v-tabs-item v-for="(tabName, i) in tabNames" :key="i" :to="tabName.url" :href="'#tab-' + (i + 1)">
            {{ tabName.title }}
          </v-tabs-item>
        </v-tabs-bar>
      </v-toolbar>
    </v-tabs>
   
    <v-footer class="pa-3" color="grey lighten-1" :fixed="fixed" app>
      <v-spacer></v-spacer>
      <div align="right">
        <p>3300 Poinsett Highway Greenville, South Carolina, 29613</p>
        <div><md-icon class="md-size-2x fa fa-envelope-o" aria-hidden="true"></md-icon> CinC@furman.edu</div>
        <v-btn icon href="https://www.facebook.com/Furman-University-Computer-Science-130685927004923/">
          <md-icon class=" md-size-2x fa fa-facebook-official"></md-icon>
        </v-btn>
        <v-btn icon href="http://instagram.com/furmancompsci">
          <md-icon class="md-size-2x fa fa-instagram" aria-hidden="true"></md-icon>
        </v-btn>



      </div>
    </v-footer>
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
        homeTabs: [{
          title: "Home",
          url: '/'
        }],
        tabNames: [{
            title: "CinC Courses",
            url: '/Courses'
          },
          {
            title: "CinC Community Partners",
            url: "/CommunityPartners"
          },
          {
            title: "CinC Calendar",
            url: "/Calendar"
          }
        ],
        cincstuds: [{
            title: "Students Home",
            url: '/Students'
          },
          {
            title: "Project Opportunities",
            url: '/Students/projectops'
          },
          {
            title: "Student Experiences",
            url: '/Students/experiences'
          },
          {
            title: "CinC Courses",
            url: '/Students/courses'
          },
          {
            title: "Travel Opportunities",
            url: '/Students/travelops'
          },
          {
            title: "Student Awards",
            url: '/Students/awards'
          }
        ],
        cincfacs: [{
            title: "Faculty Home",
            url: '/Faculty'
          },
          {
            title: "CinC Courses",
            url: '/Faculty/courses'
          },
          {
            title: "CinC Teaching Fellow",
            url: "/Faculty/teachingfellow"
          },
          {
            title: "CinC Student Fellow",
            url: '/Faculty/studentfellow'
          },
          {
            title: "CinC Faculty Scholars and Projects",
            url: '/Faculty/facultyprojects'
          },
          {
            title: "Faculty Experiences",
            url: "/Faculty/experiences"
          }
        ]
      }
    }
  }
 
</script>
<style>
  #aboutStatement {
    background-color: grey;
  }
</style>
