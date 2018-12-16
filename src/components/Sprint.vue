<template>
<div>
  <Spinner v-show="notLoading" id="pacman" name="ball-scale-multiple" color="#292b2c"/>
  <div v-show="!notLoading" class="sprint">
    <b-btn class="postASprintBtn" v-b-modal.postSprintModal>Create A Sprint</b-btn>
    <b-modal
      id="postSprintModal"
      hide-footer
      variant="dark"
      title="Create Sprint for Team"
      effect="fade/zoom"
    >
      <div>
        Sprint Length: {{rangeValue}} Stand Ups
        <b-form-input type="range" variant="info" min="5" max="10" step="1" v-model="rangeValue"></b-form-input>
      </div>
      <hr>
      <div>Sprint Goal</div>
      <b-form-input type="text" v-model="rangeGoal"></b-form-input>
      <br>
      <b-button
        @click="postSprint(3, +(rangeValue), rangeGoal) && hideModal"
        variant="outline-info text-dark"
        value="submit"
      >{{teamName[0].toUpperCase() + teamName.substring(1)}}...Get Agile!</b-button>
    </b-modal>

    <CalendarView/>
    <br>
    <!-- insert day of sprint variable here -->
    <h2>Daily Stand Up: Day {{sprintInfo}} of Sprint</h2>
    <div class="jumbotron">
      <div class="sprintCardDiv">
        <h3>Daily Stand Up Card for <em><b>{{teamName[0].toUpperCase() + teamName.substring(1)}}</b></em> <br />Date {Date} Members{#}</h3>
        <b-card title="Team: " sub-title="Stand Up Card for {date}">
          <p class="card-text">Current sprint goal:
            <b-form-textarea v-model="sprintGoalText" type="text"></b-form-textarea>
          </p>
          <div class="card-text member">Team Member 1:
            <br>Yesterday:
            <b-form-textarea
              v-model="member1YesterdayText"
              class="memberInputField"
              type="textarea"
            ></b-form-textarea>Today:
            <b-form-textarea v-model="member1TodayText" class="memberInputField" type="textarea"></b-form-textarea>Helps:
            <b-form-textarea v-model="member1HelpsText" class="memberInputField" type="textarea"></b-form-textarea>
          </div>

          <div>Notes:
            <b-form-textarea v-model="notes" type="textarea" class="sprintCardNotes"></b-form-textarea>
          </div>
          <a href="#" class="card-link">Up to Current Sprint</a>
          <b-button id="sprintCardUpBtn" @click="hitThatRoute" variant="outlin-dark">Update Card</b-button>
        </b-card>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import CalendarView from "./CalendarView";
import SprintStore from "../stores/SprintStore";
import Spinner from './error-pages/Spinner'

export default {
  name: "Sprint",
  data() {
    return {
      rangeValue: 5,
      notLoading: false,
      rangeGoal: "",
      sprintGoalText: "",
      member1YesterdayText: "",
      member1TodayText: "",
      member1HelpsText: "",
       teamName: '',
        sprintInfo: '',

      notes: "",
      variants: [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "info",
        "light",
        "dark"
      ],
      buttonVariant: "outline-dark",
      headerBgVariant: "outline-dark",
      headerTextVariant: "outline-dark",
      bodyBgVariant: "outline-dark",
      bodyTextVariant: "dark",
      footerBgVariant: "outline-dark",
      footerTextVariant: "dark"
    };
  },

  
    async created(){
      console.log("SprintStore.data.sprintInfo: ", SprintStore.data.sprintInfo)
      this.notLoading = true
      setTimeout(() => {
        this.notLoading = false
      }, 2500)
       this.sprintInfo = await SprintStore.data.sprintInfo
       this.teamName = await SprintStore.data.teamName
      
      console.log("CalendarView created")
      console.log("this.sprintInfo: ", this.sprintInfo)
      console.log("this.teamName: ", this.teamName)
      console.log()
    },
  methods: {
    hideModal () {
      this.$refs.postSprintModal.hide()
    },
    async hitThatRoute() {
      let response = await fetch("http://localhost:3000/teams_users", {
        credentials: "include"
      });
      console.log(
        "the button is go:",
        response,
        response.status,
        response.data
      );
    },
    postSprint(team_id, sprint_length, sprint_goal) {
      if (!sprint_goal) {
        alert("Please enter a Sprint Goal for your team's betterment");
      }
      console.log(
        "in the postSprint in the sprint component:",
        team_id,
        sprint_length,
        sprint_goal
      );
      SprintStore.methods.postSprint(team_id, sprint_length, sprint_goal);
      this.rangeValue = 5;
      this.rangeGoal = "";
    }
  },
  components: {
    CalendarView
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
  background-color: #ebebeb;
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

.postASprintBtn {
  margin-left: 75%;
}
</style>