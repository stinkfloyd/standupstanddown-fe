<template>
<div>
  <!-- loading spinner for transition -->
  <Spinner v-show="notLoading" id="pacman" name="ball-scale-multiple" color="#292b2c"/>

 <!-- below here is rendered after loading spinner timeout -->
  <div v-show="!notLoading" class="sprint">
    <b-btn class="postASprintBtn" v-b-modal.postSprintModal>Create A Sprint</b-btn>

   <!-- calendar view component rendered here -->
    <CalendarView :sprintLength="sprintLength"/>
    <br>

    <!-- insert day of sprint variable here -->
    <h2>Daily Stand Up: Day {{sprintInfo[0]}} of Sprint</h2>
    <div class="jumbotron">
      <div class="sprintCardDiv">
       <b-card class="sprintDailyCard" no-body
             style="max-width: 66%;"
            img-src="https://dummyimage.com/200x100/8a48c7/fff"
            img-alt="Image"
            img-top>
        <h4 slot="header">{Member 1}</h4>
        <b-card-body>
            <p class="card-text">
              
            </p>
        </b-card-body>
        <b-list-group flush>
            <b-list-group-item> <br>
            Yesterday:
            <b-form-textarea
              v-model="member1YesterdayText"
              class="memberInputField"
              type="textarea"
            ></b-form-textarea></b-list-group-item>
            <b-list-group-item> <br>Today:
            <b-form-textarea
              v-model="member1TodayText"
              class="memberInputField"
              type="textarea">
              </b-form-textarea>
              </b-list-group-item>
            <b-list-group-item> <br>Helps:
            <b-form-textarea
              v-model="member1HelpsText"
              class="memberInputField"
              type="textarea">
            </b-form-textarea>
            </b-list-group-item>
            <b-list-group-item>
              <b-button>Submit Stand Up</b-button>
            </b-list-group-item>
           </b-list-group>
         </b-card>
      </div>
    </div>
    <!-- Sprint Notes: persists throughout all days of the sprint -->
    <div class="sprintNotes">
      <p class="card-text">Sprint Notes:</p>
      <b-form-textarea v-model="sprintInfo[1].sprint_notes" type="text" value="sprintInfo[1].sprint_notes"></b-form-textarea>
      <b-button id="sprintCardUpBtn" variant="outlin-dark">Update Notes</b-button>
    </div>
  </div>
  <!-- modal below here as last rendered thing in component -->
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
      sprintLength: 5,
      sprintGoalText: "",
      member1YesterdayText: "",
      member1TodayText: "",
      member1HelpsText: "",
      teamName: '',
      sprintInfo: '',
      notes: "",

    };
  },


    async created(){
      console.log("calendar info available to sprint page:", CalendarView)
      console.log("SprintStore.data.sprintInfo: ", SprintStore.data.sprintInfo)
      if (SprintStore.data.sprintInfo.length === 0) {
        this.$router.push('/profile')
      }

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

<style scoped>
a {
  color: #1b3b2d;
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

.sprintNotes{
  flex-direction: row;
  font-weight: bold;
  /* display: flex; */

  /* padding-top: 5px; */
  /* padding-bottom: 50px;
  font-weight: bold;
  font-size: 20px;
  text-align: left;
  margin: 0px; */
}
</style>
