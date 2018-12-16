<template>
  <div class="profile">
    <b-container class="bv-example-row">
    <b-row>
        <b-col>
          <div class="teamFields">Create a Team
            <b-form :info="'info'" @submit="addTeam" inline >
              <label for="teamName"  value="name"/>
              <b-input id="inputLive"  name="teamName" 
                 v-model="teamName" placeholder="Team Name">Team
              </b-input>

              <b-button type="submit" class="teamBtn" variant="dark" >+</b-button>
              <b-form-invalid-feedback id="inputLiveFeedback">
                 Enter at least 4 letters
              </b-form-invalid-feedback>
             </b-form>
           </div>
           <div class="deleteSelectForm"><b>Delete a Team</b>
             <b-form-select @change="deleteTeam" id="dropDown" title="Delete A Team">
             <option v-for="team in this.usersTeams"
               :key="team.id">{{team.name[0].toUpperCase() + team.name.substring(1)}}
             </option>
            </b-form-select>
    <!-- <b-btn class="deleteBTN" variant="dark">Delete</b-btn> -->
          </div>
        </b-col>
        <b-col>  
          <h4><u>Your Teams</u></h4>
          <div class='teamsList'>
            <b-list-group class="yourTeamsGroup">
              <b-list-group-item class="yourTeamsItem" button track-by="$index" v-for="team in this.usersTeams" :key="team.id" @click="goToSprint(team.id, team.name)">{{team.name[0].toUpperCase() + team.name.substring(1)}}
              </b-list-group-item>
               </b-list-group>
           </div>
         </b-col>
         <b-col>  <!-- <b-alert show>Show teams and basic github info back</b-alert> -->
           <b-alert hide=true variant="warning">Please enter a longer team name</b-alert>
           <div class="teamActions">
             <div class="teamFields">Join a Team
               <b-form inline>
                 <label for="Team Name" value="name"/>
                 <b-input placeholder="Team Name">Team</b-input>
                 <b-button class="teamBtn" variant="dark">+</b-button>
               </b-form>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

/*post a new team req takes a name and creator_id*/

<script>
import Vue from 'vue'
const jwtDecode = require('jwt-decode')
import TeamsStore from "../stores/TeamsStore"
import SprintStore from "../stores/SprintStore"


export default {
  name: 'Profile',
  data () {
    return {
      reactive: true,
      loading: false,
      usersTeams: [],
      model:{},
      teamName: '',
      selected: null,
    }
  },

  async created() {
    this.refreshUsersTeams()
  },

  methods: {
    async refreshUsersTeams() {
      this.usersTeams = []
      let res = await TeamsStore.methods.getTeams()
      await res.map((team) => {
        if (team.creator_id === jwtDecode(document.cookie.split('=')[1]).id) {
           team.name[0].toUpperCase() + team.name.substring(1)
          return this.usersTeams.push(team)
        }
      })
    },

    async addTeam(event) {
      event.preventDefault()
      await TeamsStore.methods.createTeam(this.teamName)
      event.target.reset()
      this.teamName = ''
      return this.refreshUsersTeams()
    },

    async goToSprint(teamId, teamName){
      console.log("Go to sprint id: ", teamId)
      await SprintStore.methods.getSprint(teamId, teamName)
      this.$router.push("/sprint")
      //get sprint from SprintStore populates the sprint store data(this doesn't really work yet)
      //redirect to sprints page which is retrieving data from the Sprint Store
    },

    async deleteTeam(teamId) {
      console.log("gonna delete team:", teamId)
      await TeamsStore.methods.deleteTeam(+(teamId))
    }
  }

}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.profile {
  border: 5px double #28284e;
  border-radius: 5px;
  padding: 10px;
  margin: 5%;
}

.profile:hover {
  border: 5px double #284e45;
}

.form-control {
  width: 90%;
}

.teamFields {
  font-weight: bold;
  padding: 5%;
}

.teamBtn {
  margin: 1%;
}

.yourTeamsItem {
  margin: 1% 0px;
  border: 1px solid rgb(59, 59, 59);
  border-radius: 15px;
  font-weight: bold;
}

.yourTeamsItem:focus {
  outline: none;
}

.yourTeamsItem:hover {
  border: 1px solid darkslategray;
}

</style>
