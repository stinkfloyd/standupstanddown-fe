<template>
    <div id="app">
    <header>
       <b-navbar toggleable="md" type="dark" variant="dark">
       <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
       <b-navbar-brand to="/">StandUP!</b-navbar-brand>
       <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/sprint">Sprint</b-nav-item>
          <b-nav-item to="/scrum">Scrum Info</b-nav-item>
          <b-nav-item to="/sign-up">Sign Up</b-nav-item>
          <b-nav-item class="right" href="#" @click.prevent="login">Login</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      </b-navbar>
    </header>
    <main>
      <!-- Navbar on top and will render router components through the router-view below - no need to import them -->
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
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

</style>
