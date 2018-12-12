<template>
  <div class="sprint">
    <h1>Sprint Page</h1>
     <b-alert show>Try implementing a carousel that loads the Stand Up for each day of the sprint </b-alert>
     <p>All the stuff goes in here</p>
  </div>
</template>

<script>
export default {
  name: 'Sprint',
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
.sprint {
  border: 5px double #28284e;
  border-radius: 5px;
  padding: 10px;
  margin: 5%;
}
</style>