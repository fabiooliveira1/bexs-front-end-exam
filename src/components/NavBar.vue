<template>
  <nav class="nav-bar">
    <div class="nav-bar__steps">
      <a>chevron_left</a>
      <div class="nav-bar__steps--short">
        <span class="nav-bar__steps--heavy">Etapa {{currentStep}} </span>
        <span> de {{totalSteps}}</span>
      </div>
      <div class="nav-bar__steps--long">
        <span>Alterar forma de pagamento</span>
      </div>
    </div>
    <div class="nav-bar__title">
      <div class="nav-bar__image-wrapper">
        <img src="../assets/images/card-icon.png">
      </div>
      <p>Adicione um novo cartão de crédito</p>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    currentStep: Number,
    totalSteps: Number
  }
}
</script>