<template>
  <div class="calendar">
    <p class="team-header">Current Sprint: <em>{{teamName[0].toUpperCase() + teamName.substring(1)}}</em></p>
    <div>
     <b-form-group label="" >
      <b-button class="sprintDayButtons" variant="outline-dark" track-by="$index"  v-for="day in this.sprintLength" :key="day" >Stand Up {{day}}
      </b-button>
     </b-form-group>
    </div>
  </div>
</template>

<script>
  import SprintStore from "../stores/SprintStore"
  import Sprint from './Sprint'

  let startDate = "Day 1"
  let endDate = "Sprint End"

  export default {
    name: 'CalendarView',
    
    // this is receiving the prop of sprintLEngth from the sprint vue
    props: ['sprintLength'],
    data: () => {
      return {
        reactove: true,
        teamName: 'test',
        sprintInfo: '',
        selected: 'radio1',
        curentDaily: 0,
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

    },

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
.sprintDayButtons {
  border-radius: 2px;
  border-bottom-left-radius: 15px;
  border-top-right-radius: 15px;
}
  

</style>
