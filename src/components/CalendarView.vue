<template>
  <div class="calendar">
    <h2>Sprint Calendar</h2>
    <div>

    <p>Current Sprint for {{SprintStore.data.teamName}}</p>
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

  let startDate = "Sprint Day 1"
  let endDate = "Sprint End"

  export default {

    name: 'Home',

    data: () => {
      return {
        sprintInfo: SprintStore.data.sprintInfo,
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

    async created(){
      console.log("CalendarView created")
      console.log(SprintStore.data.teamName)
      console.log()
    },

    methods: {
      async refreshSprint(){
        console.log("called refreshed sprint")
        await SprintStore.methods.getSprint(id)
        this.sprintInfo = await res
      },
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
</style>
