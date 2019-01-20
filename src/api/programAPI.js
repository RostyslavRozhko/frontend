import fetch from '../utils/fetch'

const getProgramListByChannel = (channelId) => {
  return fetch('GET', `/programs/all/${channelId}`)
    .then(response => response.data)
    .then(data => data.programs)
    .catch(error => error.response.data)
}

const getProgramLiveUrl = (programId) => {
  return fetch('GET', `/programs/${programId}`)
    .then(response => response.data)
    .then(data => data.url)
    .catch(error => error.response.data)
}

export default {
  getProgramListByChannel,
  getProgramLiveUrl,
}