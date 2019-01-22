import fetch from '../utils/fetch'

const login = (email, password) => {
  return fetch('POST', '/users/login', {email, password})
    .then(response => {
      localStorage.setItem('authtoken', response.data.auth_token)
      return response.data
    })
}

const logout = () => {
  return fetch('GET', '/users/logout')
    .then(response => {
      localStorage.removeItem('authtoken')
      return response.data
    })
    .catch(error => error.response.data)
}

const getUser = () => {
  return fetch('GET', '/users/show')
    .then(response => response.data)
    .then(data => data.user)
    .catch(error => error.response.data)
}

const getPlan = () => {
  return fetch('GET', '/users/plan')
    .then(response => response.data)
    .catch(error => error.response.data)
}

export default {
  login,
  logout,
  getUser,
  getPlan,
}