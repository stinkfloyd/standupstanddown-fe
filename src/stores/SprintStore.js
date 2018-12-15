
const SprintStore = {

  data: {
    teamName: "",
    sprintInfo: [],
  },

  methods: {

    async getSprint(id, name) {
     return fetch(`http://localhost:3000/sprints/${id}`, {
        credentials: 'include',
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then(async(response) => {
        console.log("response: ", response)
          let resJson = await response.json()
          console.log("resJson: ", resJson)
          console.log("resJson[0]: ", resJson[0])
          SprintStore.data.sprintInfo.push(resJson[0])
          SprintStore.data.teamName = name
          console.log("SprintStore.data.sprintInfo: ", SprintStore.data.sprintInfo)
          console.log("resJson: ", resJson)
          return resJson

      })

    },

    async postSprint(team_id, sprint_length, sprint_goal) {
      console.log("in the sprintstore postSprint rte:", team_id, sprint_length, sprint_goal)
      let postBody = { sprint_length, sprint_goal}
      await fetch(`http://localhost:3000/sprints/${team_id}`, {
        credentials: 'include',
        method: "POST",
        body: postBody,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      // getting an error back for 400 CORS header...
      .then(async (response) => {
        console.log(response)
        }) 
    },

  }
}

export default SprintStore
