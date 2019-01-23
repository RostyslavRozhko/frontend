import React, { useState } from 'react'
import { VerticalList } from '../../react-keys'
import Header from './Header'
import ChannelsList from './ChannelsList'
import FavoritesList from './FavoritesList'
import Profile from './Profile'

import Layout from '../../styles/Layout'
const { Flex } = Layout

const Dashboard = () => {
  const [contentType, setContent] = useState('channels')

  let content

  switch(contentType) {
    case 'channels':
      content = <ChannelsList />
      break
    case 'favorites':
      content = <FavoritesList />
      break
    case 'profile':
      content = <Profile />
      break
    default:
      content = <ChannelsList />
  }

  return (
    <Navigation>
      <Flex flexDirection="column" >
        <VerticalList >
          <Header setContent={setContent} />
          {content}
        </VerticalList>
      </Flex>
    </Navigation>
  )
}

export default Dashboard