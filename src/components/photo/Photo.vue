<template lang="pug">
v-container

  p {{photo.id +" "+ photo.title}}

</template>

<script>
  export default {
 props: {
      photo: {
        type: Object,
        required: true
      }
    },

     data: () => ({ }), 
      components: {    }, 
       mounted() {     }, 
        methods: {      }, 
         computed:{      }
  }
</script>

<style lang="sass" scoped>

</style>