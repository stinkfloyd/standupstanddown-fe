<template>
  <div class="sprintCardDiv">
     <b-card class="sprintDailyCard" no-body
         style="max-width: 66%;"
        img-src="https://dummyimage.com/200x100/8a48c7/fff"
        img-alt="Image"
        img-top>
    <h4 slot="header">{{standup.username}}</h4>
    <b-card-body>
        <p class="card-text">

        </p>
    </b-card-body>
    <b-list-group flush>
        <b-list-group-item> <br>
        Yesterday:
        <b-form-textarea
          v-model="member1YesterdayText"
          class="memberInputField"
          type="textarea"
        ></b-form-textarea></b-list-group-item>
        <b-list-group-item> <br>Today:
        <b-form-textarea
          v-model="member1TodayText"
          class="memberInputField"
          type="textarea">
          </b-form-textarea>
          </b-list-group-item>
        <b-list-group-item> <br>Helps:
        <b-form-textarea
          v-model="member1HelpsText"
          class="memberInputField"
          type="textarea">
        </b-form-textarea>
        </b-list-group-item>
        <b-list-group-item>
          <b-button>Submit Stand Up</b-button>
        </b-list-group-item>
       </b-list-group>
     </b-card>
  </div>
</template>

<script>

  export default {
    name: 'StandUpCard',
    // this is receiving props from Sprint.vue
    props: [''],
    data: () => {
      return {
        reactive: true,
      }
    },
    methods: {
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.sprintCardDiv {
  text-align: left;
}

</style>
