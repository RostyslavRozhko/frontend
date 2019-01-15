import fetch from '../utils/fetch'

const login = (email, password) => {
  return fetch('POST', '/users/login', {email, password})
    .then(response => {
      localStorage.setItem('authtoken', response.data.auth_token)
      return response.data
    })
    .catch(error => error.response.data)
}

const logout = () => {
  return fetch('GET', '/users/logout')
    .then(response => {
      localStorage.removeItem('authtoken')
    })
}

export default {
  login,
  logout,
}