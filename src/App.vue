<template>
  <div id="app">
    <Navbar />
    <Form />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Form from "./components/Form";
export default {
  name: "app",
  components: {
    Navbar,
    Form
  }
};
</script>

<style>
</style>
