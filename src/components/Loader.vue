<template>
        <div class="jumping-dots-loader">
          <span></span>
          <span></span>
          <span></span>
      </div>
</template>

<script>
export default {};
</script>

<style scoped>

.jumping-dots-loader {
    display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
    width: 100vw;
    height: 100vh;
    border-radius: 100%;
    position: relative;
    margin: 0 !important;
}

.jumping-dots-loader span {
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background-color: rgba(96, 69, 236, 0.9);
    margin: 35px 5px;
}
</style>