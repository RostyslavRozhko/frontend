import React, { useState, useEffect} from 'react'
import channelAPI from '../../api/channelAPI'
import Navigation from '../../react-keys'
import { HorizontalList } from '../../react-keys'

import VideoPlayer from './VideoPlayer'
import ProgramList from './ProgramList'

import Layout from '../../styles/Layout'

const { Flex } = Layout

const Player = (props) => {
  const [channelLiveUrl, setChannelLiveUrl] = useState('')

  useEffect(() => {
    getChannel()
  }, {})

  const getChannel = async () => {
    const channelId = props.match.params.id
    const channelLiveUrl = await channelAPI.getLiveUrl(channelId).then(response => response.data.url)
    setChannelLiveUrl(channelLiveUrl)
  }

  return (
    <Navigation>
      <HorizontalList height="100%">
        <Flex pl="50px" pr="50px" height="100%" >
          <ProgramList channelId={props.match.params.id} channelName="Новий канал" />
          <VideoPlayer url={channelLiveUrl} />
        </Flex>
      </HorizontalList>
    </Navigation>
  )
}

export default Player