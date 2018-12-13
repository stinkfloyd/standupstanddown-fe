<template>
  <div class="calendar">
    <h1>Sprint Calendar View</h1>
    <div>
     <b-form-group label="Current Sprint for {Team}">
      <b-form-radio-group id="btnradios2"
                          buttons
                          button-variant="outline-dark"
                          size="lg"
                          v-model="selected"
                          :options="options"
                          name="radioBtnOutline" />
    </b-form-group>

    </div>
  </div>
</template>

<script>
let startDate = "Sprint Day 1"
let endDate = "Sprint End"
export default {
  name: 'Home',
  data: () => {
    return {
   
      selected: 'radio1',
       
      options: [
        { text: startDate, value: "radio1", disable: false },
        { text: 'Day 2', value: 'radio2', disable: false },
        { text: 'Day 3', value: 'radio3', disabled: false },
        { text: 'Day 4', value: 'radio4', disable: false },
        { text: endDate, value: 'radio5', disable: false }
      ]
     
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
.hello {
  border: 5px double #28284e;
  border-radius: 5px;
  padding: 10px;
  margin: 5%;
}
</style>
