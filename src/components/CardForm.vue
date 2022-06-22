<template>
  <form class="card-form" @submit.prevent="validateForm">
    <div class="card-form__steps">
      <div class="card-form__step-wrapper" v-for="step in steps" :key="step.key">
        <img v-if="currentStep > step.key" src="../assets/images/green-check.png">
        <span v-else>{{step.key}}</span>
        {{step.label}}
        <a v-if="step.key < steps.length">chevron_right</a>
      </div>
    </div>
    <md-field :class="{'md-invalid': errors.cardNumber}">
      <label>Número do cartão</label>
      <md-input v-model="values.cardNumber" maxlength="16" type="number"></md-input>
      <span class="md-error">Número de cartão inválido</span>
    </md-field>
    <md-field :class="{'md-invalid': errors.name}">
      <label>Nome (igual ao cartão)</label>
      <md-input v-model="values.name"></md-input>
      <span class="md-error">Insira o seu nome completo</span>
    </md-field>
    <md-field :class="`md-field--half ${errors.expirationDate ? 'md-invalid' : ''}`">
      <label>Validade</label>
      <md-input v-model="values.expirationDate"></md-input>
      <span class="md-error" type="number">Data inválida</span>
    </md-field>
    <md-field :class="`md-field--half md-field--right ${errors.cvv ? 'md-invalid' : ''}`">
      <label>CVV</label>
      <md-input v-model="values.cvv" maxlength="3" type="number"></md-input>
      <span class="md-error">Código inválido</span>
    </md-field>
    <md-field :class="{'md-invalid': errors.parts}">
      <label>Número de parcelas</label>
      <md-select v-model="values.parts" name="parts" id="parts">
        <md-option v-for="i in maxSplit" :key="i" :value="i">{{i}}x R$ {{formatNumber(totalAmount / i)}} sem juros</md-option>
      </md-select>
      <span class="md-error">Insira o número de parcelas</span>
    </md-field>
    <div class="card-form__buttons">
      <md-button class="md-button--secondary-green" type="submit">Continuar</md-button>
    </div>
  </form>
</template>

<script>
import { formatDecimal } from '../utils'

export default {
  name: 'CardForm',
  props: {
    totalAmount: {
      type: Number,
      default: 12000
    },
    maxSplit: {
      type: Number,
      default: 12
    },
    currentStep: {
      type: Number,
      default: 1
    },
    steps: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    values: {
      cardNumber: null,
      name: null,
      expirationDate: null,
      cvv: null,
      parts: null,
    },
    errors: {
      cardNumber: false,
      name: false,
      expirationDate: false,
      cvv: false,
      parts: false,
    }
  }),
  watch: {
    'values.cardNumber' (val) {
      this.isCardNumberInvalid()
      this.$emit('cardChange', { key: 'cardNumber', value: val })
    },
    'values.name' (val) {
      this.isNameInvalid()
      this.$emit('cardChange', { key: 'name', value: val })
    },
    'values.expirationDate' (val) {
      this.isExpirationDateInvalid()
      this.$emit('cardChange', { key: 'expirationDate', value: val })
    },
    'values.cvv' () {
      this.isCVVInvalid()
    },
    'values.parts' () {
      this.isPartsValueInvalid()
    },
  },
  methods: {
    validateForm () {
      let error = false
      error = this.isCardNumberInvalid() || error
      error = this.isNameInvalid() || error
      error = this.isExpirationDateInvalid() || error
      error = this.isCVVInvalid() || error
      error = this.isPartsValueInvalid() || error

      console.log(`is invalid: ${error}`)
    },
    isCardNumberInvalid() {
      let error = false
      if (typeof this.values.cardNumber !== 'string') {
        error = true
      } else if (!this.values.cardNumber.match(/[0-9]{16}/)) {
        error = true
      }

      this.errors.cardNumber = error
      return error
    },
    isNameInvalid() {
      let error = false
      if (typeof this.values.name !== 'string') {
        error = true
      } else if (!this.values.name) {
        error = true
      }

      this.errors.name = error
      return error
    },
    isExpirationDateInvalid() {
      let error = false
      if (typeof this.values.expirationDate !== 'string') {
        error = true
      } else if (!this.values.expirationDate.match(/[0-9]{2}\/[0-9]{2}/)) {
        error = true
      } else {
        const now = new Date()
        let [month,year] = this.values.expirationDate.split('/')
        month = parseInt(month, 10)
        year = parseInt(year, 10)

        if (now.getFullYear() - year > 2000) {
          error = true
        }
        if (month < 1 || month > 12) {
          error = true
        }
        if (now.getFullYear() - year === 2000 && month < now.getMonth() + 1) {
          error = true
        }
      }

      this.errors.expirationDate = error
      return error
    },
    isCVVInvalid() {
      let error = false
      if (typeof this.values.cvv !== 'string') {
        error = true
      } else if (!this.values.cvv.match(/[0-9]{3}/)) {
        error = true
      }

      this.errors.cvv = error
      return error
    },
    isPartsValueInvalid() {
      let error = false
      if (typeof this.values.parts !== 'number') {
        error = true
      } else if (this.values.parts < 1 || this.values.parts > this.maxSplit) {
        error = true
      }

      this.errors.parts = error
      return error
    },
    formatNumber: (num) => formatDecimal(num).toFixed(2)
  }
}
</script>
