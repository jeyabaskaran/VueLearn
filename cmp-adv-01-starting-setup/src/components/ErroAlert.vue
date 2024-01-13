<template>
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<script>
export default {};
</script>

<style scoped>
dialog {
  top: 10vh;
  left: 30%;
  margin: 0;
  padding: 2rem;
  background-color: aqua;
  color: black;
  width: 50%;
}
</style>
