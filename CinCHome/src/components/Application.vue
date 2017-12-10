<template>
  <v-content>
    <v-parallax src="http://forevertwentysomethings.com/wp-content/uploads/2015/01/FUrman-Fountains.jpg" height="500">
      <v-layout column align-center justify-center class="white--text">
        <h1 class="white--text mb-2 display-3">Cinc Applications</h1>
      </v-layout>
    </v-parallax>
    <v-data-table :headers="headers" :items="items" hide-actions item-key="name">
      <template slot="items" slot-scope="props">
        <tr @click="props.expanded = !props.expanded">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.faculty }}</td>
          <td class="text-xs-right">{{ props.item.type }}</td>
          <td class="text-xs-right">{{ props.item.credit }}</td>
          <td class="text-xs-right">{{ props.item.paid }}</td>
        </tr>
      </template>
      <template slot="expand" slot-scope="props">
        <v-card flat>
          <v-card-text>{{ props.item.expand }}</v-card-text>
        <v-btn dark color="purple" href="http://cs.furman.edu/~kmcgowin/testdoc.docx">Download Application</v-btn>
        </v-card>
      </template>
      
    </v-data-table>
    <template>
      <vue-clip :options="options">
        <template slot="clip-uploader-action">
          <div>
            <div class="dz-message"><v-btn dark color="purple"> Submit Application</v-btn></div>
          </div>
        </template>

        <template slot="clip-uploader-body" scope="props">
          <div v-for="file in props.files">
            <img v-bind:src="file.dataUrl" />
              {{ file.name }} {{ file.status }}          
          </div>
        </template>
      </vue-clip>
    </template>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      options: {
        url: '/upload',
        paramName: 'file'
      },
      categories: ["Research", "Internship"],
      headers: [
        {
          text: "Current Opportunities",
          align: "left",
          sortable: true,
          value: "name"
        },
        { text: "Faculty Member", value: "faculty" },
        { text: "Opportunity Type", value: "type" },
        { text: "Credit", value: "credit" },
        { text: "Paid/Unpaid", value: "paid" }
      ],
      items: [
        {
          name: "Mock Interview",
          faculty: "Tartaro",
          faculty2: "Catron",
          type: "Research",
          credit: "0 credits",
          paid: "Paid",
          expand: "This is a project that seeks to...",
          application: ""
        },
        {
          name: "Traffic History",
          faculty: "Healy",
          faculty2: "Costa",
          type: "Research",
          credit: "0 credits",
          paid: "Paid",
          expand: "Traffic pattern...",
          application: ""
        }
      ]
    };
  }
};
</script>

