import fetch from '../utils/fetch'
import { normalizeObject } from '../utils/data'

const getCategories = () => {
  return fetch('GET', '/channels/categories')
    .then(response => response.data)
    .then(data => normalizeObject(data.categories, '_id'))
    .catch(error => error.response.data)
}

const getAllChannels = () => {
  return fetch('GET', '/channels/all')
    .then(response => response.data)
    .then(data => data.channels)
    .catch(error => error.response.data)
}

const getFavoritesChannels = () => {
  return fetch('GET', '/channels/favorites/list')
    .then(response => response.data)
    .then(data => data.favorites)
    .catch(error => error.response.data)
}

const getLiveUrl = (channelId) => {
  return fetch('GET', `/channels/live/${channelId}`)
    .then(response => response.data)
    .then(data => data.url)
    .catch(error => error.response.data)
}

const getByChId = (chId) => {
  return fetch('GET', `/channels/ch-id/${chId}`)
    .then(response => response.data)
    .then(data => data.channel)
    .catch(error => error.response.data)
}

const addToFavorites = (channelId) => {
  return fetch('POST', `/channels/favorites/add`, {channel_id: channelId})
    .then(response => response.data)
    .then(data => data.channel)
    .catch(error => error.response.data)
}

const deleteToFavorites = (channelId) => {
  return fetch('DELETE', `/channels/favorites/${channelId}`)
    .then(response => response.data)
    .then(data => data.channel)
    .catch(error => error.response.data)
}

export default {
  getCategories,
  getAllChannels,
  getFavoritesChannels,
  getLiveUrl,
  getByChId,
  addToFavorites,
  deleteToFavorites,
}