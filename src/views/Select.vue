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

      <h1>Select Game Type</h1>
      <div class="row">
        <div style="width:40%; height:100%">
          <div type="button" class="btn btn-outline-dark btn-fw m-2" style="height:100%">
            <img src="../assets/quiz.svg" class="img-fluid" alt />
            
          </div>
          <h2 >Quiz</h2>
        </div>

        <!-- ================================================================================================================= -->
        <div style="width:40%; height:100%">
          <div type="button" class="btn btn-outline-dark btn-fw m-2" style="height:100%">
            <img src="../assets/flash.svg" class="img-fluid" alt />
           
          </div>
           <h2>Flash Card</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
export default {
  components: {
    Menu
  },
  data() {
    return {
      active: "quiz"
    };
  },
  methods: {
    select(act) {
      this.active = act;
    }
  }
};
</script>

<style scoped>
.btn{
    padding: 2px !important;
}
.row{
justify-content: center
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
