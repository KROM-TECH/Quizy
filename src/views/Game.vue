<template>
<div class="div">
  <div class="card login-div">
    <p>Lorem ipsum dolor sit 
      amet consectetur adipisicing elit. M
      ollitia laborum quas doloremque, architecto cum,
       quasi iste et, laboriosam pariatur numquam inventore ne
       que delectus vitae beatae provident! Voluptas porro expedita eaque.</p> 
  </div>
  <div class="center mt-2"><div class="badge badge-dark">view Image</div></div>
  <div class="anwsers">
    <button type="button" class="btn btn-outline-dark btn-lg mt-3"> Answer one</button>
    <button type="button" class="btn btn-outline-dark btn-lg mt-3">Answer Two</button>
    <button type="button" class="btn btn-outline-dark btn-lg mt-3">Answer Three</button>
    <button type="button" class="btn btn-outline-dark btn-lg mt-3">Answer Four</button>
  </div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
.badge{
  cursor: pointer;
}
.btn{
  height: 48px;
  width: 230px;
  padding:1rem !important;
}
.anwsers{
  margin-top: 50px;
  max-width: 500px;
   display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
@media screen and (max-width:600px) {
  .anwsers{
    justify-content: center;
  }
  .btn{
    width:300px
  }
}
p{
  font-size: 1.3rem

}
.div{
  display: flex;
  flex-direction: column;
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
    width: 100%;
    height: fit-content;
    max-width:500px;
  }

</style>
