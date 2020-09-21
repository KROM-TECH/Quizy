<template>
  <div class="card login-div">
    <h1>Quizy</h1>
    <form>
      <div class="form-group">
                      <label for="username">Username</label>
                      <input type="username" class="form-control" id="username" placeholder="Username">
                    </div>
      <div class="form-group">
                      <label for="password">Password</label>
                      <input type="password" class="form-control" id="password" placeholder="Password">
                    </div>
     

      <button class="btn btn-outline-primary btn-fw">Login</button>

        <div class="flex mt-3">
      <p>Create an acc</p>
      
      <p>Forget Password</p>
    </div>
    </form>

  
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
p{
  cursor: pointer;
}
  .form {
    width: fit-content;
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size:10px;
    color:#a0a0a0
    
  }
  h1 {
    font-size: 3.5rem;
    font-family: emoji;
    margin-bottom: 1rem;
    letter-spacing: 0.8rem;
    font-variant: all-petite-caps;
    font-style: italic;
    text-align: center;
  }
  
  form {
    padding: 1rem !important;
    margin: 0 auto !important;
  }


  .login-div {
        padding: 1rem;
    height: 35rem;
    border-radius: 40px;
    background: #ecf0f3;
    box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #ffffff;
    margin: 1rem 1rem !important;
    display: flex;
    text-align: center;
    flex-direction: column;
  }
label{
  text-align: start;
}
.form-control:focus{
    border-color: #6045ec;
}
</style>
