<template>
<v-content>
<v-parallax src="http://www.furman.edu/admission/EngageFurman/Visit/PublishingImages/PlanVisit.jpg" height="500">
      <v-layout column align-center justify-center class="white--text">
        <h1 class="white--text mb-2 display-3">CinC Students</h1>
      </v-layout>
    </v-parallax>

    <v-tabs dark grow>
      <v-toolbar color="purple" dark>
        <v-tabs-bar class="purple" slot="extension">
          <v-tabs-slider color="yellow"></v-tabs-slider>
          <v-tabs-item v-for="(tabName, i) in tabNames" :key="i" :to="tabName.url" :href="'#tab-' + (i + 1)">
            {{ tabName.title }}
          </v-tabs-item>
          <v-menu :nudge-width="100" left bottom>
            <v-list class="grey lighten-3">
              <v-list-tile tag="a" v-for="op in ops" :key="op.title" @click="">
                {{ op.title }}
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-tabs-bar>
      </v-toolbar>
      <v-tabs-items>
        <v-tabs-content v-for="i in 5" :key="i" :id="'tab-' + i">
          <v-card flat>

          </v-card>
        </v-tabs-content>
      </v-tabs-items>
    </v-tabs>
    <p></p>
    <p></p>
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
                    <v-flex xs8 flexbox class="">
                      <div class="headline text-xs-left my-font-color pl-3 pt-3" style="width:100%">{{ title }}</div>
                    </v-flex>
                    <v-flex xs4>
                        <v-select class="pr-3 pb-2"
                            white v-bind:items="categories" v-model="categorySearch" label="Sort By" single-line auto prepend-icon="search" hide-details
                        ></v-select>
                    </v-flex>
                    <v-flex xs9 flexbox class="">
                      <div class="subheading text-xs-left my-font-color pl-3" style="width:100%">Computing in Community</div>
                    </v-flex>
                    <!-- insert button -->
              <v-layout row justify-center>
                <v-dialog v-model="dialog" persistent width="50%">
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
    </div>
  </div>
</v-content>
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
        { title: "Test", category: "Research", body: "This is a test" }
      ],
      emailRules: [
        v =>
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "Email must be valid"
      ],
      categories: ["Research", "Internship", "I have no idea"],
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

<style scoped>
#app {
  width: 90%;
  margin: auto;
}
#center {
  background-color: purple;
}
</style>
