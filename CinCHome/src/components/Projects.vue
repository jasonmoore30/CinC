<template>
<v-content>
<v-parallax src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/17800488_1403123846427785_3900485199143704262_n.jpg?oh=2c99b8a56109a2b91b0241cbc93b9c3a&oe=5AD57E1E" >
  <v-layout column align-center justify-center class="white--text">
        <h1 class="white--text mb-2 display-3">Project Opportunities</h1>
      </v-layout>
</v-parallax>
<p></p>
  <v-card>
    <v-card-title>
      Project Opportunties
      <v-spacer></v-spacer>
      <v-text-field append-icon="search" label="Search" single-line hide-details v-model="search"></v-text-field>
    </v-card-title>
    <v-data-table v-bind:headers="headers" v-bind:items="items" v-bind:search="search" hide-actions item-key="name">
      <template slot="items" slot-scope="props">
        <tr @click="props.expanded = !props.expanded">
          <td>
           {{ props.item.name }}

        </td>
        <td class="text-xs-right">{{ props.item.semester }}</td>
        <td class="text-xs-right">{{ props.item.type }}</td>
        <td class="text-xs-right">{{ props.item.location }}</td>
        <td class="text-xs-right">{{ props.item.funds }}</td>
        <td class="text-xs-right">{{ props.item.credit}}</td>
        <td class="text-xs-right">{{ props.item.contact }}</td>
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
        pagination: {},
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
            text: "Contact",
            value: 'contact'
          }

        ],
        items: [{
            value: false,
            name: 'Intern at Infor',
            semester: 'Summer',
            type: "internship",
            location: "Greenville",
            funds: "none",
            credit: 'yes',
            description: "this is 1 test",
            contact: ""
          },
          {
            value: false,
            name: 'Summer Research',
            semester: 'Summer',
            type: "research",
            location: "on campus",
            funds: "Furman Advantage",
            credit: 'no',
            description: "this is 2 test",
            contact: ""
          },
          {
            value: false,
            name: 'intern at IBM',
            semester: 'Fall',
            type: "internship",
            location: "not local off campus",
            funds: "IBM",
            credit: 'yes',
            description: "this is 3 test",
            contact: ""
          }

        ]
      }
    }
  }

</script>
