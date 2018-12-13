<template>
  <div class="signUp">
    <h3>Welcome to Stand Up! The <b>Daily Scrum</b> app for remote teams</h3>
    <h4>Easily <b>create</b> and <b>join</b> sprint teams</h4>
    <h5>Review each team members progress</h5>
      <h5>Address helps to achieve the current <b>sprint goal</b></h5>
      <h5>Access past records in the <b>current sprint</b> for easy and qualitative <b>review</b></h5>
      <h5>↓Solidify your status as an <b>Agile</b> pro today↓</h5>
    <b-form>
      <b-button id="signUpBtn" href="http://localhost:3000/auth/github" variant="alert">Sign Up with Github</b-button>
    </b-form>
  </div>
</template>

<script>
import App from '../App'

let data = App.teamsData
console.log("data:", data)
export default {
  name: 'SignUp',
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
  color: #346951;
}

#signUpBtn {
  margin-top: 20px;
  border: 1px solid black;
  font-size: 24px;
}

#signUpBtn:active {
  background-color: #fffde6;
}
.signUp {
  border: 5px double #28284e;
  border-radius: 5px;
  padding: 5%;
  margin: 5%;
  
}
.signUp:hover {
  border: 5px double #284e37;
}
</style>
