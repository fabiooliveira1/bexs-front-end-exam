export const getCardBrand = (cardNumber) => {
  let visa_regex = new RegExp('^4[0-9]{0,}$')
  let mastercard_regex = new RegExp('^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)[0-9]{0,}$')

  if (cardNumber.match(visa_regex)) {
    return 'visa'
  }
  if (cardNumber.match(mastercard_regex)) {
    return 'mastercard'
  }
  return false
}
