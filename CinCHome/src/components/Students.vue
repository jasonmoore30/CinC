<template>
  <v-content>
  <v-parallax src="https://www.insidehighered.com/sites/default/server_files/styles/large-copy/public/media/Furman%20U.jpg?itok=bdXCCiQJ" height="400" ></v-parallax>

  <v-tabs dark grow>
    <v-toolbar color="purple" dark>

      <v-toolbar-title>CinC Students</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-tabs-bar class="purple" slot="extension">
        <v-tabs-slider color="yellow"></v-tabs-slider>
        <v-tabs-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.url"
          :href="'#tab-' + (i + 1)"
        >
          {{ item.title }}
        </v-tabs-item>
        <v-menu :nudge-width="100" left bottom>
          <v-tabs-item slot="activator">
            Travel Opportunities
            <v-icon>arrow_drop_down</v-icon>
          </v-tabs-item>
          <v-list class="grey lighten-3">
            <v-list-tile
              tag="a"
              v-for="op in ops"
              :key="op.title"
              :to='op.url'
              @click=""
            >
              {{ op.title }}
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-tabs-bar>
    </v-toolbar>
    <v-tabs-items>
      <v-tabs-content
        v-for="i in 5"
        :key="i"
        :id="'tab-' + i"
      >
        <v-card flat>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tabs-content>
    </v-tabs-items>
  </v-tabs>
  </v-content>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {title: 'Project Opportunities', url: '/projects'},
          {title: 'Experiences', url: '/experiences'},
          {title: 'CinC Courses', url: '/courses'},
          {title: 'Student Awards', url: '/awards'}
        ],
        ops: [
        { title: 'Research Conferences' },
        { title: 'Research Competitions' },
        { title: 'Programming Competitions' },
        { title: 'Grace Hopper Celebration of Women in Computing' }
      ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    }
  }
</script>
