<template>
  <div class="d-flex flex-column mb-3">
    <form @submit.prevent="change" class="form-group mt-5">
      <label for="main">Enter number of main subjects:</label>
      <input class="form-control" type="text" name id="n_main" v-model.number="sub.main" required />

      <label for="elective">Enter number of elective subjects:</label>
      <input
        class="form-control"
        type="text"
        name
        id="n_elective"
        v-model.number="sub.elective"
        placeholder="Enter 0 if none"
      />

      <label for="lab">Enter number of Lab subjects:</label>
      <input
        type="text"
        class="form-control"
        name="n_lab"
        id="n_lab"
        v-model.number="sub.lab"
        required
      />
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "Sem",
  computed: mapGetters(["subject", "getPage"]),
  data() {
    return {
      sub: {
        main: null,
        elective: null,
        lab: null
      }
    };
  },
  methods: {
    ...mapActions(["setSub", "setPage"]),
    change: function() {
      this.setPage("calc");
      var prev = {
        main: this.sub.main,
        ele: this.sub.elective,
        lab: this.sub.lab
      };
      var main = [];
      var ele = [];
      var lab = [];

      this.sub.elective = [...Array(this.sub.elective).keys()];
      this.sub.main = [...Array(this.sub.main).keys()];
      this.sub.lab = [...Array(this.sub.lab).keys()];

      this.sub.main.forEach(s => {
        main.push(`main${s}`);
      });
      this.sub.elective.forEach(s => {
        ele.push(`elective${s}`);
      });
      this.sub.lab.forEach(s => {
        lab.push(`lab${s}`);
      });
      var subj = {
        main: {
          index: this.sub.main,
          key: main
        },
        elective: {
          index: this.sub.elective,
          key: ele
        },
        lab: {
          index: this.sub.lab,
          key: lab
        }
      };
      if (this.sub.elective == 0) {
        subj["elective"] = {
          index: [],
          key: []
        };
      }

      this.setSub(subj);
      this.sub.main = prev.main;
      this.sub.elective = prev.ele;
      this.sub.lab = prev.lab;
    }
  }
};
</script>

<style>
.form-group {
  width: 50%;
  align-self: center;
  display: flex;
  flex-direction: column;
}

.form-group button {
  margin-top: 20px;
  align-self: center;
}
</style>