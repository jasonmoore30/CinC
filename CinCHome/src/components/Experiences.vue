<template>
  <div id="center">
    <div id="app">
      <v-app light>
        <v-container>
          <v-layout>
            <!-- page title -->
            <v-flex xs12>
              <v-card>
                <v-card-media class="lighten-4 purple">
                  <v-layout row wrap class="my-3">
                    <v-flex xs6>
                        <v-select class="pl-3 pb-2"
                            white v-bind:items="categories" v-model="categorySearch" label="Sort By" single-line auto prepend-icon="search" hide-details
                        ></v-select>
                    </v-flex>
                    <v-flex xs6 flexbox class="">
                      <div class="headline text-xs-right my-font-color pr-3 pt-3" style="width:100%">{{ title }}</div>
                    </v-flex>
                    <!-- insert button -->
              <v-layout row justify-center>
                <v-dialog v-model="dialog" persistent width="50%">
                    <v-btn class= "pl-1" primary dark slot="activator">Post an Entry</v-btn>
                  <v-card>
                    <v-card-title>
                      <span class="headline">Post an Entry</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container grid-list-md>
                        <v-layout wrap>
                          <v-flex xs12>
                            <v-text-field label="Name" required></v-text-field>
                          </v-flex>
                          <v-flex xs12>
                            <v-text-field label="Email" v-model="email" :rules="emailRules" required></v-text-field>
                          </v-flex>
                          <v-flex xs12>
                            <v-text-field label="Title" required v-model="entryTitle"></v-text-field>
                          </v-flex>
                          <v-flex xs6>
                            <v-select required v-bind:items="categories" v-model="category" label="Select" single-line auto hide-details></v-select>
                          </v-flex>
                          <v-flex xs12 sm12>
                            <v-text-field multi-line label="Entry" required v-model="entryContent"></v-text-field>
                          </v-flex>
                        </v-layout>
                      </v-container>
                      <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn disabled class="purple--text darken-1" flat v-on:click="submitEntry">Post</v-btn>
                      <v-btn class="purple--text darken-1" flat v-on:click="dialog = false">Cancel</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-layout>
                    <v-flex xs9 flexbox class="">
                      <div class="subheading text-xs-right my-font-color pr-3" style="width:100%">Computing in Community</div>
                    </v-flex>
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
              <div v-for="blogEntry in blogEntries" :key="blogEntry.title">
                <v-flex xs12>
                  <!-- entry layout -->
                  <v-card>
                    <v-card-media class="lighten-4 purple my-3">
                      <!-- entry header -->
                      <v-container fill-height fluid>
                        <v-layout fill-height>
                          <v-flex xs12 align-end flexbox>
                            <span class="headline my-font-color">
                              <em>{{format_date(blogEntry.created_at) }}:</em> {{ blogEntry.title }}</span>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card-media>
                    <v-card-title>
                      <!-- entry content -->
                      <v-layout row wrap>
                        <v-flex xs9>
                          <!-- columns for text -->
                          <span v-html="blogEntry.body"></span>
                        </v-flex>
                        <v-flex xs3>
                          <!-- columns for picture -->
                          <v-card-media v-bind:src="`http://cs.furman.edu/~ktreu/journal-advanced/images/${blogEntry.image_url}`" height="125px" contain></v-card-media>
                        </v-flex>
                        <v-flex xs12 md2>
                          <v-btn flat error v-on:click="deleteEntry(blogEntry.id)">Delete Entry</v-btn>
                        </v-flex>
                        <v-layout row justify-left>
                          <v-dialog v-model="blogEntry.editdialog" persistent width="50%">
                            <v-btn slot="activator">Edit This Entry</v-btn>
                            <v-card>
                              <v-card-title>
                                <span class="headline">Edit This Entry</span>
                              </v-card-title>
                              <v-card-text>
                                <v-container grid-list-md>
                                  <v-layout wrap>
                                    <v-flex xs12>
                                      <v-text-field label="Name" required></v-text-field>
                                    </v-flex>
                                    <v-flex xs12>
                                      <v-text-field label="Email" required></v-text-field>
                                    </v-flex>
                                    <v-flex xs12>
                                      <v-text-field label="Title" required v-model="blogEntry.title"></v-text-field>
                                    </v-flex>
                                    <v-flex xs6>
                                      <v-select v-bind:items="categories" v-model="category" label="Type of Experience" single-line auto hide-details></v-select>
                                    </v-flex>
                                    <v-flex xs12 sm12>
                                      <v-text-field multi-line label="Entry" required v-model="blogEntry.body"></v-text-field>
                                    </v-flex>
                                  </v-layout>
                                </v-container>
                                <small>*indicates required field</small>
                              </v-card-text>
                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn disabled class="blue--text darken-1" flat v-on:click="updateEntry(blogEntry.id, blogEntry.title, blogEntry.body)">Update</v-btn>
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
      </v-app>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  data() {
    return {
      dialog: false,
      deletealert: false,
      editalert: false,
      title: "Experiences",
      entryTitle: "",
      entryContent: "",
      blogEntries: [],
      emailRules: [
        v =>
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "Email must be valid"
      ],
      categories: ["Research", "Internship", "I have no idea"],
      categorySearch: '', 
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
    submitEntry() {
      let self = this;
      axios
        .post("http://localhost:8000/entries/create", {
          title: this.entryTitle,
          content: this.entryContent
        })
        .then(response => {
          console.log(response);
          self.fetchEntries();
        });
      this.dialog = false;
    },
    fetchEntries() {
      let self = this;
      axios.get("http://localhost:8000/entries").then(response => {
        console.log(response);
        let temp = response.data;
        temp.forEach(obj => {
          obj.editdialog = false;
        }); // new field added just for edit dialog
        self.blogEntries = temp;
      });
    },
    updateEntry(id, entryTitle, entryContent) {
      console.log("called updateEntry");
      let self = this;
      axios
        .put("http://localhost:8000/entries/" + id, {
          title: entryTitle,
          content: entryContent
        })
        .then(response => {
          console.log(response);
          self.fetchEntries();
        });
    },
    deleteEntry(id) {
      console.log(id);
      let self = this;
      axios.delete("http://localhost:8000/entries/" + id).then(response => {
        self.deletealert = true;
        self.fetchEntries();
      });
    }
  },
  created() {
    this.fetchEntries();
  }
};
</script>

<style>
#app {
  width: 90%;
  margin: auto;
}

#center {
  background-color: purple;
}

#header {
}
</style>