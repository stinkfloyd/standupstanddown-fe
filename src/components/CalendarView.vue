<template>
  <div class="calendar">
    <p class="team-header">Current Sprint: <em>{{teamName[0].toUpperCase() + teamName.substring(1)}}</em></p>
    <div>


     <b-form-group label="">
      <b-form-radio-group id="btnradios2"
                          buttons
                          button-variant="outline-dark"
                          size="lg"
                          v-model="selected"
                          :options="options"
                          name="radioBtnOutline" />
    </b-form-group>

    </div>

  </div>
</template>

<script>

  import SprintStore from "../stores/SprintStore"

  let startDate = "Day 1"
  let endDate = "Sprint End"

  export default {

    name: 'Home',

    data: () => {
      return {
        teamName: 'test',
        sprintInfo: '',
        selected: 'radio1',
        options: [
          { text: startDate, value: "radio1", disable: false },
          { text: 'Day 2', value: 'radio2', disable: false },
          { text: 'Day 3', value: 'radio3', disabled: false },
          { text: 'Day 4', value: 'radio4', disable: false },
          { text: endDate, value: 'radio5', disable: false }
        ]
      }
    },

  created(){
      console.log("SprintStore.data.sprintInfo: ", SprintStore.data.sprintInfo)
      this.sprintInfo = SprintStore.data.sprintInfo
      this.teamName = SprintStore.data.teamName
      console.log("CalendarView created")
      console.log("this.sprintInfo: ", this.sprintInfo)
      console.log("this.teamName: ", this.teamName)
      console.log()
    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
.hello {
  border: 5px double #28284e;
  border-radius: 5px;
  padding: 10px;
  margin: 5%;
}
.team-header{
  font-size: 40px;
}
</style>
