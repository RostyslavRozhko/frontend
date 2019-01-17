import fetch from '../utils/fetch'

const getProgramListByChannel = (channelId) => {
  return fetch('GET', `/programs/all/${channelId}`)
    .then(response => response.data)
    .then(data => data.programs)
    .catch(error => error.response.data)
}

export default {
  getProgramListByChannel,
}