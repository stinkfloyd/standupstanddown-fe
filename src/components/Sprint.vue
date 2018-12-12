<template>
  <div class="sprint">
     <div class="sprintCardDiv">
        <b-alert show>Daily Stand UP Card for Team {Team} Date {Date} Members{#}</b-alert>
       <b-card title="Team: "
            sub-title="Stand Up Card for {date}">
        <p class="card-text">
            Current sprint goal: <b-form-textarea v-model="sprintGoalText" type="text" ></b-form-textarea>
        </p>
         <div class="card-text member">
            Team Member 1: 
            <br />
            Yesterday: <b-form-textarea v-model="member1YesterdayText" class="memberInputField" type="textarea"></b-form-textarea>
            Today: <b-form-textarea v-model="member1TodayText" class="memberInputField" type="textarea"></b-form-textarea>
            Helps: <b-form-textarea v-model="member1HelpsText" class="memberInputField" type="textarea"></b-form-textarea>
        </div>
         <div class="card-textarea member">
            Team Member 2: 
             <br />
            Yesterday: <b-form-textarea v-model="member2YesterdayText" class="memberInputField" type="textarea"></b-form-textarea>
            Today: <b-form-textarea v-model="member2TodayText" class="memberInputField" type="textarea"></b-form-textarea>
            Helps: <b-form-textarea v-model="member2HelpsText" class="memberInputField" type="textarea"></b-form-textarea>
        </div>
         <div class="card-textarea member">
            Team Member 3: 
             <br />
            Yesterday: <b-form-textarea v-model="member3YesterdayText" class="memberInputField" type="textarea"></b-form-textarea>
            Today: <b-form-textarea v-model="member3TodayText" class="memberInputField" type="textarea"></b-form-textarea>
            Helps: <b-form-textarea v-model="member3HelpsText" class="memberInputField" type="textarea"></b-form-textarea>
        </div>
        <div>Notes:
        <b-form-textarea v-model="notes" type="textarea" class="sprintCardNotes"></b-form-textarea>
        </div>
        <a href="#"
           class="card-link">Top of Card</a>
        <b-button id="sprintCardUpBtn"  variant="dark">Update Card</b-button>
    </b-card>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Sprint',
  data () {
    return {
      sprintGoalText: '',
      member1YesterdayText: '',
      member1TodayText: '',
      member1HelpsText: '',
      member2YesterdayText: '',
      member2TodayText: '',
      member2HelpsText: '',
      member3YesterdayText: '',
      member3TodayText: '',
      member3HelpsText: '',
      notes:''
     
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

.sprint:hover {
  border: 5px double #35695e;
}

.sprintCardDiv {
  text-align: left;
 
}

.member {
  border-bottom: 1px dashed black;
  margin-bottom: 2%;
}

.memberInputField {
  width: 50%;
  margin: 2%;
}

#sprintCardUpBtn {
  margin: 2% 2% 2% 33%;
  background-color:#40af97;
}

#sprintCardUpBtn:active {
  background-color:#41685f;
}
</style>