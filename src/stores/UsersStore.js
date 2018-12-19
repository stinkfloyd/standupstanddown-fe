const jwtDecode = require('jwt-decode')

const UsersStore = {
  data: {
    teamToEdit: null,
    usersTeams: [],
    test: "test",
    user: {},
  },

  methods: {

    /**
     * Get one user's info based on token id for component
     */
    async getUserInfo() {
      const tokenDecoded = jwtDecode(document.cookie.split('=')[1])
      let creatorId = tokenDecoded.id
      await fetch(`http://standup-be.herokuapp.com/users/${creatorId}`, {
        credentials: 'include',
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then(async (response) => {
        let user = await response.json()
        console.log("get one user store info:", user)
        return user
      })
    },

  },
}


export default UsersStore