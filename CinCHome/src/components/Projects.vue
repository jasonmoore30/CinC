<template>
  <v-content>
    <v-parallax src="static/research.jpg" height="650">
      <div id="backBox">
        <v-layout column align-center justify-center class="white--text">
            <h1 class="white--text mb-2 display-3">Project Opportunities</h1>
        </v-layout>
      </div>
    </v-parallax>
    <p></p>
    <div align="left" >
      <h4>
      Below are some faculty scholars along with their email and department.
      </h4>
    </div>
      <v-card>
        <v-card-title>
          Current Scholars
          <v-spacer></v-spacer>
          <v-text-field append-icon="search" label="Search" single-line hide-details v-model="search1"></v-text-field>
        </v-card-title>
        <v-data-table v-bind:headers="headers1" v-bind:items="items1" v-bind:search="search1" hide-actions item-key="name">
          <template slot="items" slot-scope="props">
              <td>{{ props.item.name }}</td>
              <td class="text-xs-right">{{ props.item.email }}</td>
              <td class="text-xs-right">{{ props.item.department }}</td>
            </tr>
          </template>
          <template slot="pageText" slot-scope="{ pageStart, pageStop }">
            From {{ pageStart }} to {{ pageStop }}
          </template>
        </v-data-table>
      </v-card>
    <p></p>
    <div align="left" >
      <h4>
      Below are some internships and research opportunities for undergraduate CinC students. 
      To learn more about the opportunity, click on it in the table or email the appropriate people listed in the contacts. 
      If you wish to find a specific opportunity, you can search it by its name or you can sort each column alphabetically.
      </h4>
    </div>
    <v-card>
      <v-card-title>
        Project Opportunties
        <v-spacer></v-spacer>
        <v-text-field append-icon="search" label="Search" single-line hide-details v-model="search"></v-text-field>
      </v-card-title>
      <v-data-table v-bind:headers="headers" v-bind:items="items" v-bind:search="search" hide-actions item-key="name">
        <template slot="items" slot-scope="props">
          <tr @click="props.expanded = !props.expanded">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.semester }}</td>
            <td class="text-xs-right">{{ props.item.type }}</td>
            <td class="text-xs-right">{{ props.item.location }}</td>
            <td class="text-xs-right">{{ props.item.funds }}</td>
            <td class="text-xs-right">{{ props.item.credit}}</td>
            <td class="text-xs-right">{{ props.item.contact }}</td>
            <td class="text-xs-right">{{ props.item.email}}</td>
          </tr>
        </template>
        <template slot="expand" slot-scope="props">
          <v-card >
            <v-card-text>{{ props.item.description }}</v-card-text>
          </v-card>
        </template>
        <template slot="pageText" slot-scope="{ pageStart, pageStop }">
          From {{ pageStart }} to {{ pageStop }}
        </template>
      </v-data-table>
    </v-card>
    <p></p>
  </v-content>
</template>
<script>
  export default {
    data() {
      return {
        max25chars: (v) => v.length <= 25 || 'Input too long!',
        tmp: '',
        search: '',
        search1: '',
        pagination: {},
        headers1: [{
          text: 'Scholars',
          align: 'left',
          sortable: true,
          value: 'name'
        },
        {
          text: 'Email',
          value: 'email'
        },
        {
          text: 'Department',
          value: 'department'
        }],
        items1: [
          {
            value: false,
            name: 'Andrea Tartaro',
            email: 'andrea.tartaro@furman.edu',
            department: 'Computer Science'
          },
          {
            value: false, 
            name: 'Kevin Treu', 
            email: 'kevin.treu@furman.edu',
            department: 'Computer Science'
          },
          {
            value: false, 
            name: 'Chris Healy',
            email: 'chris.healy@furman.edu', 
            department: 'Computer Science'
          }, 
          {
            value: false, 
            name: "John Quinn",
            email: 'john.quinn@furman.edu',
            department: 'Biology'
          }
        ],
        headers: [{
          text: 'Project Opportunity',
          align: 'left',
          sortable: false,
          value: 'name'
          },
          {
            text: 'Semester',
            value: 'semester'
          },
          {
            text: 'Type of Opportunity',
            value: 'type'
          },
          {
            text: 'Location',
            value: 'location'
          },
          {
            text: 'Funding',
            value: 'funds'
          },
          {
            text: 'Course Credit?',
            value: 'credit'
          },
          {
            text: "Contact Name",
            value: 'contact'
          },
          {
            text: "Contact Email",
            value:'email'
          }

        ],
        items: [{
            value: false,
            name: 'Animal Sounds',
            semester: 'Summer',
            type: "research",
            location: "on campus",
            funds: "Furman Advantage",
            credit: 'no',
            description: "This project focuses on tracking animal sounds all around the Greenville area in order to see if there is a correlation to weather.",
            contact: "John Quinn",
            email: "john.quinn@furman.edu"
          },
          {
            value: false,
            name: 'Summer Research',
            semester: 'Summer',
            type: "research",
            location: "on campus",
            funds: "Furman Advantage",
            credit: 'no',
            description: "Alice is an object-based programming language that creates animations using 3D models. This project observes the relatioship and interview dynamics and behaviors of an Alice avatar and an interviewee. Creating and simulating an interview in real life and in the Alice environment, we're researching the relationship between interviewer confidence in relation to how they view their avatar. ",
            contact: "Dr. Andrea Tartaro",
            email: "andrea.tartaro@furman.edu"
          },
          {
            value: false,
            name: 'Traffic History',
            semester: 'Summer',
            type: "research",
            location: "on campus",
            funds: "Furman Advantage",
            credit: 'no',
            description: "Focuses on the allocation of traffic data to note specific traffic patterns.",
            contact: "Chris Healy",
            email: "chris.healy@furman.edu"
          }

        ]
      }
    }
  }
 
</script>
<style scoped>
  #backBox {
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>

