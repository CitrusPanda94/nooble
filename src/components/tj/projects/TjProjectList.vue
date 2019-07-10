<template>
  <div>
    <div id='tabs' class='container'>
      <div class='tabs'>
        <a v-on:click='activetab=1' v-bind:class='[ activetab === 1 ? "active" : "" ]'>Projects</a>
        <a v-on:click='activetab=2' v-bind:class='[ activetab === 2 ? "active" : "" ]'>About Me</a>
      </div>
  
      <div class='content'>
        <div v-if='activetab === 1' class='tabcontent'>
          <div class='img-container'>
            <div class='row'>
              <div class='col-sm img-border' v-for='project in projectdata.projects' v-bind:key='project.id'>
                <div data-toggle='modal' data-target='#exampleModal' class='hovereffect'>
                  <img class='img-responsive' :src='project.covers["808"]' :alt='project.name'>
                  <div data-toggle='modal' data-target='#exampleModal' class='overlay' v-on:click='projectIdChanged(project.id)'>
                    <h5>{{ project.name }}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if='activetab === 2' class='tabcontent'>
          <div class='row about-me'>
            <div class='col col-right' v-if='userdata.user'>
              <img class='user-icon' :src='userdata.user.images["138"]'>
            </div>
            <div class='col'>
              <h4>About</h4>
              <p>How's it going, my name is <span>{{ userdata.user.first_name }}</span> and I'm a designer from <span>{{ userdata.user.city }}. I started working for Nooble Creative 2 years ago and it's
  been amazing!! </span>
              </p>
              <h4>Fields</h4>
              <p>
                <span>{{ userdata.user.fields['0'] }}, </span>
                <span>{{ userdata.user.fields['1'] }}, </span>
                <span>{{ userdata.user.fields['2'] }} </span>
                <span>{{ userdata.user.fields['3'] }} </span>
              </p>
  
              <h4>Socials</h4>
              <p>{{ }}</p>
              <a v-if='userdata.user.social_links["0"].url' :href='userdata.user.social_links["0"].url'>
                <i class="fab fa-instagram fa-2x"></i>
              </a>
              <a :href='userdata.user.url'>
                <i class="fab fa-behance-square fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <TjProjectModal :projectId='projectId' :userdata='userdata' />
    <TjMyFooter />
  
  </div>
</template>

<script>
  import TjProjectModal from './TjProjectModal';
  import TjMyFooter from '../designers/TjMyFooter';
  
  export default {
    name: 'TjProjectList',
  
    data: function() {
      return {
        projectId: '',
        activetab: 1
      }
    },
    components: {
      TjProjectModal,
      TjMyFooter
    },
    props: ['projectdata', 'userdata'],
    methods: {
      mouseOver: function() {
        this.active = !this.active;
      },
      projectIdChanged: function(projectId) {
        this.projectId = projectId;
      },
    }
  };
</script>


<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Merriweather|Montserrat:300,300i,400,600');
  
  /* About Me Styles */
  
  .user-icon {
    border-radius: 10px;
    width: 200px;
  }
  
  
  /* Project Styles */
  
  .img-border img {
    border-radius: 10px;
  }
  
  i {
    width: 40px;
  }
  
  .stats div {
    padding: 0;
  }
  
  .stats p {
    margin-bottom: 0;
  }
  
  .about-me {
    margin-bottom: 50px;
    padding-top: 50px;
  }
  
  .col {
    text-align: left;
  }
  
  .col-right {
    text-align: right;
  }
  
  .logo-img {
    width: 60px;
  }
  
  
  /*
  * https://codepen.io/mburridge/pen/WgXrvG  Link to tabs
  */
  
  .container {
    margin-top: 20px;
    font-size: 0.9em;
    color: #888;
  }
  
  .img-container {
    margin: 40px auto;
  }
  
  
  /* Style the tabs */
  
  .tabs {
    overflow: hidden;
    margin-left: 20px;
    margin-bottom: -2px;
  }
  
  .tabs ul {
    list-style-type: none;
    margin-left: 20px;
  }
  
  .tabs a {
    cursor: pointer;
    padding: 12px 24px;
    transition: background-color 0.2s;
    border-right: none;
    background-color: #f1f1f1;
    font-weight: bold;
  }
  
  
  /* Change background color of tabs on hover */
  
  .tabs a:hover {
    background-color: #aaa;
    color: #fff;
  }
  
  
  /* Styling for active tab */
  
  .tabs a.active {
    background-color: #fff;
    color: #484848;
    border-bottom: 2px solid #fff;
    cursor: default;
  }
  
  
  /* Style the tab content */
  
  .hovereffect {
    width: 100%;
    height: 100%;
    float: left;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    text-align: center;
    cursor: default;
    background: #333;
  }
  
  .hovereffect .overlay {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    padding: 50px 20px;
    cursor: pointer;
  }
  
  .overlay h5 {
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }
  
  .hovereffect img {
    display: block;
    position: relative;
    border-radius: 20px;
    max-width: none;
    width: calc(100% + 20px);
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  
  .hovereffect:hover img {
    opacity: 0.4;
    filter: alpha(opacity=40);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  
  .hovereffect h2 {
    text-transform: uppercase;
    color: #fff;
    text-align: center;
    position: relative;
    font-size: 17px;
    overflow: hidden;
    padding: 0.5em 0;
    background-color: transparent;
  }
  
  .hovereffect h2:after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #fff;
    content: '';
    -webkit-transition: -webkit-transform 0.35s;
    transition: transform 0.35s;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
  
  .hovereffect:hover h2:after {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  
  .hovereffect a,
  .hovereffect p {
    color: #FFF;
    opacity: 0;
    filter: alpha(opacity=0);
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
  
  .hovereffect:hover a,
  .hovereffect:hover p {
    opacity: 1;
    filter: alpha(opacity=100);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
</style>