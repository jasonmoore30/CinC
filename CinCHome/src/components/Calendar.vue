<template>
  <div id="cal">
    <h1 class="t-center">CinC Events</h1>
    <vue-event-calendar
      :events="cincEvents"
    >

      <template scope = "props">
        <div v-for="events in props.showEvents" class="event-item" :key="events.title">
          Date: {{events.date}}<br>
          Title: {{events.title}}<br>
          Description: {{events.desc}}<br>
          Location: {{events.location}}<br>
          Start Time: {{events.startTime}}
        </div>
      </template>
    </vue-event-calendar>

  <v-card>
    <v-card-title>
      <h3>{{welcomeMessage}}</h3>
    </v-card-title>

    <div class=eventForm>
    <v-card-text>
      <v-form>
        <v-select
          :items="suggestedMonth"
          v-model="month"
          label="Month"
          required
          >
        </v-select>
        <v-text-field
          v-model="day"
          label="Day"
          required
          >
        </v-text-field>
        <v-text-field
          label="Title"
          v-model="title"
          required
          >
        </v-text-field>
        <v-text-field
          label="Description"
          v-model="desc"
          required
          >
        </v-text-field>
        <v-text-field
          label="Location"
          v-model="location"
          required
          >
        </v-text-field>
        <v-text-field
          label="Start Time"
          v-model="startTime"
          required
          >
        </v-text-field>
        <v-text-field
          label="Email"
          v-model="email"
          required
        >
        </v-text-field>

        <v-btn @click="addEvent">Submit</v-btn>
      </v-form>
    </v-card-text>
  </div>
  </v-card>
  </div>
</template>

<script>
import axios from 'axios'

// let today = new Date()
export default {
  name: 'cal',
  data () {
    return {
      cincEvents: [{
        date: `2017/12/25`,
        title: 'Christmas Day',
        desc: 'Time to see if Santa delivered me the winning powerball ticket.',
        location: 'Johns Hall',
        startTime: '7:00'
      },
      {
        date: `2017/12/24`,
        title: 'test',
        desc: 'testing',
        location: 'testing again',
        startTime: '4pm'
      }
      ],
      welcomeMessage: 'Suggest an Event',
      suggestedMonth: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      month: null,
      day: null,
      title: '',
      description: '',
      location: '',
      startTime: '',
      email: ''
    }
  },
  methods: {
    fetchEntries () {
      let self = this
      axios.get('/api/calendarevents')
      .then(response => {
        console.log(response)
        let temp = response.data
        temp.forEach(obj => {
          obj.date = self.getEventMonth(obj.date)
        })
        self.cincEvents = temp
      }
      )
    },
      // formats date into necessary format for the vue-event-calendar components
      // to recognize it as a date in the calendar. Collaborated with Elliott for this.
    getEventMonth (date) {
      var firstLetYear = date.charAt(0)
      var secondLetYear = date.charAt(1)
      var thirdLetYear = date.charAt(2)
      var fourthLetYear = date.charAt(3)
      var firstLetMonth = date.charAt(5)
      var secondLetMonth = date.charAt(6)
      var firstLetDay = date.charAt(8)
      var secondLetDay = date.charAt(9)
      var properDate = firstLetYear + secondLetYear + thirdLetYear + fourthLetYear + '/' + firstLetMonth + secondLetMonth + '/' + firstLetDay + secondLetDay
      return properDate
    },
     /*getEvents () {
      axios.get('/api/calendarevents')
        .then(function(response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
      },*/
    addEvent () {
      console.log('adding event')
      axios.post('/api/calendar/events/new') {
        title: this.title,
        email: this.email,
        description: this.description,
        location: this.location,
        month: this.month,
        day: this.day,
        startTime: this.startTime
      }
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        })
      }
}
}
</script>

<style>
#cal {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}
h1, h2, h3 {
  font-weight: normal;
  margin: 0;
  padding: 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.t-center{
  text-align: center;
  margin: 20px;
}
.mt150{
  margin-top: 150px;
}
</style>
