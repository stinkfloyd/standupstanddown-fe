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
        <b-list-group-item button track-by="$index" v-for="team in this.usersTeams" :key="team.id">{{team.name}}</b-list-group-item>
      </b-list-group>
    </div>
     <!-- <b-alert show>Show teams and basic github info back</b-alert> -->
      <b-alert hide=true variant="warning">Please enter a longer team name</b-alert>
    <div class="teamActions">

      <div class="teamFields">Create a Team:
          <b-form :info="'info'" @submit="addTeam" inline >
            <label for="teamName"  value="name"/>
            <b-input  :state="nameState" id="inputLive" name="teamName" v-model="teamName" placeholder="Team Name">Team</b-input>

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
      model:{}
    }
  },

  async created(){
    this.refreshUsersTeams()
  },
  // async updated(){
  //   this.refreshUsersTeams()
  // },

  methods: {
    async refreshUsersTeams(){
      this.loading = true
      this.usersTeams = await TeamsStore.methods.getTeams()
      console.log("profile.vue: getTeams: ", this.usersTeams)
      this.loading = false
    },

    async addTeam(event){
      event.preventDefault()
      console.log("event.target", event.target[0].value)
      let newTeam = event.target[0].value
      if (newTeam.length < 4) {
        alert('Please enter a team name >= 4')
        return hide = true
        setTimeout(function(hide=false){ ; }, 3000);

        // create a better alert system with bootstrap alerts
      }
      TeamsStore.methods.createTeam(event.target[0].value)
      event.target.reset()
      // await this.refreshUsersTeams()
    }
  }
  // beforeCreated(){
  //   console.log("created")
  //   TeamsStore.methods.getTeams().then(response => console.log("created response: ", response))
  // },

  // mounted(){
  //   console.log("mounted")
  //   TeamsStore.methods.getTeams().then(response => console.log("mounted response: ", response))
  // },

  // methods: {
  //   addTeam(event){
  //     event.preventDefault()
  //     console.log("event.target", event.target[0].value)
  //     TeamsStore.methods.createTeam(event.target[0].value)
  //     event.target.reset()
  //   }
  // }


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
.teamsList{

}
</style>
