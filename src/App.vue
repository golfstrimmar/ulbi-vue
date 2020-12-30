<template lang="pug">
<!-- здесь  vuetify router vuex axios  -->

v-app
  Navbar
  router-view

</template>

<script>
import Navbar from './components/navbar';

export default {
  name: 'App',

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="sass">

#nav 
  padding: 30px

  a 
    font-weight: bold
    color: #2c3e50

    &.router-link-exact-active 
      color: #42b983
    
  

</style>