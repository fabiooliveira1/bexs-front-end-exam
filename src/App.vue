<template>
  <div id="app">
    <section class="main-container">
      <NavBar :currentStep="2" :steps="steps" />
      <CardForm @cardChange="handleCardChange" :currentStep="2" :steps="steps"/>
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
    expirationDate: null,
    steps: [
      {
        key: 1,
        label: 'Carrinho',
        longLabel: 'Gerenciar carrinho',
        title: 'Adicione ou remova itens do carrinho',
        icon: 'card-icon.png'
      },
      {
        key: 2,
        label: 'Pagamento',
        longLabel: 'Alterar forma de pagamento',
        title: 'Adicione um novo cartão de crédito',
        icon: 'card-icon.png'
      },
      {
        key: 3,
        label: 'Confirmação',
        longLabel: 'Confirmação de compra',
        title: 'Confirme seus dados para finalizar',
        icon: 'card-icon.png'
      }
    ]
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
