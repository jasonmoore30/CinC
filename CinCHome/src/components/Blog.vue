<template>
  <v-app light class="mt-5">
    <v-container class="mt-5">
      <v-layout flexbox class="mt-5">
        <!-- page title -->
        <v-flex xs12>
          <v-card>
            <v-card-media class="lighten-4 purple">
              <v-layout row wrap class="my-3">
                <v-flex xs12 flexbox>
                  <div class="headline text-xs-left my-font-color pl-3 pt-3">{{ title }}</div>
                </v-flex>
                <v-flex xs9>
                  <div class="subheading text-xs-left my-font-color pl-3" >Computing in Community</div>
                </v-flex>
                <!-- insert button -->
              <v-layout row justify-center>
                <v-dialog v-model="dialog" persistent width="50%">
                    <v-btn class= "pl-1" color="grey" dark slot="activator">Post in Blog</v-btn>
                  <v-card>
                    <v-card-title>
                      <span class="headline">Post</span>
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
                            <v-text-field label="Title" required v-model="title"></v-text-field>
                          </v-flex>
                          <v-flex xs12 sm12>
                            <v-text-field multi-line label="Body" required v-model="body" :rules="entryRules" :counter="300"></v-text-field>
                          </v-flex>
                          <v-checkbox label="Do you agree to your information being posted to the website?" v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" required></v-checkbox>
                        </v-layout>
                      </v-container>
                      <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn class="purple--text darken-1" flat @click="clear">Clear</v-btn>
                      <v-btn class="purple--text darken-1" flat v-on:click="dialog = false">Cancel</v-btn>
                      <v-btn class="purple--text darken-1" flat v-on:click="NewBlogPost">Post</v-btn>
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
          <div v-for="post in posts" :key="post.title">
            <v-flex xs12>
              <!-- entry layout -->
              <v-card>
                <v-card-media class="lighten-4 purple my-3">
                  <!-- entry header -->
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs10 align-end flexbox>
                        <span class="headline my-font-color">
                          <em>{{format_date(post.created_at) }}:</em> {{ post.title }}
                        </span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-title>
                  <!-- entry content -->
                  <v-layout row wrap>
                    <v-flex xs9>
                      <span v-html="post"></span>
                    </v-flex>
                    <v-flex xs9>
                      <!-- columns for text -->
                      <span v-html="post.body"></span>
                    </v-flex>
                    <v-flex xs3>
                      <!-- columns for picture -->
                      <v-card-media v-bind:src="`http://cs.furman.edu/~ktreu/journal-advanced/images/${post.image_url}`" height="125px" contain></v-card-media>
                    </v-flex>
                    <v-flex xs12 md2>
                      <v-btn dark color="red" v-on:click="DeleteBlogPost(post.id)">Delete Post</v-btn>
                    </v-flex>
                    <v-layout row justify-left>
                      <v-dialog v-model="post.editdialog" persistent width="50%">
                        <v-btn dark color="grey" slot="activator">Edit This Post</v-btn>
                        <v-card>
                          <v-card-title>
                            <span class="headline">Edit This Post</span>
                          </v-card-title>
                          <v-card-text>
                            <v-container grid-list-md>
                              <v-layout wrap>
                                <v-flex xs12>
                                  <v-text-field label="First Name" required></v-text-field>
                                  <v-text-field label="Last Name" required></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                  <v-text-field label="Email" required></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                  <v-text-field label="Title" required v-model="post.title"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm12>
                                  <v-text-field multi-line label="Body" required v-model="post.body"></v-text-field>
                                </v-flex>
                              </v-layout>
                            </v-container>
                            <small>*indicates required field</small>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn disabled class="blue--text darken-1" flat v-on:click="EditBlogPost(experience.id)">Update</v-btn>
                            <v-btn class="blue--text darken-1" flat v-on:click="closeDialog(post)">Cancel</v-btn>
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
      checkbox: false,
      dialog: false,
      deletealert: false,
      editalert: false,
      title: "Blog",
      firstname: "",
      lastname: "",
      email: "",
      blogTitle: "",
      desc: "",
      type: "",
      posts: [],
      emailRules: [
        v =>
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "Email must be valid"
      ],
      entryRules: [
        (v) => v && v.length <= 300 || 'Entry must be less than 300 words'
      ],
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
    this.GetBlogPosts();
  },
  GetBlogPosts() {
    let self = this
    axios.get('https://safe-beach-15501.herokuapp.com/api/blog/posts').then(
      response => {
        console.log(response)
        let temp = response.data
        temp.forEach(obj => {obj.editdialog = false})  // new field added just for edit dialog
        self.posts = temp
      }
    )
  },
  GetBlogPost() {
    axios.get('https://safe-beach-15501.herokuapp.com/api/blog/posts/{entry_id}')
  },
  NewBlogPost() {
    axios.post('https://safe-beach-15501.herokuapp.com/api/blog/posts/new')
  },
  EditBlogPost() {
    axios.put('https://safe-beach-15501.herokuapp.com/api/blog/posts/update/{entry_id}')
  },
  DeleteBlogPost(id) {
    axios.delete('https://safe-beach-15501.herokuapp.com/api/blog/posts/delete/{entry_id}')
  }
};
</script>