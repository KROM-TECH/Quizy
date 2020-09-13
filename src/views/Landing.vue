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
        <button>Create an Account</button>
        <button>Tell a Friend</button>
      </div>
    </div>
</template>

<script>
  export default {};

  
</script>

<style scoped>
p{
  font-size: 1.5rem;
  font-weight: 300;
}

button{
     padding: 10px;
    margin: 1rem;
    background-color: transparent;
    border: 1px solid #15a2abb0;
    font-size: 0.9rem;
    border-radius: 10px;
    color: #15a2abb0;
    outline: none;
}
button:hover{
  background-color:#15a2abb0;
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
