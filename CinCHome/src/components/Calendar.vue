
<template>
  <div id="cal">
    <h1 class="t-center">CinC Events</h1>
    <vue-event-calendar
      :events="cincEvents"
      @day-changed="handleDayChanged"
      @month-changed="handleMonthChanged"
    ></vue-event-calendar>

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
          label="Email"
          v-model="email"
          required
        >
        </v-text-field>

        <v-btn @click="submit">Submit</v-btn>
      </v-form>
    </v-card-text>
  </div>
  </v-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'cal',
  data () {
    return {
      cincEvents: [{
        // format = year/month/day
        date: `2017/12/25`,
        title: 'Christmas Day',
        desc: 'Time to see if Santa delivered me the winning powerball ticket.',
        location: 'Johns Hall'
 
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
      email: ''
    }
  },
  methods: {
    handleDayChanged (data) {
      console.log('date-changed', data)
    },
    handleMonthChanged (data) {
      console.log('month-changed', data)
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

