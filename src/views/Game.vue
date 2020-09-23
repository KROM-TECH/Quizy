<template>
<div class="div">
  <div class="card login-div">
    <h1>Loading...</h1>

  </div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
.div{
  display: flex;
  justify-content: center;
  align-items: center;
}


  .login-div {
        padding: 1rem;
    border-radius: 20px;
    background: #ecf0f3;
    box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #ffffff;
    margin: 1rem 1rem !important;
    display: flex;
    text-align: center;
    flex-direction: column;
    max-width:50rem;
    /* flex-basis: 100rem; */
  }

</style>
