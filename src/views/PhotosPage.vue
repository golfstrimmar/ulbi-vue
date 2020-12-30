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
      )
</template>
<script>
import Photo from '@/components/photo/Photo';
import PhotoForm from '@/components/photo/PhotoForm';
  export default {
    data: () => ({ 
         photos:[
          {id:"1", title:"photo1"},
         {id:"2", title:"photo2"},
         {id:"3", title:"photo3"},
         {id:"4", title:"photo4"}
       ]
     }),
     components: { Photo,PhotoForm   }, 
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
          }

           }, 


           computed:{      }

  }
</script>

<style lang="sass">

</style>
