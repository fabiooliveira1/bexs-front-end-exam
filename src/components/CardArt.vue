<template>
  <div :class="`card-art ${cardBrand ? 'card-art--bright' : ''}`">
    <div class="card-art__brand">
      <img v-if="cardBrand" :src="require(`../assets/images/${cardBrand}.png`)"/>
    </div>
    <div class="card-art__number">
      <span v-for="(group, i) in cardNumberGrouped" :key="i">{{group}}</span>
    </div>
    <div class="card-art__info">
      <span>{{name}}</span><span>{{expirationDate}}</span>
    </div>
  </div>
</template>

<script>
import { getCardBrand } from '../utils'
export default {
  name: 'CardForm',
  props: {
    name: {
      type: String,
      default: 'Nome do Titular'
    },
    expirationDate: {
      type: String,
      default: '00/00'
    },
    cardNumber: {
      type: String,
      default: ''
    }
  },
  computed: {
    cardNumberGrouped() {
      let fixedNumberSize = this.cardNumber + '*'.repeat(16)
      fixedNumberSize = fixedNumberSize.slice(0, 16)
      return fixedNumberSize.match(/.{1,4}/g)
    },
    cardBrand() {
      return getCardBrand(this.cardNumber)
    }
  },
}
</script>
