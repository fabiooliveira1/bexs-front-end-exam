<template>
  <div id="app">
    <section class="main-container">
      <NavBar />
      <CardForm />
      <CardArt />
    </section>
  </div>
</template>

<script>
import CardArt from './components/CardArt.vue'
import CardForm from './components/CardForm.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    CardArt,
    CardForm,
    NavBar
  }
}
</script>

<style>
@import './assets/styles/index.css';
</style>
