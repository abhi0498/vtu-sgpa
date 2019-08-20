<template>
  <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand" @click="change" href="/">SGPA Calculator</a>
  </nav>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Navbar",
  methods: {
    ...mapActions(["setPage"]),
    change: function() {
      this.setPage("sem");
    }
  }
};
</script>

<style>
</style>