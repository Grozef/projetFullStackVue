<script setup>
import { defineProps, ref } from 'vue';
const books = ref([]);
const props = defineProps({
    book:{
      type:Object
     },
  })

</script>

<template>

    <figure class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
        <img :src="props.book.coverUri" :alt="props.book.title" class="img-fluid tm-img-center" />
        <p class="tm-figcaption">{{ props.book.title }}</p>
    </figure>  
                       



</template>

<style scoped>


</style>
