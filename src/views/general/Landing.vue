<template>
  <div style="overflow:hidden">
    <header class="p-1 d-flex justify-content-between align-items-center">
      <img src="@/assets/logo.png" alt="" class="img " />
      <div class="d-flex col-5 justify-content-between align-items-center d-md-none">
        <p class="text mx-3">Home</p>
        <p class="text act mx-3">Quiz</p>
        <p class="text act mx-3">Game</p>
        <p class="text act mx-3">Social Media</p>
      </div>

      <a href="/login">
        <button class="btn bg-pry col-12" style="width:6rem">Login</button>
      </a>
    </header>
    <main class="d-flex justify-content-md-center background">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>

      <div
        class="col-6 d-flex flex-column align-items-start justify-content-center align-items-md-center ml-5 ml-sm-0 "
      >
        <h1>Create and Share Quizzes</h1>
        <h4>
          Have fun <br />
          while <span class="line">Learning</span> Earning
        </h4>
        <a href="/signup"> <button class="btn bg-pry" style="width:8rem">Signup</button></a>
      </div>
      <img src="@/assets/hero.png" class="img-fluid p-0 col-6 d-md-none" alt="hero" />
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  color: inherit;
}
h4 {
  font-size: 28px;
  font-weight: 550;
}
h1 {
  font-size: 6rem;
}
@media (max-width: 576px) {
  main {
    background-image: url("../../assets/hero.png");
    background-attachment: fixed;
    background-position: center;
    background-size: contain;
  }
  h1 {
    font-size: 3rem;
    text-align: center;
  }
  h4 {
    /* font-size: 3rem; */
    text-align: center;
  }
  .ml-sm-0 {
    margin-left: 0px !important;
  }
  .justify-content-md-center {
    justify-content: center !important;
  }
  .align-items-md-center {
    align-items: center !important;
  }
}
.line {
  text-decoration: line-through;
}
.hero_img {
  max-height: 50rem;
  width: auto;
  padding: 0px !important;
}
.text {
  font-size: 19px;
  font-weight: 600;
  color: #2f2b94;
}
.act {
  color: #2f2b9488;
}
.btn {
  font-size: 1.2rem;
  padding: 10px;
  font-weight: 600;
  color: white;
  height: 3rem;
}
.img {
  height: 55px;
  width: auto;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }
  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}

.background {
  position: relative;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  background: #f0eafa;
  overflow: hidden;
}
.background li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(60, 44, 105, 0.2);
  animation: animate 19s linear infinite;
}

.background li:nth-child(0) {
  left: 87%;
  width: 152px;
  height: 152px;
  bottom: -152px;
  animation-delay: 1s;
}
.background li:nth-child(1) {
  left: 45%;
  width: 157px;
  height: 157px;
  bottom: -157px;
  animation-delay: 5s;
}
.background li:nth-child(2) {
  left: 32%;
  width: 145px;
  height: 145px;
  bottom: -145px;
  animation-delay: 3s;
}
.background li:nth-child(3) {
  left: 5%;
  width: 162px;
  height: 162px;
  bottom: -162px;
  animation-delay: 14s;
}
.background li:nth-child(4) {
  left: 3%;
  width: 152px;
  height: 152px;
  bottom: -152px;
  animation-delay: 8s;
}
.background li:nth-child(5) {
  left: 49%;
  width: 172px;
  height: 172px;
  bottom: -172px;
  animation-delay: 20s;
}
.background li:nth-child(6) {
  left: 61%;
  width: 123px;
  height: 123px;
  bottom: -123px;
  animation-delay: 19s;
}
.background li:nth-child(7) {
  left: 89%;
  width: 147px;
  height: 147px;
  bottom: -147px;
  animation-delay: 10s;
}
.background li:nth-child(8) {
  left: 11%;
  width: 164px;
  height: 164px;
  bottom: -164px;
  animation-delay: 26s;
}
.background li:nth-child(9) {
  left: 81%;
  width: 199px;
  height: 199px;
  bottom: -199px;
  animation-delay: 34s;
}
</style>
