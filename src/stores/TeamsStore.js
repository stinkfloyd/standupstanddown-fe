var jwtDecode = require('jwt-decode')

const TeamsStore = {
  data: {
    //store the id of the team being edited here on click of the accociated button.
    //then you can render the edit form conditionally based on the value's presence.
    teamToEdit: null,
    usersTeams: [],
    test: "test",
  },

  methods: {
    //this data will be present when the el is mounted. gets the teams the user is a part of and puts them in the usersTeams property.
    refreshUsersTeams: async function(){
      this.loading = true
      this.usersTeams = await TeamsStore.methods.getTeams()
      console.log("profile.vue: getTeams: ", this.usersTeams)
      this.loading = false
    },

    async getTeams() {
      return fetch("http://localhost:3000/teams", {
        credentials: 'include',
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then(async (response) => {
        let resJson = await response.json()
        TeamsStore.data.usersTeams = resJson
        console.log("resJson: ", resJson)
        return resJson
      })
    },

    async createTeam(teamToAdd) {
      console.log("createTeam: ", teamToAdd)
      const tokenDecoded = jwtDecode(document.cookie.split('=')[1])
      console.log("tokenDecoded", tokenDecoded)
      const body = {
        name: teamToAdd,
        creator_id: tokenDecoded.id,
      }
      await fetch("http://localhost:3000/teams", {
        credentials: 'include',
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
      })
      .then(async (response) => {
        let resJson = await response.json()
        if (response.status === 200) {
          // push that stuff
          // TeamsStore.data.usersTeams.push(response.body
          console.log("resJson: ", resJson)
          console.log("resJson.name: ", resJson.name)
          return resJson.name
        } else {
          // something bad happened
          console.log("response; ", response)
        }
      })
    },

    //
    // deleteTeam(id, index) {
    //   fetch("" + id, {
    //     method: "DELETE"
    //   })
    //   .then(() => {
    //     this.usersTeams.splice(index, 1);
    //   })
    // },
    //
    // editTeam(team) {
    //   fetch("" + team.id, {
    //     method: "PATCH",
    //     body: JSON.stringify(team),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //   .then(() => {
    //     this.editFriend = null;
    //   })
    // },



  }
};

export default TeamsStore;
