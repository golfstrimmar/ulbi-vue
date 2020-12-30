<template lang="pug">
v-container
  Photo(
    v-for="(photo , index) in photos" 
    :key="index"
    :photo="photo"
    )
</template>
<script>
import Photo from '@/components/photo/Photo';
  export default {
    data: () => ({ 
         photos:[
          {id:"1", title:"photo1"},
         {id:"2", title:"photo2"},
         {id:"3", title:"photo3"},
         {id:"4", title:"photo4"}
       ]
     }),
     components: { Photo   }, 
      mounted() {     },  methods: {      },  computed:{      }

  }
</script>

<style lang="sass">

</style>
