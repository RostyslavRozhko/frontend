import fetch from '../utils/fetch'

const getProgramListByChannel = (channelId) => {
  return fetch('GET', `/programs/all/${channelId}`)
}

export default {
  getProgramListByChannel,
}