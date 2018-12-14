console.lo

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

  }
}

export default SprintStore
