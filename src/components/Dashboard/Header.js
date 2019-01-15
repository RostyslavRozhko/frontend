import React, { useRef } from 'react'
import { HorizontalList } from '../../react-keys'
import FocusItem from '../FocusItem'

import Header from '../../styles/Header'

const HeaderComponent = (props) => {
  const channels = useRef(null)
  const favorites = useRef(null)
  const profile = useRef(null)

  const buttons = {
    channels, favorites, profile
  }

  const handleClick = (type) => {
    props.setContent(type)
    Object.keys(buttons).map((key) => {
      return buttons[key].current.classList.remove('active')
    })
    buttons[type].current.classList.add('active')
  }

  return (
    <HorizontalList>
      <Header>
        <Header.ItemsContainer>
          <FocusItem>
            <Header.Item ref={channels} onClick={() => handleClick('channels')}>Channels</Header.Item>
          </FocusItem>
          <FocusItem>
            <Header.Item ref={favorites} onClick={() => handleClick('favorites')}>Favorites</Header.Item>
          </FocusItem>
          <FocusItem>
            <Header.Item ref={profile} onClick={() => handleClick('profile')}>Profile</Header.Item>
          </FocusItem>
        </Header.ItemsContainer>
      </Header>
    </HorizontalList>
  )
}

export default HeaderComponent