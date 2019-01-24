import fetch from '../utils/fetch'

const login = (email, password) => {
  return fetch('POST', '/users/login', {email, password})
    .then(response => {
      localStorage.setItem('authtoken', response.data.auth_token)
      return response.data
    })
}

const logout = () => {
  localStorage.removeItem('authtoken')
  return fetch('GET', '/users/logout')
    .then(response => {
      return response.data
    })
    .catch(error => error.response.data)
}

const getUser = () => {
  return fetch('GET', '/users/show')
    .then(response => response.data)
    .then(data => data.user)
}

const getPlan = () => {
  return fetch('GET', '/users/plan')
    .then(response => response.data)
}

const resetPassword = (email) => {
  return fetch('POST', '/users/reset', {email})
    .then(response => response.data)
}

export default {
  login,
  logout,
  getUser,
  getPlan,
  resetPassword,
}