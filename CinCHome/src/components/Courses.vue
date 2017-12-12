<template>
  <v-content>
    <head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></head>
    <p></p>
    <div id="app">
      <v-app id="inspire">
        <p></p>

        <center>
          <h4>Here you can find all of the current CinC courses and even suggest a CinC course</h4>
        </center>

        <p></p>
        <div>
          <v-data-table v-bind:headers="headers" :items="courses" class="elevation-1">
            <template slot="headerCell" scope="props">
              <v-tooltip bottom>
                <span slot="activator">
                  {{ props.header.text }}
                </span>
                <span>
                  {{ props.header.text }}
                </span>
              </v-tooltip>
            </template>
            <template slot="courses" scope="props">
              <td>{{ props.course.courseName }}</td>
              <td class="text-xs-left">{{ props.course.dept }}</td>
              <td class="text-xs-left">{{ props.course.faculty }}</td>
              <td class="text-xs-left">{{ props.course.descrip }}</td>
              <td><md-icon class=" md-size-2x fa fa-facebook-official"></md-icon></td>

            </template>
          </v-data-table>
        </div>
        <p></p>

        <v-layout row justify-center>
          <v-dialog v-model="dialog" ref="form" persistent max-width="800px">
            <v-btn color="purple darken-3" dark slot="activator">Suggest a Course</v-btn>
            <v-card>
              <v-card-title>
                <span class="headline">Course Suggestions</span>
              </v-card-title>
              <v-card-text>
                <v-container grid-list-md>
                  <v-layout wrap>
                    <v-flex xs12 sm6 md4>
                      <v-text-field label="First Name" required></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field label="Last Name" required></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field label="Email" required v-model="email" :rules="emailRules" required></v-text-field>
                    </v-flex>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field label="Course Title" required></v-text-field>
                    </v-flex>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field label="Course Description" required></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <v-select label="Department(s)" multiple autocomplete chips :items="depts"></v-select>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field label="Faculty Name(s)" hint="Please include first and last name of faculty member separated with a comma"
                        persistent-hint required required></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-container>
                <small>*indicates required field</small>
              </v-card-text>
              <v-checkbox label="Do you agree?" v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" required></v-checkbox>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="purple darken-2" flat @click.native="dialog = false">Close</v-btn>
                <v-btn color="purple darken-2" flat @click="clear">Clear</v-btn>
                <v-btn color="purple darken-2" flat @click="submit" :enabled="!valid">Submit</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-layout>
      </v-app>
    </div>
  </v-content>
</template>

<<script>
import axios from 'axios'
export default {
  data () {
    return {
       headers: [
          {
            text: 'Course Name',
            align: 'left',
            sortable: true,
            value: 'courseName'
          },
          { text: 'Department(s)', value: 'dept', sortable: true, align: 'left',  },
          { text: 'Taught By', value: 'faculty', sortable: true, align: 'left',  },
          { text: 'Description', value: 'descrip', sortable: true, align: 'left',  },
          { text: 'CinC Component', value: 'cincComp', sortable: true, align: 'left', }
        ],
        courses: [
          {
            value: false,
            courseName: 'Intro to Bioinformatics',
            dept: 'Biology, Computer Science',
            faculty: 'Dr. Rawlings',
            descrip: 'This course will be an introduction to bioinformatics'
          },
          {
            value: false,
            courseName: 'Test',
            dept: 'test',
            faculty: 'Test',
            descrip: 'Test'
          },
         {
            value: false,
            courseName: 'Test',
            dept: 'test',
            faculty: 'Test',
            descrip: 'Test'
          }

        ],
       dialog: false,
       depts: [
       {text: 'Art'},
       {text: 'Asian Studies'},
       {text: 'Biology'},
       {text: 'Business and Accounting'},
       {text: 'Chemistry'},
       {text: 'Classics'},
       {text: 'Communication Studies'},
       {text: 'Computer Science'},
       {text: 'Earth and Environmental Sciences'},
       {text: 'Economics'},
       {text: 'Education'},
       {text: 'English'},
       {text: 'Health Sciences'},
       {text: 'History'},
       {text: 'Mathematics'},
       {text: 'Military Science'},
       {text: 'Modern Languages and Literatures'},
       {text: 'Music'},
       {text: 'Philosophy'},
       {text: 'Physics'},
       {text: 'Politics and International Affairs'},
       {text: 'Psychology'},
       {text: 'Religion'},
       {text: 'Sociology'},
       {text: 'Theatre Arts'},
    ],

    checkbox: false,
    email: '',
    emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    }
    },
    methods: {
    GetCourse(id) {
      let self = this
      axios.get('https://safe-beach-15501.herokuapp.com/api/courses/{id}').then(
        response => {
          console.log(response)
          let temp = response.data
          temp.forEach(obj => {obj.editdialog = false})  // new field added just for edit dialog
          self.coursess = temp
        }
      )
    },
    mounted: function() {
    let self = this
    self.GetCourses()
  }

    }
  }

</script>
<style scoped>
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
  text-align: center
}
img {
  text-align: center
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
  transition: opacity .25s ease-in-out;
  -moz-transition: opacity .25s ease-in-out;
  -webkit-transition: opacity .25s ease-in-out;
}

.glyphicon:hover {
  opacity: 0.75;
  cursor: pointer;
}
</style>
