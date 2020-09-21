<template>
  <div class="card login-div">
    <h1>Quizy</h1>
    <form>
      <div class="form">
        <label for="username">Username</label>
        <input class="username user-input" type="username" placeholder="Username" />
      </div>
      <div class="form">
        <label for="password">password</label>
        <input class="password user-input" type="password" placeholder="Password" />
      </div>

      <button class="btn">Login</button>

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
  label {
    display: block;
    text-align: start;
    margin-bottom: 0.7rem;
    font-weight: 500;
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
  .body {
  }
  .btn {
    color: #220e8a;    
    font-size: 0.975rem;
    line-height: 1;
    font-weight: 400;
    box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.875rem 1.5rem;
    border-radius: 0.1875rem;
    border-color: #6045ec;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  .btn:hover{
    background-color: #6045ec ;
    color: white;
  }
  form {
    padding: 1rem !important;
    margin: 0 auto !important;
  }

  form input {
    border: 1px solid #eeeef0;
    font-weight: 400;
    font-size: 1rem;
    box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff;
    background: transparent;
    height: 44px;
    border-radius: 15px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    padding: 0.375rem 1.375rem;
    margin-bottom: 20px;
    outline: none;
  }

  .login-div {
    height: 35rem;
    border-radius: 40px;
    background: #ecf0f3;
    box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #ffffff;
    text-align: center;
    margin: 1rem 1rem !important;
    display: flex;
    flex-direction: column;
  }

  .title {
    text-align: center;
  }
</style>
