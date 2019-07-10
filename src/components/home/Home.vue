<template>
  <div class='home-page'>
    <div class='container'>
      <div class='heading'>
          <h1>Web and UX Website</h1>
      </div>
      <div class='row'> 
<div class='col tj'>
          <router-link v-bind:to="'/tj'">
            <img class='home-icons' src='../../assets/tj_img/Abstract_Collages-For_Textile_Design_Anastacia_Sholik.jpg'>
            <h2>Tj Lee</h2>
          </router-link>
        </div>
      </div>
      <div class='row'>
        
       
      </div>
      <MyFooter />
    </div>
  </div>

</template>

<script>
import MyFooter from './MyFooter';

export default {
  name: 'Home',
  components: {
      MyFooter
  }
};
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Lora|Open+Sans+Condensed:300');
  .col{
    min-height: 100px;
    margin-bottom: 40px;
  }
  .col h2{
    color: black;
  }
  .home-icons{
    max-width: 350px;
    border-radius: 50%;
    padding: 20px;
  }
  .heading{
    width: 80%;
    margin: 0 auto;
    margin-bottom: 60px;
  }
  .heading h1{
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: bold;
    font-size: 60px;
    padding-top: 50px;
  }
  .heading p{
    font-family: 'Lora', serif;
  }
  .home-page{
    background-color: #ffffff;
    /* background-image: url('https://www.transparenttextures.com/patterns/inflicted.png'); */
    background-attachment: fixed;
    margin-bottom: 0px;

  }
  a:-webkit-any-link{
    text-decoration: none;
  }
</style>
