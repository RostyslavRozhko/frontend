import React, { useState, useEffect} from 'react'
import channelAPI from '../../api/channelAPI'
import programAPI from '../../api/programAPI'
import Navigation from '../../react-keys'
import { HorizontalList } from '../../react-keys'
import Loader from '../Loader'
import BottomButtons from './BottomButtons'

import VideoPlayer from './VideoPlayer'
import ProgramList from './ProgramList'

import PlayerStyles from '../../styles/Player'
import Layout from '../../styles/Layout'

const { Flex } = Layout

const Player = (props) => {
  const [channelLiveUrl, setChannelLiveUrl] = useState('')
  const [channel, setChannel] = useState({})
  const [showProgramList, changeProgramListShow] = useState(true)
  const [programs, setPrograms] = useState({})
  const [loading, stopLoading] = useState(true)

  useEffect(() => {
    loadData()
  }, {})

  const loadData = async () => {
    const channel = await getChannel()
    await getLiveUrl(channel._id)
    await getProgramsList(channel._id)

    stopLoading(false)
  }

  const getChannel = async () => {
    const chId = props.match.params.id
    const channel = await channelAPI.getByChId(chId)

    setChannel(channel)
    return channel
  }

  const getLiveUrl = async (channelId) => {
    const channelLiveUrl = await channelAPI.getLiveUrl(channelId)
    setChannelLiveUrl(channelLiveUrl)
  }

  const getProgramsList = async (channelId) => {
    const programs = await programAPI.getProgramListByChannel(channelId)

    let channelsWithDate = {}
    programs.map(program => {
      const day = program.day
      if(!channelsWithDate[day]) {
        channelsWithDate[day] = []
      } else {
        channelsWithDate[day].push(program)
      }
      return channelsWithDate[day]
    }, {})

    setPrograms(channelsWithDate)
  }

  const handleFavorite = async () => {
    setChannel({...channel, isFavorite: !channel.isFavorite})
    
    if(channel.isFavorite) {
      await channelAPI.deleteToFavorites(channel._id)
    } else {
      await channelAPI.addToFavorites(channel._id)
    }

    getChannel()
  }

  const handleProgramList = () => {
    changeProgramListShow(!showProgramList)
  }

  return (
    <>
      {loading && <Loader />}
      <Navigation>
        <HorizontalList height="100%">
          <Flex pl="50px" pr="50px" height="100%" width="100%" justifyContent="center" style={{opacity: loading ? 0 : 1}}>
            <ProgramList show={showProgramList} channelId={channel._id} channelName={channel.name} programs={programs} />
            <PlayerStyles.Container>
              <VideoPlayer url={channelLiveUrl} />
              <BottomButtons handleProgramList={handleProgramList} isFavorite={channel.isFavorite} handleFavorite={handleFavorite} />
            </PlayerStyles.Container>
          </Flex>
        </HorizontalList>
      </Navigation>
    </>
  )
}

export default Player