const jwtDecode = require('jwt-decode')

const StandUpsStore = {
  data: {


  },

  methods: {
    /**
     * Get one user's info based on token id for component
     */
    async getSprintInfo(sprintId) {
      const tokenDecoded = jwtDecode(document.cookie.split('=')[1])
      let creatorId = tokenDecoded.id
      await fetch(`http://localhost:3000/standUps/${sprintId}`, {
        credentials: 'include',
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then(async (response) => {
        let sprintData = await response.json()
        console.log("get one user store info:", sprintData)
        return sprintData
      })
    },

  },
}

export default StandUpsStore