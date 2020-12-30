<template lang="pug">
v-col(cols="4")
  v-card(
    @click="openDialog"
    )
    v-card-title  {{photo.title}}
    v-card-text
      v-img(
        width="200"
        height="200"
        :src="photo.url"
        )
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
        methods: { 
        // вешаем слушатель события клика и эмитим метод в родительский компонент
          openDialog(){
            this.$emit('openDialog',this.photo)
          }
             }, 
         computed:{      }
  }
</script>

<style lang="sass" scoped>

</style>