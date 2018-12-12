var jwtDecode = require('jwt-decode')

const TeamsStore = {
  data: {
    //store the id of the team being edited here on click of the accociated button.
    //then you can render the edit form conditionally based on the value's presence.
    teamToEdit: null,
    usersTeams: [],
  },

  methods: {
    //this data will be present when the el is mounted. gets the teams the user is a part of and puts them in the usersTeams property.
    // mounted() {
    //   fetch("")
    //     .then(response => response.json())
    //     .then((data) => {
    //       this.usersTeams = data;
    //     })
    // },

    createTeam: async function (teamToAdd){
      console.log("createTeam: ", teamToAdd)
      const tokenDecoded = jwtDecode(document.cookie.split(";")[1].split('=')[1])
      console.log("tokenDecoded", tokenDecoded)
      const body = {
        name: teamToAdd,
        creator_id: tokenDecoded.id,
      }
      await fetch("http://localhost:3000/teams", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
      })
      .then((response) => {
        if (response.status === 200) {
          // push that stuff
          TeamsStore.data.usersTeams = teamToAdd
          console.log(TeamsStore.data.usersTeams)
        } else {
          // something bad happened
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
