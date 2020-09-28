<template>
<div>
  <Menu></Menu>
<div class="center background">
    
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
    <div class="form-group">
      <h2 for="gameCode">Enter Game Code</h2>
      <input type="text" class="form-control" id="gameCode" placeholder="Code" />
    </div>
    <button type="button" class="btn btn-dark">Play</button>
  </div>
</div>
  
</template>

<script>
  import Menu from '@/components/Menu';
  export default {
    components: {
      Menu
    }
  };
</script>

<style scoped>
  input {
    max-width: 280px;
  }
  .btn {
    font-weight: 800;
    font-size: 1.2rem;
    height: 50px;
    width: 100%;
    padding: 0.875rem 1.375rem;
    max-width: 280px;
  }
  .form-control {
    box-shadow: inset 4px 4px 5px #b8b9be, inset -3px -3px 7px #fff !important;
    font-weight: 600;
    font-size: 1.2rem;
    height: 50px;
    text-align: center;
    border: 1px solid #888;
  }
  .center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center !important;
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
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    background: #f3f4f7;
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
