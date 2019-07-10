<template>
  <div>
    <div class='container'>
      <div class='row'>
        <div class='col-sm img-border' v-for='user in users' v-bind:key='user.id'>
          <div class='projects' to='/projects' @click='navigateTo(user.id);'>
            <img v-if='user.images[138]' :src='user.images[138]' alt='designer logo'>
            <h4>{{ user.first_name }}</h4>
          </div>
        </div>
      </div>
      <div class='row'>
        <div class='col-sm img-border projects'>
          <img src='../../../assets/tj_img/static_profiles/MO-STUDIO.jpg'>
          <h4>MO-STUDIO</h4>
        </div>
        <div class='col-sm img-border projects'>
          <img src='../../../assets/tj_img/static_profiles/Andrea_Rivola.jpg'>
          <h4>Andrea Rivola</h4>
        </div>
        <div class='col-sm img-border projects'>
          <img src='../../../assets/tj_img/static_profiles/Karol_Banach.png'>
          <h4>Karol Banach</h4>
        </div>
      </div>
       <div class='row'>
        <div class='col-sm img-border projects'>
          <img src='../../../assets/tj_img/static_profiles/Sandra-Walderhaug.jpeg'>
          <h4>Sandra Walderhaug</h4>
        </div>
        <div class='col-sm img-border projects'>
          <img src='../../../assets/tj_img/static_profiles/Lee-Eunjoo.jpeg'>
          <h4>Lee Eunjoo</h4>
        </div>
        <div class='col-sm img-border projects'>
          <img src='../../../assets/tj_img/static_profiles/Dist-lemoto.jpg'>
          <h4>Dist lemoto</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TjDesignerList',
    data: function() {
      return {
        users: [],
      };
    },
    created: function() {
      this.$http
        .get('https://behance-mock-api.glitch.me/api/users/')
        .then(function(data) {
          this.users = data.body.users;
        });
    },
    methods: {
      navigateTo: function(userId) {
        this.$router.push({
          name: 'projects',
          params: {
            userId: userId
          }
        });
      }
    }
  };
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Merriweather|Montserrat:300,300i,400,600');
  .container {
    margin-top: 70px;
  }
  
  .img-border img {
    border-radius: 10px;
    cursor: pointer;
  }
  
  .projects img {
    width: 200px;
    height: 200px;
  }
  
  .projects h4 {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 300;
    padding-top: 5px;
  }

  .row {
    margin-bottom: 30px;
  }
</style>