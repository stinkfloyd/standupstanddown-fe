const TeamsStore = {
  data: {
    usersTeams: [],
  },
  methods: {

    //this data will be present when the el is mounted. gets the teams the user is a part of and puts them in the usersTeams property.
    mounted() {
      fetch("")
        .then(response => response.json())
        .then((data) => {
          this.usersTeams = data;
        })
    },

  }
};

export default TeamsStore;
