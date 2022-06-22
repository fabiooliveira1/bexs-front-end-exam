<template>
  <div id="app">
    <section class="main-container">
      <NavBar :currentStep="2" :totalSteps="3" />
      <CardForm @cardChange="handleCardChange" />
      <CardArt :cardNumber="cardNumber" :name="name" :expirationDate="expirationDate" />
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
  },
  data: () => ({
    cardNumber: null,
    name: null,
    expirationDate: null
  }),
  methods: {
    handleCardChange (event) {
      this[event.key] = event.value
    }
  }
}
</script>

<style>
@import './assets/styles/index.css';
</style>
