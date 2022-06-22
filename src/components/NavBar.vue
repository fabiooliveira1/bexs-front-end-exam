<template>
  <nav class="nav-bar">
    <div class="nav-bar__steps">
      <a>chevron_left</a>
      <div class="nav-bar__steps--short">
        <span class="nav-bar__steps--heavy">Etapa {{currentStep}} </span>
        <span> de {{steps.length}}</span>
      </div>
      <div class="nav-bar__steps--long">
        <span>{{stepInfo.longLabel}}</span>
      </div>
    </div>
    <div class="nav-bar__title">
      <div class="nav-bar__image-wrapper">
        <img :src="require(`../assets/images/${stepInfo.icon}`)">
      </div>
      <p>{{stepInfo.title}}</p>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    currentStep: {
      type: Number,
      default: 1
    },
    steps: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    stepInfo () {
      const item = this.steps.find(({ key }) => key === this.currentStep)
      if (item) {
        return item
      }

      return {
        key: 1,
        label: 'Carrinho',
        longLabel: 'Gerenciar carrinho',
        title: 'Adicione ou remova itens do carrinho',
        icon: 'card-icon.png'
      }
    }
  }
}
</script>