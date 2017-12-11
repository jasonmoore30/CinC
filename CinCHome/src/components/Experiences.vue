<template>
  <v-app light class="mt-5">
    <v-container class="mt-5">
      <v-layout flexbox class="mt-5">
        <!-- page title -->
        <v-flex xs12>
          <v-card>
            <v-card-media class="lighten-4 purple">
              <v-layout row wrap class="my-3">
                <v-flex xs8 flexbox>
                  <div class="headline text-xs-left my-font-color pl-3 pt-3">Experiences</div>
                </v-flex>
                <v-flex xs4 flexbox>
                    <v-select class="pr-3 pb-2"
                        white v-bind:items="categories" v-model="categorySearch" label="Sort By" single-line auto prepend-icon="search" hide-details
                    ></v-select>
                </v-flex>
                <v-flex xs9>
                  <div class="subheading text-xs-left my-font-color pl-3" >Computing in Community</div>
                </v-flex>
                <!-- insert button -->
              <v-layout row justify-center>
                <v-dialog v-model="dialog" persistent width="50%">
                    <v-btn class= "pl-1" color="grey" dark slot="activator">Post an Experience</v-btn>
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
                            <v-text-field label="Title" required v-model="url"></v-text-field>
                          </v-flex>
                          <v-flex xs6>
                            <v-select required v-bind:items="categories" v-model="type" label="Select the type of experience" single-line auto hide-details></v-select>
                          </v-flex>
                          <v-flex xs12 sm12>
                            <v-text-field multi-line label="Describe your experience. Be sure to describe what you did, learned, value, etc" required v-model="desc" :rules="entryRules" :counter="1500"></v-text-field>
                          </v-flex>
                          <v-checkbox label="Do you agree?" v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" required></v-checkbox>
                        </v-layout>
                      </v-container>
                      <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
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
                          <em>{{format_date(experience.created_at) }}:</em> {{ experience.url }}
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
                    <v-flex xs12>
                      <span v-html="experience.firstname"></span>
                      <span v-html="experience.lastname"></span>
                    </v-flex>
                    <v-flex xs12>
                      <span v-html="experience.email"></span>
                    </v-flex>
                    <v-flex xs12>
                      <!-- columns for text -->
                      <span v-html="experience.desc"></span>
                    </v-flex>
                    <v-flex xs12 md2>
                      <v-btn dark color="red" v-on:click="DeleteExperience(experience.id)">Delete Entry</v-btn>
                    </v-flex>
                    <v-layout row justify-left>
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
                            <v-btn class="blue--text darken-1" flat v-on:click="UpdateExperience(experience.id)">Update</v-btn>
                            <v-btn class="blue--text darken-1" flat v-on:click="closeDialog(experience)">Cancel</v-btn>
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
  </v-app>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      checkbox: false,
      dialog: false,
      deletealert: false,
      editalert: false,
      firstname: '',
      lastname: '',
      email: '',
      url: '',
      desc: '',
      type: '',
      categorySearch: '',
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
    };
  },
  methods: {
    closeAllDialog() {
      this.experiences.forEach(obj => {
        obj.editdialog = false;
      });
    },
    closeDialog(e) {
      console.log(this.experiences);
      console.log(e.editdialog);
      e.editdialog = false;
    },
    format_date(date) {
      let nicedate = new Date(date);
      return nicedate.toLocaleDateString();
    },
    GetExperiences() {
      let self = this
      axios.get('https://safe-beach-15501.herokuapp.com/api/experiences').then(
        response => {
          console.log(response)
          let temp = response.data
          temp.forEach(obj => {obj.editdialog = false})  // new field added just for edit dialog
          self.experiences = temp
        }
      )
    },
    GetExperience(id) {
      axios.get('https://safe-beach-15501.herokuapp.com/api/experiences/' + id)
    },
    NewExperience() {
      let self = this
      console.log(self.firstname, self.lastname, self.email,self.type, self.desc, self.url)
      axios({
        method: 'post',
        headers: {
          'Content-Type': 'application-json'
        },
        url: 'https://safe-beach-15501.herokuapp.com/api/experiences/new',
        data: {
          firstname: self.firstname, 
          lastname: self.lastname, 
          email: self.email, 
          type: self.type, 
          desc: self.desc,
          url: self.url,
          approved: 0
        },
        json: true
      }).then(response => {
          console.log(response)
          self.GetExperiences()
        }
      );
      // axios.post('https://safe-beach-15501.herokuapp.com/api/experiences/new', {
        // firstname: self.firstname, 
        // lastname: self.lastname, 
        // email: self.email, 
        // type: self.type, 
        // desc: self.desc,
        // url: self.url,
      //   approved: 0
      // }).then(
      //   response => {
      //     console.log(response)
      //     self.GetExperiences()
      //   }
      // )
    },
    UpdateExperience() {
      let self = this
      axios.put('https://safe-beach-15501.herokuapp.com/api/experiences/new').then(
        response => {
          console.log(response)
          self.GetExperiences()
        }
      )

    },
    DeleteExperience(id) {
      axios.delete('https://safe-beach-15501.herokuapp.com/api/experiences/delete/{id}')
    }
  },
  mounted: function() {
    let self = this
    self.GetExperiences()
  } 
}
</script>