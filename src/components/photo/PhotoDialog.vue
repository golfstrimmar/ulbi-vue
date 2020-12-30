<template lang="pug">
v-dialog(v-model='value' persistent='' max-width='600')
  v-card
    v-card-title {{photo.title}}
      v-card-text
      v-img(
        :src="photo.url"
      )
</template>

<script>
  export default {
    // здесь props заходит в виде массива
    props:['photo', 'value'],
     data: () => ({ 
       dialogVisible: false
      }), 
       components: {    }, 
       created() { 
          this.dialogVisible =this.value
          },  methods: {      }, 
           watch:{  
             value(newValue){
               console.log(newValue)
             }
               }
  }
</script>

<style lang="sass" scoped>

</style>