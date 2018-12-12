<template>
  <div class="signUp">
    In which we detail the App and why this person is signing up
    <b-form>
      <b-button id="signUpBtn" href="http://localhost:3000/auth/github" variant="alert">Sign Up with Github</b-button>
    </b-form>
  </div>
</template>

<script>
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
  color: #42b983;
}

#signUpBtn {
  margin-top: 20px;
  border: 1px solid black;
}
.signUp {
  border: 5px double #28284e;
  border-radius: 5px;
  padding: 10px;
  margin: 5%;
}
</style>
