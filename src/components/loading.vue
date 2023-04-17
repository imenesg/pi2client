<script setup></script>

<template>
  <div
    style="width: 100vw; height: 100vh"
    class="bg-opacity-75 bg-dark position-fixed top-0 start-0 d-flex justify-content-center align-items-center"
  >
    <i
      style="
        animation-name: spinner-border;
        animation-duration: 1.25s;
        animation-iteration-count: infinite;
      "
      class="bx bxs-truck fs-1 text-success"
    ></i>
  </div>
</template>

<style scoped>
@keyframes spinner-border {
  to {
    transform: rotate(360deg);
  }
}
</style>
