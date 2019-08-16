<template>
  <div class="container w-50">
    <form @submit.prevent="marks">
      <div class="form-group">
        <label for="main1">Main Subject 1</label>
        <input
          v-model.number="main1"
          type="text"
          class="form-control"
          placeholder="Enter marks,if failed enter 0"
          required
        />
      </div>
      <div class="form-group">
        <label for="main2">Main Subject 2</label>
        <input
          type="number"
          class="form-control"
          placeholder="Enter marks,if failed enter 0"
          required
          v-model.number="main2"
        />
      </div>
      <div class="form-group">
        <label for="main3">Main Subject 3</label>
        <input
          type="number"
          class="form-control"
          placeholder="Enter marks,if failed enter 0"
          required
          v-model.number="main3"
        />
      </div>
      <div class="form-group">
        <label for="main4">Main Subject 4</label>
        <input
          type="number"
          class="form-control"
          placeholder="Enter marks,if failed enter 0"
          required
          v-model.number="main4"
        />
      </div>
      <div class="form-group">
        <label for="el1">Elective Subject 1</label>
        <input
          type="number"
          class="form-control"
          placeholder="Enter marks,if failed enter 0"
          required
          v-model.number="el1"
        />
      </div>
      <div class="form-group">
        <label for="el2">Elective Subject 2</label>
        <input
          type="number"
          class="form-control"
          placeholder="Enter marks,if failed enter 0"
          required
          v-model.number="el2"
        />
      </div>

      <div class="form-group">
        <label for="ll1">Lab Subject 1</label>
        <input
          type="number"
          class="form-control"
          placeholder="Enter marks,if failed enter 0"
          required
          v-model.number="lm1"
        />
      </div>
      <div class="form-group">
        <label for="ll2">Lab Subject 2</label>
        <input
          type="number"
          class="form-control"
          placeholder="Enter marks,if failed enter 0"
          required
          v-model.number="lm2"
        />
      </div>
      <center>
        <input type="submit" value="Submit" />
      </center>
    </form>
    <p v-if="total!=0" class="m-3">Your SGPA : {{total}}</p>
    <p></p>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      main1: null,
      main2: null,
      main3: null,
      main4: null,
      el1: null,
      el2: null,
      lm1: null,
      lm2: null,
      mainMarks: [],
      electiveMarks: [],
      labMarks: []
    };
  },
  methods: {
    marks: function() {
      this.mainMarks.push(this.main1);
      this.mainMarks.push(this.main2);
      this.mainMarks.push(this.main3);
      this.mainMarks.push(this.main4);
      this.electiveMarks.push(this.el1);
      this.electiveMarks.push(this.el2);
      this.labMarks.push(this.lm1);
      this.labMarks.push(this.lm2);
    },
    grade: function(g) {
      switch (true) {
        case g < 40:
          return 0;
        case g >= 40 && g < 45:
          return 4;
        case g >= 45 && g < 50:
          return 5;
        case g >= 50 && g < 60:
          return 6;
        case g >= 60 && g < 70:
          return 7;
        case g >= 70 && g < 80:
          return 8;
        case g >= 40 && g < 90:
          return 9;
        case g >= 90 && g <= 100:
          return 10;
      }
    }
  },
  computed: {
    total: function() {
      var mm = this.mainMarks;
      var em = this.electiveMarks;
      var lm = this.labMarks;
      var grades = [];
      mm.forEach(m => {
        grades.push(this.grade(m) * 4);
      });
      em.forEach(m => {
        grades.push(this.grade(m) * 3);
      });
      lm.forEach(m => {
        grades.push(this.grade(m) * 2);
      });
      var sum = 0;
      grades.forEach(g => {
        sum += g;
      });
      var sgpa = sum / 26;
      if (String(sgpa).length > 4) {
        sgpa = String(sgpa);
        return sgpa.slice(0, 4);
      } else {
        return sgpa;
      }
    }
  }
};
</script>

<style>
</style>