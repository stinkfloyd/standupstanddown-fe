<template>
  <div class="profile">
    <p>Github username, firstname, lastname</p>
     <!-- <b-alert show>Show teams and basic github info back</b-alert> -->
     <div class="teamFields">Create a Team:
      <b-form inline>
        <label for="Name"  value="name"/>
        <b-input>Team</b-input>
      

      <b-button class="teamBtn" variant="dark">+</b-button>
    </b-form>
    </div>
 <div class="teamFields">Join a Team:
     <b-form inline>
      
        <label for="Team Name" value="name"/>
        <b-input>Team</b-input>

      <b-button class="teamBtn" variant="dark">+</b-button>
     
    </b-form>
     </div>
     
  </div>
</template>

/*post a new team req takes a name and creator_id*/

<script>
export default {
  name: 'Profile',
  data () {
    return {
     
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
  display: flex;
  flex-direction: row;
}

.profile:hover {
  border: 5px double #284e45;
}

.teamFields {
  font-weight: bold;
  margin-left: 10%;
}
</style>
