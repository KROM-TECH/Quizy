<template>
  <div class="body">
    <div class="login-div">
      <h1>Quizy</h1>
      <form>
      <div class="username"><input type="username" class="user-input" placeholder="Username"></div>
      <div class="password"><input type="password" class="user-input" placeholder="Password"></div>

      <button class="btn">Login</button>
      </form>

      <div>
        <p>Create an acc</p>
        <p>Forget Password</p>
      </div>


    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h1{
   font-size: 3.5rem;
    font-family: emoji;
    margin-bottom: 1rem;
    letter-spacing: 0.8rem;
    font-variant: all-petite-caps;
    font-style: italic;
}
  .body {
    text-align: center;  
    padding: 1rem 1rem !important;  
  }
.btn{
  outline:none;
  border:none;
  cursor:pointer;
  font-weight: 700;
  padding: 1rem;
    background-color: #ecf0f3;
    box-shadow: 13px 13px 20px #cbced1,
                -13px -13px 20px #ffffff;
  border: 1px solid;
  border-radius: 10px;
}
form{
  padding: 1rem !important;
}

form input{
  border: none;
  width: 100%;
  outline: none;
  background: none;
  font-size: 18px;
  color: #555;
  margin: 20px 10px 20px 5px;
}

.username, .password{
  text-align: start;
  padding:0rem 1rem ;
  max-width: 30rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  border-radius: 25px;
  box-shadow: inset 8px 8px 8px #cbced1,
              inset -8px -8px 8px #ffffff;
}
.login-div{
  height: 35rem;
  border-radius: 40px;
  background: #ecf0f3;
     box-shadow: 13px 13px 20px #cbced1,
                -13px -13px 20px #ffffff;
}

.title{
  text-align: center;
}
</style>