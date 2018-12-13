<template>
  <div class="sprint">
    <CalendarView />
    <br />
  <h2>Daily Stand Up: Day {X} of Sprint</h2>
    <div class="jumbotron">
     <div class="sprintCardDiv">
        <h3>Daily Stand UP Card for Team {Team} Date {Date} Members{#}</h3>
       <b-card title="Team: "
            sub-title="Stand Up Card for {date}">
        <p class="card-text">
            Current sprint goal: <b-form-textarea v-model="sprintGoalText" type="text"></b-form-textarea>
        </p>
           <div class="card-text member">
            Team Member 1: 
            <br />
            Yesterday: <b-form-textarea v-model="member1YesterdayText" class="memberInputField" type="textarea"></b-form-textarea>
            Today: <b-form-textarea v-model="member1TodayText" class="memberInputField" type="textarea"></b-form-textarea>
            Helps: <b-form-textarea v-model="member1HelpsText" class="memberInputField" type="textarea"></b-form-textarea>
        </div>
    
        <div>Notes:
        <b-form-textarea v-model="notes" type="textarea" class="sprintCardNotes"></b-form-textarea>
        </div>
        <a href="#"
           class="card-link">Top of Card</a>
        <b-button id="sprintCardUpBtn"  @click="hitThatRoute" variant="outlin-dark">Update Card</b-button>
     
    </b-card>
    </div>
    </div> 
  </div>
</template>

<script>
import CalendarView from './CalendarView'
export default {
  name: 'Sprint',
  data () {
    return {
      sprintGoalText: '',
      member1YesterdayText: '',
      member1TodayText: '',
      member1HelpsText: '',
    
      notes:''
      
    }
    
  },
  methods: {
      async hitThatRoute() {
        let response = await fetch('http://localhost:3000/teams_users')
        console.log("the button is go:", response, response.status, response.data)
      }
    },
    components: {
      CalendarView
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

.jumbotron {
  background-color:#ebebeb;
}

.sprint {
  border-radius: 5px;
  padding: 10px;
  margin: 2%;  
}

.sprintCardDiv {
  text-align: left;
}

.member {
  border-bottom: 1px dashed black;
  margin-bottom: 2%;
}

.memberInputField {
  width: 50%;
  margin: 2%;
}

#sprintCardUpBtn {
  margin: 2% 30%;
  border: 1px solid #333333;
  border-radius: 5px;
}

#sprintCardUpBtn:hover {
  background-color: #dddddd;
}

</style>