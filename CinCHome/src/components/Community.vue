<template>
  <v-content>
    <v-parallax src="../static/bridge.jpg"
      height="700">
      <div id="backBox">
        <v-layout column align-center justify-center class="white--text">
        <h1 class="white--text mb-2 display-3">What are CinC Community Partners?</h1>
      </v-layout>
      </div>

    </v-parallax>
    <p></p>
    <div align="center">
      <h4>Community partnerships include the formal and informal local and global community connections, collaborative projects,
        and relationships that advance the CinC’s learning goals. Digital communications, online communities, social media,
        and digital learning environments often serve as connectors for these partnerships</h4>
    </div>

    <p></p>
    <v-parallax src="../static/peacecenter.jpg"
      height="700">
<div id="backBox">
      <v-layout column align-center justify-center class="white--text">
        <h1 class="white--text mb-2 display-3">Who are our CinC Community Partners?</h1>
      </v-layout>
</div>
    </v-parallax>
    <p></p>
    <h1> </h1>
    <div align="center">
      <h4>Here are our current CinC community partners</h4>
    </div>

    <p></p>

    <v-layout column>
      <v-flex sm8 sm3 offset-sm2>

        <v-container fluid grid-list-xl>
          <v-layout row wrap>
            <v-flex v-bind="{ [`xs${card.flex}`]: true }" v-for="card in cards" :key="card.title">
              <v-card>
                <v-card-media :src="card.src" height="250px">
                  <v-layout>
                    <v-flex>
                      <span class="headline white--text" v-text="card.title"></span>
                    </v-flex>
                  </v-layout>
                </v-card-media>

              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
    <div align="center">
      <h4>
        If you're interested in becoming a CinC community partner, contact us at
        <md-icon class="md-size-2x fa fa-envelope-o" aria-hidden="true"></md-icon> CinC@furman.edu
      </h4>
    </div>

    <p></p>
    <v-parallax src="../static/dt.jpg" height="700">
<div id="backBox">
      <v-layout column align-center justify-center class="white--text">
        <h1 class="white--text mb-2 display-3">Got Something to Share?</h1>
      </v-layout>
</div>
    </v-parallax>
    <div align="center">
      <h4>
        If you have an experience you want to share, whether it's an internship or connection you made within the CinC community,
        share it with us! We love to hear experience from the CinC community members
      </h4>
    </div>
    <v-container class="mt-5">
      <v-layout flexbox class="mt-5">
        <!-- page title -->
        <v-flex xs12>
          <v-card>
            <v-card-media class="lighten-4 purple">
              <v-layout row wrap class="my-3">
                <v-flex xs8 flexbox>
                  <div class="headline text-xs-left my-font-color pl-3 pt-3">Blog</div>
                </v-flex>
                <v-flex xs4 flexbox>
                  <v-select class="pr-3 pb-2" white v-bind:items="categories" v-model="categorySearch" label="Sort By" single-line auto prepend-icon="search"
                    hide-details></v-select>
                </v-flex>
                <v-flex xs9>
                  <div class="subheading text-xs-left my-font-color pl-3">Computing in Community</div>
                </v-flex>
                <!-- insert button -->
                <v-layout row justify-center>
                  <v-dialog v-model="dialog" persistent width="50%">
                    <v-btn class="pl-1" color="grey" dark slot="activator">Post an Experience</v-btn>
                    <v-card>
                      <v-card-title>
                        <span class="headline">Post an Experience</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container grid-list-md>
                          <v-layout wrap>
                            <v-flex xs6>
                              <v-text-field label="First Name" v-model="firstname" required></v-text-field>
                            </v-flex>
                            <v-flex xs6>
                              <v-text-field label="Last Name" v-model="lastname" required></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                              <v-text-field label="Email" v-model="email" :rules="emailRules" required></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                              <v-text-field label="Title" required v-model="entryTitle"></v-text-field>
                            </v-flex>
                            <v-flex xs6>
                              <v-select required v-bind:items="categories" v-model="category" label="Select the type of experience" single-line auto hide-details></v-select>
                            </v-flex>
                            <v-flex xs12 sm12>
                              <v-text-field multi-line label="Describe your experience. Be sure to describe what you did, learned, value, etc" required
                                v-model="entryContent" :rules="entryRules" :counter="1500"></v-text-field>
                            </v-flex>
                            <v-checkbox label="Do you agree?" v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" required></v-checkbox>
                          </v-layout>
                        </v-container>
                        <small>*indicates required field</small>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="purple--text darken-1" flat @click="clear">Clear</v-btn>
                        <v-btn class="purple--text darken-1" flat v-on:click="dialog = false">Cancel</v-btn>
                        <v-btn class="purple--text darken-1" flat v-on:click="NewExperience">Post</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-layout>
              </v-layout>
            </v-card-media>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-space-between>
        <!-- rest of page content -->
        <v-flex xs12 md3>
          <!-- nav box -->


          <!--<v-app>
            <v-alert color="success" icon="check_circle" dismissible v-model="deletealert">
              Entry successfully deleted.
            </v-alert>
          </v-app>-->
        </v-flex>

        <v-flex xs12>
          <!-- entries -->
          <div v-for="experience in experiences" :key="experience.title">
            <v-flex xs12>
              <!-- entry layout -->
              <v-card>
                <v-card-media class="lighten-4 purple my-3">
                  <!-- entry header -->
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs10 align-end flexbox>
                        <span class="headline my-font-color">
                          <em>{{format_date(experience.created_at) }}:</em> {{ experience.title }}
                        </span>
                      </v-flex>
                      <v-flex xs2 align-end flexbox>
                        <span class="headline my-font-color" v-html="experience.type"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-title>
                  <!-- entry content -->
                  <v-layout row wrap>
                    <v-flex xs9>
                      <span v-html="experience"></span>
                    </v-flex>
                    <v-flex xs9>
                      <!-- columns for text -->
                      <span v-html="experience.description"></span>
                    </v-flex>
