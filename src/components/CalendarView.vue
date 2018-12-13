<template>
  <div class="calendar">
    <h1>Sprint Calendar View</h1>
    <div>
     <b-form-group label="Button style radios with <code>outline-primary</code> variant and size <code>lg</code>">
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
export default {
  name: 'Home',
  data: () => {
    return {
      string: "Hi there",
      selected: 'radio1',
       
      options: [
        { text: 'data', value: "radio1", disable: false },
        { text: 'Radio 3', value: 'radio2', disable: false },
        { text: 'Radio 3', value: 'radio3', disabled: false },
        { text: 'Radio 4', value: 'radio4', disable: false }
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
