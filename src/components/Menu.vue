<template>
  <div>
    <button type="button" id="menu" class="btn btn-inverse-dark btn-icon Mbutton" @click="change">
      <i :class="menu.sign"></i>
    </button>

    <div class="card" v-if="!menu.show">
      <router-link class="btn btn-inverse-dark btn-fw" to="/dashboard" style="margin: 1rem;">View Dashboard</router-link>
      <router-link class="btn btn-inverse-dark btn-fw" to="/play" style="margin: 1rem;">Play a Game</router-link>
      <router-link class="btn btn-inverse-dark btn-fw" to="/home" style="margin: 1rem;">Create a Game</router-link>
      <router-link class="btn btn-inverse-dark btn-fw" to="/home" style="margin: 1rem;">Withdraw Earnings</router-link>
      <router-link class="btn btn-inverse-dark btn-fw" to="/home" style="margin: 1rem;">Refer a Friend</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Menu',
    data() {
      return {
        menu: { show: 'true', sign: 'mdi mdi-menu' }
      };
    },
    methods: {
      change() {
        this.menu.show = !this.menu.show;
        if (this.menu.sign == 'mdi mdi-menu') {
          this.menu.sign = 'mdi mdi-close';
        } else {
          this.menu.sign = 'mdi mdi-menu';
        }
      },
      scroll(){
        let prevScrollpos = window.pageYOffset;
  window.addEventListener('scroll', ()=> {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("#menu").style.top = "0";
  } else {
    document.querySelector("#menu").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
} );
      }
    },

    created(){
    this.scroll()
    }
  };
</script>

<style scoped>
  .card {
    width: 100vw;
    height: 100vh;
    position: fixed !important;
    z-index: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .Mbutton {
    position: fixed;
    z-index: 10;
    right: 10px;
    top: 10px;
  }
</style>
