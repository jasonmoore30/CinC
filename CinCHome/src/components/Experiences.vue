<template>
  <v-app light class="">
    <v-container class="mt-5">
      <v-layout flexbox class="mt-5">
        <!-- page title -->
        <v-flex xs12>
          <v-card>
            <v-card-media class="lighten-4 purple">
              <v-layout row wrap class="my-3">
                <v-flex xs8>
                  <div class="headline text-xs-left my-font-color pl-3 pt-3">{{ title }}</div>
                </v-flex>
                <v-flex xs4>
                    <v-select class="pr-3 pb-2"
                        white v-bind:items="categories" v-model="categorySearch" label="Sort By" single-line auto prepend-icon="search" hide-details
                    ></v-select>
                </v-flex>
                <v-flex xs9>
                  <div class="subheading text-xs-left my-font-color pl-3" >Computing in Community</div>
                </v-flex>
                <!-- insert button -->
              <v-layout row justify-center>
                <v-dialog v-model="dialog" persistent>
                    <v-btn class= "pl-1" color="grey" dark slot="activator">Post an Entry</v-btn>
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
                            <v-text-field multi-line label="Entry" required v-model="entryContent" :rules="entryRules" :counter="300"></v-text-field>
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
                      <v-btn dark color="red" v-on:click="deleteEntry(blogEntry.id)">Delete Entry</v-btn>
                    </v-flex>
                    <v-layout row justify-left>
                      <v-dialog v-model="blogEntry.editdialog" persistent width="50%">
                        <v-btn dark color="grey" slot="activator">Edit This Entry</v-btn>
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
                                  <v-select label="Type of Experience" v-bind:items="categories" v-model="blogEntry.category" single-line auto hide-details></v-select>
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
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      deletealert: false,
      editalert: false,
      title: "Experiences",
      entryTitle: "",
      entryContent: "",
      category: "",
      blogEntries: [
        { title: "Test", category: "Research", body: "This is a test" },
        { title: "Test2", category: "Internship", body: "This is also a test" }
      ],
      emailRules: [
        v =>
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "Email must be valid"
      ],
      entryRules: [
        (v) => v && v.length <= 300 || 'Entry must be less than 300 words'
      ],
      categories: ["Research", "Internship", "Class"],
      categorySearch: "",
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
    }
  },
  created() {
    this.fetchEntries();
  }
};
</script>