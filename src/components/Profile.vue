<template>
  <div class="profile">
    <div>
      <p>Github username, firstname, lastname</p>
    </div>
    <div>
      <p>Your Teams: </p>
    </div>
    <div>
      <p>(put user's teams here)</p>
    </div>
     <!-- <b-alert show>Show teams and basic github info back</b-alert> -->
    <div class="teamActions">
      <div class="teamFields">Create a Team:
          <b-form :info="'info'" @submit="addTeam" inline>
            <label for="teamName"  value="name"/>
            <b-input name="teamName" placeholder="Team Name">Team</b-input>
            <b-button type="submit" class="teamBtn" variant="dark" >+</b-button>
          </b-form>
      </div>
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
import TeamsStore from "../stores/TeamsStore"
console.log("TeamStore.data: ", TeamsStore.data)



export default {
  name: 'Profile',
  data () {
    return {
      TeamsStore: TeamsStore.data
    }
  },

  mounted(){
    console.log("mounted")
    console.log(TeamsStore.methods)
    TeamsStore.methods.getTeams()
  },

  methods: {
    addTeam(event){
      event.preventDefault()
      console.log("event.target", event.target[0].value)
      TeamsStore.methods.createTeam(event.target[0].value)
      event.target.reset()
    }
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
  /* margin-left: 10%; */
}
.teamActions{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
</style>
