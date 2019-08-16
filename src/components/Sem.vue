<template>
  <div>
    <form @submit.prevent="change">
      <label for="sem">Select you semester</label>
      <select class="custom-select my-1 mr-sm-2" id="sem" v-model.number="sem">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="3">Four</option>
        <option value="3">Five</option>
        <option value="3">Six</option>
        <option value="3">Seven</option>
      </select>
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Sem",
  data() {
    return {
      sem: null
    };
  },
  methods: {
    change: function() {
      console.log(this);
    }
  }
};
</script>

<style>
</style>