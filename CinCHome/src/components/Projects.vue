<template>
<v-content>
<v-parallax src="../static/research.jpg" height="650">
<div id="backBox">
  <v-layout column align-center justify-center class="white--text">
        <h1 class="white--text mb-2 display-3">Project Opportunities</h1>
      </v-layout>
      </div>

</v-parallax>
<p></p>
<div align="left" >
<h4>
Below are some internships and research opportunities for undergraduate CinC students. To learn more about the opportunity, click on it in the table or email the appropriate people listed in the contacts. If you wish to find a specific opportunity, you can search it by its name or you can sort each column alphabetically.
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
          <td>
           {{ props.item.name }}
        </td>
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
            name: 'Intern at Infor',
            semester: 'Summer',
            type: "internship",
            location: "Greenville",
            funds: "none",
            credit: 'yes',
            description: "Infor delivers fully integrated enterprise solutions for a wide range of industries, as well as best-in-class, stand-alone products that address the essential challenges its customers face in areas such as enterprise resource planning, supply chain planning and execution, customer and supplier relationship management, asset management, product lifecycle management, financial and performance management, and business intelligence. With 13,000 employees, offices in over 40 countries, and customers in more than 200 countries, Infor provides enterprise solutions to more than 70,000 customers. ",
            contact: "Kyle Green",
            email: "kgreen@infor.com"
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
            name: 'intern at IBM',
            semester: 'Fall',
            type: "internship",
            location: "not local off campus",
            funds: "IBM",
            credit: 'yes',
            description: "Performance and Programmatic Marketing Interns will work collaboratively, as part of a team, on a project that addresses a strategic IBM business challenge. Projects are representative of the type of work Performance and Programmatic Marketing employees are engaged in every day. The internship project will culminate with a set of recommendations and final presentation to the IBM Performance and Programmatic Marketing Leaders. In addition to the project, the internship includes a number of educational, networking and social activities.",
            contact: "Kevin James",
            email: "kevin.james@ibm.com"
          }

        ]
      }
    }
  }

</script>
<<style scoped>
#backBox {
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>

