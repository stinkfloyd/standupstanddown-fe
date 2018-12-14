<template>
    <div id="app">
    <header>
       <b-navbar toggleable="md" type="dark" variant="dark">
       <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
       <b-navbar-brand to="/">StandUP!</b-navbar-brand>
       <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <!-- <b-nav-item to="/sprint">Home</b-nav-item> -->
          <b-nav-item  to="/sprint">Sprint</b-nav-item>
          <b-nav-item  to="/profile">Your Teams</b-nav-item>
          <!-- <b-nav-item to="/sign-up">Logout</b-nav-item> -->
        </b-navbar-nav>
       </b-collapse>
       <div class="userInfoDisplay">
         {{currentUser.username.toUpperCase()}}
        </div>
       <b-navbar-nav>
         <b-nav-item  to="/sign-up" v-show="!isSeen">Sign Up</b-nav-item>
         
         <b-nav-item  v-on:click='isSeen = !isSeen' v-show="!isSeen" class="loginBtn" href="http://localhost:3000/auth/github" >Login</b-nav-item>
         </b-navbar-nav>
         <img :src="currentUser.photo" alt="BV">
      </b-navbar>
    </header>
    <main>
      <!-- Navbar on top and will render router components through the router-view below - no need to import them -->
      <router-view></router-view>
    
    </main>
     <footer class="footer"> 
   <b-navbar toggleable="md" type="dark" variant="dark">Footer
   </b-navbar>
</footer>
    
  </div>
</template>

<script>
import UsersStore from "./stores/UsersStore"
const jwtDecode = require('jwt-decode')

export default {
  name: 'App',
  data () {
    return {
      reactive: true,
      isSeen: false,
      currentUser: 'RILEY BURNS',
      currentUserPhoto: 'https://picsum.photos/200/200',
      currentUserOther: ''
    }
  },

  async created() {
     this.getUserInfo()

  },

  methods: {
    toggle: function(){
      // if (this.isSeen === false) {
      //     this.isSeen = !this.isSeen
      // } else {
      //   !this.isSeen
      // }    
        },
    async getUserInfo() {
      const tokenDecoded = jwtDecode(document.cookie.split('=')[1])
      let creatorId = tokenDecoded.id
      await fetch(`http://localhost:3000/users/${creatorId}`, {
        credentials: 'include',
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then(async (response) => {
       this.currentUser = await response.json()
        console.log("get one user store info:", this.currentUser)
        return this.currentUser
      })
    },

      
    
   
  }

  
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
  height: 75px;
  width: 75px;
  border-radius: 15px;
}
.userInfoDisplay {
  color: #ffffff;
  font-size: 24px;
}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: #e4e4e4;
  text-align: center;
}

</style>
