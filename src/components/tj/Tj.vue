<template>
  <div>
    <div class="demo">
      <header class="landing">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <!-- <router-link class="back" to="/">
            <i class="fas fa-chevron-left"></i>
          </router-link> -->
          <button class='navbar-toggler navbar-dark' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <i class='navbar-toggler-icon'></i>
          </button>
  
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link">
                  <router-link :to="'/tj'">Home</router-link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <router-link v-bind:to="'/designers'">Our Designers</router-link>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <transition-group tag="div" name="slide" class="img-slider">
        <div v-for="number in [currentImg]" v-bind:key="number">
          <img :src="imgList[Math.abs(currentImg) % imgList.length]" />
        </div>
      </transition-group>
  
      <div class="hero-text">
        <h1>Nooble Creative</h1>
      </div>
      <div class="logo">
        <img class="logo-img" src="../../assets/tj_img/logo.png" alt="Nooble Creative Logo">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Tj",
    data: function() {
      return {
        imgList: [
          'https://imgur.com/p33fpEW.jpg',
          'https://imgur.com/ZU5pfcV.jpg',
          'https://imgur.com/97bvcV8.jpg',
          'https://imgur.com/EpQwIod.jpg'
          // image source https://imgur.com/a/qKrQK1G
        ],
        currentImg: 0
      }
    },
    mounted() {
      setInterval(() => {
        this.currentImg = this.currentImg + 1;
      }, 6000);
    },
    components: {}
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Merriweather|Montserrat:300,300i,400,600');

  .hero-text {
    font-family: Futura;
    color: #ffffff;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  i {
    color: #fff;
    font-size: 30px;
    height: 50px;
    padding-top: 10px;
  }
  
  .logo {
    position: absolute;
    right: 30px;
    bottom: 20px;
  }
  
  .logo-img {
    height: 60px;
  }
  
  .hero-text h1 {
    font-size: 70px;
  }
  
  /* !important is to override bootstrap styles */
  .navbar {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    background-color: transparent !important;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 2;
  }
  
  .nav-item a {
    color: #fff;
  }
  
  .router-link-active {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    color: #fff;
  }
  
  
  /*
  * https://stackoverflow.com/questions/42866098/create-sliding-left-effect-using-vuejs-animation
  */
  
  .demo {
    overflow: hidden;
  }
  
  .slide-leave-active,
  .slide-enter-active {
    transition: 1s;
  }
  
  .slide-enter {
    transform: translate(100%, 0);
  }
  
  .slide-leave-to {
    transform: translate(-100%, 0);
  }
  
  .img-slider {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100vh;
  }
  
  .img-slider img {
    position: absolute;
    top: 0;
    left: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
</style>