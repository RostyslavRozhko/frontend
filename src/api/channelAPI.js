import fetch from '../utils/fetch'

const getCategories = () => {
  return fetch('GET', '/channels/categories')
}

const getAllChannels = () => {
  return fetch('GET', '/channels/all')
}

const getFavoritesChannels = () => {
  return fetch('GET', '/channels/favorites/list')
}

const getLiveUrl = (channelId) => {
  return fetch('GET', `/channels/live/${channelId}`)
}

const getProgramListByChannel = (channelId) => {
  return fetch('GET', `/programs/all/${channelId}`)
}

export default {
  getCategories,
  getAllChannels,
  getFavoritesChannels,
  getLiveUrl,
  getProgramListByChannel,
}