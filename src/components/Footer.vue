<template>
  <footer>
    Created using
    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
      <path
        fill="#000000"
        d="M2,3H5.5L12,15L18.5,3H22L12,21L2,3M6.5,3H9.5L12,7.58L14.5,3H17.5L12,13.08L6.5,3Z"
      />
    </svg>
    by
    <a title="Go to github" href="https://github.com/abhi0498" target="_blank">abhi</a>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: aliceblue;
  text-align: center;
  margin-top: 20px;
}
a {
  text-decoration: none;
  color: black;
}
</style>