import fetch from '../utils/fetch'

const getPackages = () => {
  return fetch('GET', `/plan/packages`)
    .then(response => response.data)
    .catch(error => error.response.data)
}

export default {
  getPackages,
}