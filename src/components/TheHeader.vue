<script setup>

</script>

<template>

<div class="container">
    <header class="tm-site-header">
        <h1 class="tm-site-name">Nounouille</h1>
        <p class="tm-site-description">Your Online Bookstore</p>
                
        <nav class="navbar navbar-expand-md tm-main-nav-container">

            <div class="collapse navbar-collapse tm-main-nav" id="tmMainNav">
                <ul class="nav nav-fill tm-main-nav-ul">
                    <li class="nav-item"><RouterLink to="/" class="nav-link">Home</RouterLink></li>
                    <li class="nav-item"><RouterLink to="/liste" class="nav-link">Liste</RouterLink>La liste</li>
                    <li class="nav-item"><RouterLink to="/create" class="nav-link">Create</RouterLink>Créer une référence</li>
                    <li class="nav-item"><RouterLink to="/about" class="nav-link">About</RouterLink>Détail</li>
                </ul>
            </div>
        </nav>
               
    </header>
</div> 
     
 
</template>

<style scoped>


</style>
