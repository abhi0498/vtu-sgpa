<template>
  <div id="app">
    <Navbar />
    <Sem v-if="getPage=='sem'" />
    <!-- <div v-if="click" class="sem m-2 w-50">
      <form @submit.prevent="change">
        <label for="sem">Select you semester</label>
        <select class="custom-select my-1 mr-sm-2" id="sem" v-model.number="sem">
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="3">Four</option>
          <option value="3">Five</option>
          <option value="3">Six</option>
          <option value="3">Seven</option>
        </select>
        <center>
          <button class="m-2" v-if="sem!=null" @click="clicked">Submit</button>
        </center>
      </form>
    </div>-->
    <Form v-if="getPage=='calc'" />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Sem from "./components/Sem";
import { mapGetters } from "vuex";

export default {
  name: "app",
  components: {
    Navbar,
    Form,
    Footer,
    Sem
  },
  data() {
    return {
      sem: null,
      click: true
    };
  },
  methods: {
    clicked: function() {
      this.click = false;
      console.log(this.sem);
    }
  },
  computed: mapGetters(["getPage"])
};
</script>

<style>
</style>
