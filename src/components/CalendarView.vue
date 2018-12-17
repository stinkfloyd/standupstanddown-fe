<template>
  <div class="calendar">
    <p class="team-header">Current Sprint: <em>{{teamName[0].toUpperCase() + teamName.substring(1)}}</em></p>
    <div>
     <b-form-group label="" >
      <b-button class="sprintDayButtons" variant="outline-dark" track-by="$index"  v-for="day in this.sprintLength" :key="day" @click="loadSprintDaily(day)">Stand Up {{day}}
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
      loadSprintDaily(day) {
        console.log("hit the load sprint daily route with day:", day)
      }

    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  border-radius: 4px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  
}

.sprintDayButtons:hover {
   opacity: 0.7;
   background-color: #28284e;
  transition: opacity .55s ease-in-out;
}

</style>
