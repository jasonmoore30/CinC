<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 lg5>
        <v-expansion-panel popout>
          <v-expansion-panel-content v-for="opportunity in opportunities" :key="opportunity.title">
            <div slot="header">{{ opportunity.title }}</div>
            <v-card>
              <v-card-text class="grey lighten-3">{{ opportunity.description }}</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        opportunities:[{title:"Item", description:"fuck"}]
      }
    }
  }
</script>