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
          Description: {{events.description}}<br>
          Location: {{events.location}}<br>
        </div>
      </template>
    </vue-event-calendar>

  <v-card>

  </v-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'cal',
  data () {
    return {
      //date: start_time,
      cincEvents: []
    }
  },
  methods: {
    getEvents () {
      let self = this
      axios.get('https://safe-beach-15501.herokuapp.com/api/calendar/events').then(
        response => {
        console.log(response)
        let temp = response.data
        temp.forEach(obj => {obj.editdialog = false})
        temp.forEach(obj => {obj.date=self.formatDate(obj.start_time)})
        self.cincEvents = temp
      }
      )
    },
      // formats date into necessary format for the vue-event-calendar components
      // to recognize it as a date in the calendar
    formatDate (date) {
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
    }
    // formatTime (start_time) {
    //   // format so it returns the start time for each event
    //   // 11,12,13,14,15
    //   var firstHour = start_time.charAt(11)
    //   var secondHour = start_time.charAt(12)
    //   var colon = start_time.charAt(13)
    //   var firstMinute = start_time.charAt(14)
    //   var secondMinute = start_time.charAt(15)
    //   var properStartTime = firstHour + secondHour + colon + firstMinute + secondMinute
    //   return properStartTime
    // }
  },
  mounted: function () {
    this.getEvents()
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
h1 {
  color:white;
}
h2, h3 {
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