<v-layout row justify-left>
                      <v-btn dark color="red" v-on:click="DeleteBlogPost(experience.id)">Delete Entry</v-btn>

                      <v-dialog v-model="experience.editdialog" persistent width="50%">
                        <v-btn dark color="grey" slot="activator">Edit This Experience</v-btn>

                        <v-card>
                          <v-card-title>
                            <span class="headline">Edit This Experience</span>
                          </v-card-title>
                          <v-card-text>
                            <v-container grid-list-md>
                              <v-layout wrap>
                                <v-flex xs6>
                                  <v-text-field label="First Name" v-model="experience.firstname" required></v-text-field>
                                </v-flex>
                                <v-flex xs6>
                                  <v-text-field label="Last Name" v-model="experience.lastname" required></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                  <v-text-field label="Email" v-model="experience.email" required></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                  <v-text-field label="Title" required v-model="experience.title"></v-text-field>
                                </v-flex>
                                <v-flex xs6>
                                  <v-select label="Type of Experience" v-bind:items="categories" v-model="experience.type" single-line auto hide-details></v-select>
                                </v-flex>
                                <v-flex xs12 sm12>
                                  <v-text-field multi-line label="Entry" required v-model="experience.desc"></v-text-field>
                                </v-flex>
                              </v-layout>
                            </v-container>
                            <small>*indicates required field</small>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn disabled class="blue--text darken-1" flat v-on:click="UpdateBlogPost(experience.id)">Update</v-btn>
                            <v-btn class="blue--text darken-1" flat v-on:click="closeDialog(blogEntry)">Cancel</v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-layout>
                  </v-layout>
                </v-card-title>
              </v-card>
            </v-flex>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>
<script>
import axios from 'axios'
  export default {
    data() {
      return {
        cards: [{

            src: '/static/bcbs.jpg',
            flex: 4
          },
          {

            src: '/static/blackbaud.jpg',
            flex: 4
          },
          {

            src: '/static/furm.png',
            flex: 4
          },
          {

            src: '/static/ghs.png',
            flex: 4
          },
          {

            src: '/static/ibm.png',
            flex: 4
          },
          {

            src: '/static/infor.png',
            flex: 4
          }
        ],
        checkbox: false,
        dialog: false,
        deletealert: false,
        editalert: false,
        email: "",
        entryTitle: "",
        entryContent: "",
        category: "",
        experiences: [],
        emailRules: [
          v =>
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "Email must be valid"
        ],
        entryRules: [
          (v) => v && v.length <= 1500 || 'Entry must be less than 1500 characters'
        ],
        categories: ["Research", "Internship"],
        category: ""
      };
    },
    methods: {
      closeAllDialog() {
        this.blogEntries.forEach(obj => {
          obj.editdialog = false;
        });
      },
      closeDialog(e) {
        console.log(this.blogEntries);
        console.log(e.editdialog);
        e.editdialog = false;
      },
      format_date(date) {
        let nicedate = new Date(date);
        return nicedate.toLocaleDateString();
      },
      GetExperiences() {
        let self = this
        axios.get('https://safe-beach-15501.herokuapp.com/api/blog/posts').then(
          response => {
            console.log(response)
            let temp = response.data
            temp.forEach(obj => {
              obj.editdialog = false
            }) // new field added just for edit dialog
            self.experiences = temp
          }
        )
      },
      GetExperience(id) {
        axios.get('https://safe-beach-15501.herokuapp.com/api/blog/posts/{id}')
      },
      NewExperience() {
        axios.post('https://safe-beach-15501.herokuapp.com/api/blog/posts/new')
      },
      UpdateExperience(id, entryTitle, entryContent) {
        axios.put('https://safe-beach-15501.herokuapp.com/api/blog/posts/new')
      },
      DeleteExperience(id) {
        axios.delete('https://safe-beach-15501.herokuapp.com/api/blog/posts/delete/{id}')
      }
    },
    mounted: function () {
      let self = this
      self.GetExperiences()
    }
  }

</script>
<style <style scoped>
  #backBox {
    background-color: rgba(0, 0, 0, 0.5);
  }
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
