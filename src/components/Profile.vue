<template>
  <div class="profile">
    <h1>User profile page</h1>
     <b-alert show>Show teams and basic github info back</b-alert>
     <p>All the stuff goes in here</p>
  </div>
</template>

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
}
</style>
