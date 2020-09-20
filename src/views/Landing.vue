<template>
  <div class="body">
      <h1>Quizy</h1>
      <p><i>What We Offer</i></p>
      <ul>
        <li>Create Quiz</li>
        <li>Monetize your Quiz</li>
        <li>Set Prices for Quizes</li>
        <li>Track Your Quizes</li>
        <li>Play Quizes Anonymously and still get paid</li>
        <li>View High Scores</li>
        <li>And so much more</li>
      </ul>
      <div>
        <button> <router-link to="login">Create an Account</router-link> </button>
        <button>Tell a Friend</button>
      </div>
    </div>
</template>

<script>
  export default {};

  
</script>

<style scoped>
a{
  text-decoration: none;
  color: #6045ec;
}
a:hover{
  color: #fff;
}
p{
  font-size: 1.5rem;
  font-weight: 300;
}

button{
     padding: 10px;
    margin: 1rem;
     background-color: rgba(96, 69, 236, 0.2);
    background-image: none;
    border-color: rgba(96, 69, 236, 0);
    border: none;
    color: #6045ec;
    outline: none;
    cursor: pointer;
    font-size: 0.875rem;
    line-height: 1;
    font-weight: 400;
    box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
        border-radius: 0.1875rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
button:hover{
  background-color:#6045ec;
  color: #fff;
}
  .body {
    text-align: center;  
    padding: 0rem 1rem !important;  
  }
  div h1 {
    font-size: 4rem;
    font-family: emoji;
    margin-bottom: 1rem;
    letter-spacing: 0.8rem;
    font-variant: all-petite-caps;
    font-style: italic;
  }

  ul {
    list-style: none;
    letter-spacing: 1px;
    font-size: 1.2rem;
  }
  li{
    border-radius: 40px;
    background-color: #ecf0f3;
    box-shadow: 13px 13px 20px #cbced1,
                -13px -13px 20px #ffffff;
    margin: 0.6rem 0rem;
    padding: 8px;
    border: 1.7px solid #ddd;
  }
  li:hover{
        box-shadow: inset 13px 13px 20px #cbced1,
                inset -13px -13px 20px #ffffff;
  }
  li:last-child {
    font-style: italic;
    margin-top: 0.9rem;
    font-size: larger;
    font-weight: 600;
    background-color: #75c5c557;
  }
</style>
