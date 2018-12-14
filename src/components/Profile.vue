<template>
  <div class="profile">
    <div>
      <p>Github username, firstname, lastname</p>
    </div>
    <div>
      <p>Your Teams: </p>
    </div>
    <div class='teamsList'>
      <b-list-group>
        <b-list-group-item button track-by="$index" v-for="team in this.usersTeams" :key="team.id">{{team.name[0].toUpperCase() + team.name.substring(1)}}</b-list-group-item>
      </b-list-group>
    </div>
     <!-- <b-alert show>Show teams and basic github info back</b-alert> -->
      <b-alert hide=true variant="warning">Please enter a longer team name</b-alert>
    <div class="teamActions">

      <div class="teamFields">Create a Team:
          <b-form :info="'info'" @submit="addTeam" inline >
            <label for="teamName"  value="name"/>
            <b-input   id="inputLive"  name="teamName" v-model="teamName" placeholder="Team Name">Team</b-input>

            <b-button type="submit" class="teamBtn" variant="dark" >+</b-button>

            <!-- <b-form-invalid-feedback id="inputLiveFeedback">
                 Enter at least 4 letters
                 </b-form-invalid-feedback> -->
          </b-form>
      </div>
      <br />
      <div class="teamFields">Join a Team:
        <b-form inline>
          <label for="Team Name" value="name"/>
          <b-input placeholder="Team Name">Team</b-input>
          <b-button class="teamBtn" variant="dark">+</b-button>
        </b-form>
      </div>
    </div>
    <div class="deleteSelectForm"><b>Delete a Team:</b>
    <b-form-select @change="deleteTeam" id="dropDown" title="Delete A Team">
      <option v-for="team in this.usersTeams" 
            :key="team.id">{{team.name[0].toUpperCase() + team.name.substring(1)}}
      </option>
    </b-form-select>
    <!-- <b-btn class="deleteBTN" variant="dark">Delete</b-btn> -->
    </div>
  </div>
</template>

/*post a new team req takes a name and creator_id*/

<script>
import Vue from 'vue'
import TeamsStore from "../stores/TeamsStore"

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
      await res.forEach((team) => {
          team.name[0].toUpperCase() + team.name.substring(1)
          return this.usersTeams.push(team)
      })
    },

    async addTeam(event) {
      event.preventDefault()
      await TeamsStore.methods.createTeam(this.teamName)
      event.target.reset()
      this.teamName = ''
      return this.refreshUsersTeams()
    },

    async deleteTeam(name) {
      let id
      this.usersTeams.map((team) => {
        // console.log("delete team:", team)
        if (team.name === name.toLowerCase())
        id = team.id
      })
      await TeamsStore.methods.deleteTeam(id)
          return this.refreshUsersTeams()
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
.profile {
  border: 5px double #28284e;
  border-radius: 5px;
  padding: 10px;
  margin: 5%;
  /* display: flex; */
  /* flex-direction: row; */
}

.profile:hover {
  border: 5px double #284e45;
}

.teamFields {
  font-weight: bold;
  padding: 10px;
  /* width: 50%; */
  height: auto;
}
.teamActions{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
.deleteSelectForm {
  width: 25%;
  margin-left: 15%;
}
</style>
