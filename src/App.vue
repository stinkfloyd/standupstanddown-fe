<template>
    <div id="app">
    <header>
       <b-navbar toggleable="md" type="dark" variant="dark">
       <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
       <b-navbar-brand to="/">StandUP!</b-navbar-brand>
       <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <!-- <b-nav-item to="/sprint">Home</b-nav-item> -->
          <b-nav-item to="/sprint">Sprint</b-nav-item>
          <b-nav-item to="/profile">Your Teams</b-nav-item>
        </b-navbar-nav>
       </b-collapse>
       <b-navbar-nav>
         <b-nav-item to="/sign-up">Sign Up</b-nav-item>
         <b-nav-item class="loginBtn" href="http://localhost:3000/auth/github" >Login</b-nav-item>
         </b-navbar-nav>
         <img src="https://fanart.tv/fanart/music/0638ba22-040f-438d-83a5-9b670c4adaf5/artistbackground/ludacris-55d2613855be0.jpg" alt="BV">
      </b-navbar>
    </header>
    <main>
      <!-- Navbar on top and will render router components through the router-view below - no need to import them -->
      <!-- <router-view></router-view> -->
      <Profile/>
    </main>
  </div>
</template>

<script>
import TeamsStore from "./stores/TeamsStore"
import Profile from './components/Profile'
let usersTeams

export default {
  // data (){
  //   return{
  //   }
  // },
  //
  // props: {
  //   'usersTeams': usersTeams
  // },
  // mounted(){
  //   console.log("mounted")
  //   TeamsStore.methods.getTeams().then(response => console.log("mounted response: ", response))
  // },
  // befomounted(){
  //   console.log("created")
  //   TeamsStore.methods.getTeams().then(response => usersTeams = response)
  // },
  name: 'App',
  components: {
    Profile
  }


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #202d3a;
}

img {
  height: 30px;
  width: 50px;
}

</style>
