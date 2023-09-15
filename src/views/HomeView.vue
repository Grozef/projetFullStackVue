<script setup>
import BookCard from '../components/BookCard.vue';

import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const API_ENDPOINT = 'http://localhost:3000/books'

const localBooks = ref([])
const isLoaded = ref(false)

const router = useRouter()

const goToDetails = (bookId)=>{
  console.log("Hey cliquage sur " + bookId)
  router.push({ 
    name:'detail',
    params:{
        id:bookId
    },
  });
};

onBeforeMount(async ()=>{
  const books = await axios.get(API_ENDPOINT)
  const {data, status} = books
  if(status==200){
    localBooks.value = data
    isLoaded.value = true
    console.log(data)
  }else{
    console.log('OUPS :(')
  }
})


</script>

<template>
   

   <div class="container">

            
            <div class="tm-main-content">
                <section class="tm-margin-b-l">
                    <header>
                        <h2 class="tm-main-title">Bienvenue chez le chat qui lit</h2>    
                    </header>
                    
                    <p>Ceci est un faux site, avec un vrai chat (le mien), qui va essayer de me familiariser aec le CRUD en VueJS</p>
                    
                    <div class="tm-gallery">
                        <div class="row">
                            
                           <!-- <BookCard v-for="book in localBooks" :key="book._id" :book="book" /> -->
                            <figure
                                class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item"
                                v-for="book in localBooks"
                                :key="book._id"
                                @click="goToDetails(book._id)">

                             <!--   Utilisation de la propriété 'coverUri' du livre pour afficher l'image -->
                                <img :src="book.coverUri" :alt="book.title" class="img-fluid tm-img-center" />
                                <p class="tm-figcaption">{{ book.title }}</p>
                            </figure>  

                        </div>   
                    </div>
                    
                    <nav class="tm-gallery-nav">
                        <ul class="nav justify-content-center">
                            <li class="nav-item"><RouterLink to="/" class="nav-link">Page 1</RouterLink></li>
                            <li class="nav-item"><RouterLink to="/" class="nav-link">Page 2</RouterLink></li>
                            <li class="nav-item"><RouterLink to="/" class="nav-link">Page 3</RouterLink></li>
                            <li class="nav-item"><RouterLink to="/" class="nav-link">Page 4</RouterLink></li>                    
                        </ul>
                    </nav>
                </section>

            </div>

        </div>
              
                
</template>

<style scoped>


</style>
