<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import BookCard from '../components/BookCard.vue';
const API_ENDPOINT = 'http://localhost:3000/books'

const localBooks = ref([])
const isLoaded = ref(false)

const router = useRouter()
/*
const goToDetails = (bookId)=>{
  console.log("🍕 cliquage sur " + bookId)
  router.push({ 
    name:'detail',
    params:{
        _id:bookId
    },
  });
};
*/
onBeforeMount(async ()=>{
  const books = await axios.get(API_ENDPOINT)
  const {data, status} = books
  if(status==200){
    localBooks.value = data
    isLoaded.value = true
    console.log(data)
  }else{
    console.log('PUTAIN!!!')
  }
})

async function supBook(book) {
  try {
    const response = await axios.delete(API_ENDPOINT, book._id);
    if (response.status === 204) {
      console.log('Livre supprimé avec succès !');
    } else {
      console.error('Erreur lors de la suppression du livre.');
    }
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la suppression du livre :', error);
  }
}
</script>

<template>
   

   <div class="container">

            
            <div class="tm-main-content">
                <section class="tm-margin-b-l">
                    <header>
                        <h2 class="tm-main-title">Bienvenue chez le chat qui lit</h2>    
                    </header>
                    
                    <p>Ceci est un faux site, avec un vrai chat (le mien), qui va essayer de me familiariser aec le CRUD en VueJS, Ici on peut voir un composant et un bouton qui nous permet de supprimer une entrée dans l'API</p>
                    
                    <div class="tm-gallery">
                        <div class="row">
                            <div v-for="book in localBooks" :key="book._id" >
                                <BookCard :book="book"/> 
                                <div class="col-6 col-12-small">
                                    <input type="submit" class="style1" value="suppression" @click.prevent="supBook(book)" />
                                </div> 
                            </div>
                            
                     <!--       <figure
                                class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item"
                                v-for="book in localBooks" :key="book._id">
                             @click="goToDetails(book._id)">

                            Utilisation de la propriété 'coverUri' du livre pour afficher l'image 
                                <img :src="book.coverUri" :alt="book.title" class="img-fluid tm-img-center" />
                                <p class="tm-figcaption">{{ book.title }}</p>
                            </figure>  -->
                        </div>  
                </div>
                    
                    <nav class="tm-gallery-nav">
                        <ul class="nav justify-content-center">
                            <li class="nav-item"><a class="nav-link active" href="#">1</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">2</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">3</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">4</a></li>                    
                        </ul>
                    </nav>
                </section>

            </div>

        </div>
              
                
</template>

<style scoped>


</style>
