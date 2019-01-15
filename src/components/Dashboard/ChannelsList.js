import React, { useState, useEffect } from 'react'
import BannerList from './BannerList'
import channelAPI from '../../api/channelAPI'
import { normalizeObject } from '../../utils/data'
import CategoryList from './CategoryList'

import Layout from '../../styles/Layout'
import Channel from '../../styles/Channel'
const { Flex } = Layout


const ChannelsList = () => {
  const [channelsWithCategories, setChannels] = useState({})

  useEffect(() => {
    getChannels()
  }, {})

  const getChannels = async () => {
    const categories = await channelAPI.getCategories().then(response => normalizeObject(response.data.categories, '_id'))
    const channels = await channelAPI.getAllChannels().then(response => response.data.channels)

    let channelsWithCategories = {}
    
    channels.map(channel => {
      const name = categories[channel.category_id].name
      if(!channelsWithCategories[name]) {
        channelsWithCategories[name] = []
      } else {
        channelsWithCategories[name].push(channel)
      }
      return channelsWithCategories[name]
    }, {})

    setChannels(channelsWithCategories)
  }

  return (
    <Flex flexDirection="column">
      {/* <BannerList /> */}
      <Channel.Container>
        {Object.keys(channelsWithCategories).map((category, i) =>
          channelsWithCategories[category].length > 0 && <CategoryList key={i} title={category} items={channelsWithCategories[category]} />
        )}
      </Channel.Container>
    </Flex>
  )
}

export default ChannelsList