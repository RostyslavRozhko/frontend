import fetch from '../utils/fetch'

const login = (email, password) => {
  return fetch('POST', '/users/login', {email, password})
    .then(response => {
      if(response.data.status === 'success') {
        localStorage.setItem('authtoken', response.data.auth_token)
      }
      return response
    })
    .catch(error => console.log(error))
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