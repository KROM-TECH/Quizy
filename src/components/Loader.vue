<template>
<div class="center">
        <div class="jumping-dots-loader">
          <span></span>
          <span></span>
          <span></span>
      </div>
      <h3>loading...</h3>
      </div>
</template>

<script>
export default {};
</script>

<style scoped>
h3, .h3 {
    font-size: 1.25rem;
    font-style: italic;
    font-weight: 700;
}
.center{
     display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
    height: 100vh;
    z-index: 100;
}

.jumping-dots-loader {
    display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
    width: 100vw;
    height: 100px;
    border-radius: 100%;
    position: relative;
    margin: 0 !important;
    z-index: 1000;
}

.jumping-dots-loader span {
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background-color: rgba(28, 39, 60, 0.4);
    margin: 35px 5px;
}
</style>