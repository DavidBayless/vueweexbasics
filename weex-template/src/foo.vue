<template>
  <div id="main-menu" class="centerized">
  <link rel="stylesheet" href="./assets/animations.css">
  <link rel="stylesheet" href="./assets/sos-circle.css">
    <h2>meditation &nbsp; reinvented</h2>
    <!-- TODO: how to I abstract this? <a>content</a> -> <a><span><span>...content</a> -->
    <a href="/begin" class="sos-circle blue"><span></span><span></span><span></span><span><span class="centerized" style="margin-top: 47px;">begin</span></span></a>
    <a href="/signup" class="sos-circle gold"><span></span><span></span><span></span><span><span class="centerized" style="margin-top: 47px;">sign up</span></span></a>
    <a href="/explore" class="sos-circle pink"><span></span><span></span><span></span><span><span class="centerized" style="margin-top: 47px;">explore</span></span></a>
  </div>
</template>

<style>
  #main-menu {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    text-align: center;
    transition: opacity ease-in-out .25s;
    width: auto;
    right: 0;
    margin: -75px auto 40px;
  }
  #main-menu h2 {
    color: white;
    margin-bottom: 40px;
    font-family: "Century Gothic", sans-serif;
  }
  #main-menu .sos-circle {
    width: 150px;
    height: 150px;
  }
</style>

<script>
  export default {
    data: {
      logoUrl: 'https://alibaba.github.io/weex/img/weex_logo_blue@3x.png',
      target: 'World'
    },
    methods: {
      update: function (e) {
        this.target = this.target === 'Weex' ? 'World' : 'Weex';
        console.log('target:', this.target)
      }
    }
  }
</script>
