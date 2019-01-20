import fetch from '../utils/fetch'

const getPaymentLink = (packageId) => {
  return fetch('POST', `/billing/payment-link`, {package_id: packageId})
    .then(response => response.data)
    .then(data => data.url)
    .catch(error => error.response.data)
}

export default {
  getPaymentLink,
}