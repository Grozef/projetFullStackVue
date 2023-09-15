<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const API_ENDPOINT = 'http://localhost:3000/books'
const localBooks = ref([])
const isLoaded = ref(false)
const router = useRouter()

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

const firstName = ref('');
const lastName = ref('');
const coverUri = ref('');
const genre = ref('');
const title = ref('');
const originalTitle = ref('');
const publicationYear = ref('');
const recap = ref('');
const author = {firstName, lastName}

const book = ref({
    author,
    coverUri,
    genre,
    title,
    originalTitle,
    publicationYear,
    recap
})

async function insertBook(book) {
  try {
    const response = await axios.post(API_ENDPOINT, book);
    if (response.status === 201) {
      console.log('Livre inséré avec succès !');
    } else {
      console.error('Erreur lors de l\'insertion du livre.');
    }
  } catch (error) {
    console.error('Une erreur s\'est produite lors de l\'insertion du livre :', error);
  }
}



</script>

<template>


 <h1> Création d'une référence</h1>

    <section>

            <div class="row gtr-50">

                <div class="col-6 col-12-small">
                    <input type="text" v-model="book.author.firstName" name="author" id="firstName" placeholder="firstName" required />
                    <input type="text" v-model="book.author.lastName" name="author" id="lastName" placeholder="lastName" required />
                </div>

                <div class="col-6 col-12-small">
                    <input type="text" v-model="book.genre" name="genre" id="genre" placeholder="genre" required />
                </div>
                <div class="col-6 col-12-small">
                    <input type="text" v-model="book.publicationYear" name="publicationYear" id="publicationYear" placeholder="publicationYear" required />
                </div>
                <div class="col-6 col-12-small">
                    <input type="text" v-model="book.title" name="title" id="title" placeholder="title" required />
                </div>
                <div class="col-6 col-12-small">
                    <input type="text" v-model="book.originalTitle" name="originalTitle" id="originalTitle" placeholder="originalTitle" required />
                </div>

                <div class="col-6 col-12-small">
                    <input type="text" v-model="book.recap" name="recap" id="recap" placeholder="recap" required />
                </div>
                <div class="col-6 col-12-small">
                    <input type="text" v-model="book.coverUri" name="coverUri" id="coverUri" placeholder="coverUri"  />
                </div>
                <div class="col-6 col-12-small">
                <input type="submit" class="style1" value="création" @click.prevent="insertBook(book)" />
                </div>
            </div>

    </section>
     


</template>

<style scoped>


</style>