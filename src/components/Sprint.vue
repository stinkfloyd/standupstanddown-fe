<template>
  <div class="body">
    <!-- loading spinner for transition -->
    <Spinner v-show="notLoading" id="pacman" name="ball-scale-multiple" color="#292b2c"/>

    <!-- below here is rendered after loading spinner timeout -->
    <div v-show="!notLoading" class="sprint">
      <b-btn class="postASprintBtn" v-b-modal.postSprintModal>Create A Sprint</b-btn>

     <!-- calendar view component rendered here-->
     <CalendarView class="cal" :sprintLength="sprintLength"/>

     <div class="sprintNotes">Sprint Notes:
        <b-form-textarea v-model="sprintInfo[1].sprint_notes" type="text" value="sprintInfo[1].sprint_notes" :rows="3"></b-form-textarea>
        <b-button id="sprintCardUpBtn" variant="outlin-dark">✎ Notes</b-button>
     </div >

      <div class="sprintCardDiv" v-for="standup in standupsDay1[0]">
         <b-card class="sprintDailyCard" no-body
             style="max-width: 30%;"
            img-src="http://www.clker.com/cliparts/l/w/w/n/7/c/purple-square-button-md.png"
            img-alt="Image"
            img-top>
        <h4 slot="header">{{standup.username}}</h4>
        <b-list-group flush>
            <b-list-group-item> <br>
            Yesterday:
            <p v-if="standup.yesterday">{{standup.yesterday}}</p>
            <b-form-textarea v-else
              v-model="member1YesterdayText"
              class="memberInputField"
              type="textarea"
            ></b-form-textarea></b-list-group-item>
            <b-list-group-item> <br>Today:
            <p v-if="standup.today">{{standup.today}}</p>
            <b-form-textarea v-else
              v-model="member1TodayText"
              class="memberInputField"
              type="textarea">
              </b-form-textarea>
              </b-list-group-item>
            <b-list-group-item> <br>Helps:
            <p v-if="standup.helps">{{standup.helps}}</p>
            <b-form-textarea v-else
              v-model="member1HelpsText"
              class="memberInputField"
              type="textarea">
            </b-form-textarea>
            </b-list-group-item>
            <b-list-group-item>
              <b-button>Submit Stand Up</b-button>
              <b-button v-b-tooltip.hover title="Edit" id="edit" variant="outline-dark" class="teamEditDel" @click="showModal(standup.id)">✎</b-button>
            </b-list-group-item>
           </b-list-group>
         </b-card>
      <!-- End card loop -->
      </div>

    <!-- YOUR CARD form displays only when you havent submitted standup yet -->
    <!-- IM not proud of this. Last minuite Fluff for video -->
      <div class="yourCard">
        <b-card class="sprintDailyCard" no-body
          style="width: 30%;"
           img-src="http://www.clker.com/cliparts/l/w/w/n/7/c/purple-square-button-md.png"
           img-alt="Image"
           img-top>
       <h4 slot="header">(You)</h4>
       <b-list-group flush>
           <b-list-group-item> <br>
           Yesterday:
           <p v-if="yourStandUpSubmitted">{{yourStandUpYesterday}}</p>
           <b-form-textarea v-else
             v-model="yourStandUpYesterday"
             class="memberInputField"
             type="textarea"
           ></b-form-textarea></b-list-group-item>
           <b-list-group-item> <br>Today:
          <p v-if="yourStandUpSubmitted">{{yourStandUpToday}}</p>
           <b-form-textarea v-else
             v-model="yourStandUpToday"
             class="memberInputField"
             type="textarea">
             </b-form-textarea>
             </b-list-group-item>
           <b-list-group-item> <br>Helps:
             <p v-if="yourStandUpSubmitted">{{yourStandUpHelps}}</p>
           <b-form-textarea v-else
             v-model="yourStandUpHelps"
             class="memberInputField"
             type="textarea">
           </b-form-textarea>
           </b-list-group-item>
           <b-list-group-item>
             <b-button @click="submitYourStandUp">Submit Stand Up</b-button>
             <b-button v-b-tooltip.hover title="Edit" id="edit" variant="outline-dark" class="teamEditDel" >✎</b-button>
           </b-list-group-item>
          </b-list-group>
        </b-card>
      </div>






    </div>





    </div>
</template>

<script>
import CalendarView from "./CalendarView";
import SprintStore from "../stores/SprintStore";
import StandUpsStore from "../stores/StandUpsStore";
import Spinner from './error-pages/Spinner'

export default {
  name: "Sprint",
  data() {
    return {
      selectedStandupDay: '',
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
      currentSprintId: 0,
      notes: "",
      standupsDay1:[],
      standupsDay2:[],
      yourStandUpSubmitted: false,
      yourStandUpYesterday: '',
      yourStandUpToday: '',
      yourStandUpHelps: '',
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
       this.currentSprintId = await SprintStore.data.sprintId
     //load in current standUps from stand up store
       await this.currentSprintInfo(this.currentSprintId)
      console.log("CalendarView created")
      console.log("this.sprintInfo: ", this.sprintInfo)
      console.log("this.teamName: ", this.teamName)
      //this should get all standups for this sprint and store them in the StandUpsStore
      await StandUpsStore.methods.getStandups(this.sprintInfo[1].id)
      console.log("StandUpsStore.data.allStandupsForThisSprint[0]: ",
      StandUpsStore.data.allStandupsForThisSprint[0])
      console.log(StandUpsStore.data.allStandupsForThisSprint[0])
      //populate standups for each day
      let day1 = []
      StandUpsStore.data.allStandupsForThisSprint[0].forEach((standup) =>{
        if(standup.dayInSprint === 1){
          day1.push(standup)
        }
      })
      console.log("day1: ", day1)
      this.standupsDay1.push(day1)
      console.log("this.standupsDay1: ", this.standupsDay1)
    },

  methods: {
    //
    // hideModal () {
    //   this.$refs.postSprintModal.hide()
    // },
    //
    // showModal(standup) {
    //   console.log("show modal")
    //   this.$refs.editStandupModal.show()
    // },

    async hitThatRoute() {
      let response = await fetch("http://standup-be.herokuapp.com/teams_users", {
        credentials: "include"
      });
      console.log(
        "the button is go:",
        response,
        response.status,
        response.data
      );
    },

    async currentSprintInfo() {
      let response = await StandUpsStore.methods.getSprintInfo(this.currentSprintId)
      console.log("response to currentSprintIno in sprint vue:", response)
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
    },

    addTeamMember(event) {
      console.log("add team member function")
      let parent = document.getElementById('sprintCardParent')
    },

    submitYourStandUp(){
      console.log("submitYourStandUp")
      console.log("yourStandUpYesterday: ", this.yourStandUpYesterday)

      this.yourStandUpSubmitted = true
      // let newStandUp = {
      //   yesterday: this.yourStandUpYesterday,
      //   today: this.yourStandUpToday,
      //   helps: this.yourStandUpHelps,
      //   // this should eventually be dynamic:
      //   dayInSprint: 1,
      //   sprint_id: this.currentSprintId,
      //   user_id: 3,
      // }
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

.sprintNotes {
  width: 66%;
  margin-left: 16.5%;
}

.sprintCardDiv {
  text-align: left;
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
  margin-left: 66%;
}

.sprintDailyCard {
  float: left;
  margin: 1%;
  margin-bottom: 10%;

}

.sprintDailyCard > img {
  width: 75px;
  height: 75px;
  opacity: .6;
  padding: 1%;
}

.yourCard {
  text-align: left;
  margin-left: 15%;
  margin: auto;
}
</style>
