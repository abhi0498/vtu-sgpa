<template>
  <div class="container w-50">
    <form @submit.prevent="marks">
      <div v-for="i in subject.main.index" :key="subject.main.key[i]" class="form-group">
        <label for="main1">Main Subject {{i+1}}</label>
        <input
          v-model="sub.main[i]"
          type="text"
          class="form-control"
          placeholder="Enter marks,if failed enter 0"
          required
        />
      </div>
      <!-- <div class="form-group">
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
      </div>-->
      <div v-for="i in subject.elective.index" :key="subject.elective.key[i]" class="form-group">
        <label for="el">Elective Subject {{i+1}}</label>
        <input
          v-model="sub.elective[i]"
          type="text"
          class="form-control"
          placeholder="Enter marks,if failed enter 0"
          required
        />
      </div>
      <!-- <div class="form-group">
        <label for="el2">Elective Subject 2</label>
        <input
          type="number"
          class="form-control"
          placeholder="Enter marks,if failed enter 0"
          required
          v-model.number="el2"
        />
      </div>-->

      <div v-for="i in subject.lab.index" :key="subject.lab.key[i]" class="form-group">
        <label for="lab">Lab Subject {{i+1}}</label>
        <input
          v-model="sub.lab[i]"
          type="text"
          class="form-control"
          placeholder="Enter marks,if failed enter 0"
          required
        />
      </div>
      <!-- <div class="form-group">
        <label for="ll2">Lab Subject 2</label>
        <input
          type="number"
          class="form-control"
          placeholder="Enter marks,if failed enter 0"
          required
          v-model.number="lm2"
        />
      </div>-->
      <center>
        <input type="submit" value="Submit" />
      </center>
    </form>
    <p v-if="total[0]!=0" class="m-2">Your SGPA : {{total[0]}}</p>
    <p v-if="total[1]>0" class="mb-5">Your percentage: {{total[1]}}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Form",
  data() {
    return {
      main: [],
      elective: [],
      lab: [],
      sub: {
        main: [],
        elective: [],
        lab: [],
        sgpa: null
      }
    };
  },
  methods: {
    marks: function() {
      console.log(this.subject);
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
    ...mapGetters(["subject"]),
    total: function() {
      var main = this.sub.main;
      var ele = this.sub.elective;
      var lab = this.sub.lab;
      var grades = [];

      main.forEach(m => {
        grades.push(this.grade(m) * 4);
      });
      ele.forEach(m => {
        grades.push(this.grade(m) * 3);
      });
      lab.forEach(m => {
        grades.push(this.grade(m) * 2);
      });
      if (this.subject.main.index.length) {
        var total_main = this.subject.main.index.length * 4;
        var total_ele = this.subject.elective.index.length * 3;
        var total_lab = this.subject.lab.index.length * 2;
        var total_credits = total_main + total_ele + total_lab;
      }
      var sum = 0;

      grades.forEach(m => {
        sum += m;
      });

      console.log(sum);
      var sgpa = sum / total_credits;
      var per = (sgpa - 0.75) * 10;
      if (String(sgpa).length > 4) {
        sgpa = String(sgpa);
        per = String(per);
        return [sgpa.slice(0, 4), per.slice(0, 4)];
      } else {
        return [sgpa, per];
      }
    }
  }
};
</script>

<style>
input[type="submit"] {
  width: 150%;
  margin-bottom: 20px;
}
form {
  margin-bottom: 100px;
}
</style>