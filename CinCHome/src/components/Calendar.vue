<template>
<add-to-calendar title="VueConf"
                 location="WROCŁAW, POLAND"
                 :start="new Date()"
                 :end="new Date((new Date).setDate((new Date).getDate() + 1))"
                 details="The first Official Vue.js Conference in the world!"
                 inline-template>
  <div>

    <google-calendar id="google-calendar">
      <i class="fa fa-google"></i> Add to Google calendar
    </google-calendar>

    <microsoft-calendar id="microsoft-calendar">
      <i class="fa fa-windows"></i> Add to Microsoft live calendar
    </microsoft-calendar>

  </div>
</add-to-calendar>
</template>
