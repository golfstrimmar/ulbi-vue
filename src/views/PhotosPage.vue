<template lang="pug">
v-container
  PhotoForm(
    @addPhoto = "addPhoto"
    )
  v-row
    Photo(
      v-for="(photo , index) in photos" 
      :key="index"
      :photo="photo"
      @click ="openDialog"
      )
    PhotoDialog(
      :photo="currentPhoto"
      v-model='dialogVisible'
    )
</template>
<script>
import Photo from '@/components/photo/Photo';
import PhotoForm from '@/components/photo/PhotoForm';
import PhotoDialog from '@/components/photo/PhotoDialog';
  export default {
    data: () => ({ 
         photos:[],
         currentPhoto: {},
         dialogVisible: false
     }),
     components: { Photo,PhotoForm ,PhotoDialog  }, 
      mounted() {
         this.fetchToDo()
         }, 
      methods: { 
        fetchToDo(){
          this.axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10').then(response => this.photos = response.data)
          },

          //  реализуя функцию добавления картинки из дочернего компонента
          // она оттуда $emit 
          addPhoto(photo){
            // в массив фото добавляется еще один объект  который пришёл из дочернего компонента
                    this.photos.push(photo)
          },
          openDialog(){
            this.currentPhoto= photo
            this.dialogVisible=true
          },
           }, 


           computed:{      }

  }
</script>

<style lang="sass">

</style>
