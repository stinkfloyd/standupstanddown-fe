const SprintsStore = {

  data: {
    sprints: [],
  },

  methods: {

    //this data will be present when the el is mounted. gets the team's sprints and puts it in the sprints property.
    mounted() {
      fetch("")
        .then(response => response.json())
        .then((data) => {
          this.sprints = data;
        })
    },

  }
};

export default SprintsStore;
