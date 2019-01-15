import React, { useRef, useEffect } from 'react'
import { HorizontalList } from '../../react-keys'
import FocusItem from '../FocusItem'

import Layout from '../../styles/Layout'
import Button from '../../styles/Button'

const { Flex } = Layout

const BottomButtons = (props) => {
  const fullscreenButtonRef = useRef(null)

  useEffect(() => {
    fullscreenButtonRef.current.focus()
  }, {})

  const handleFullscreen = () => {
    const player = props.player.getInternalPlayer()
    if(typeof player.requestFullscreen !== "undefined") {
      player.requestFullscreen()
    } else {
      player.webkitIsFullScreen()
    }
  }

  return (
    <Flex alignItems="center" justifyContent="center" mt="40px">
      <HorizontalList>
        <FocusItem>
          <Button.PlayerButton ref={fullscreenButtonRef} onClick={handleFullscreen}>📺</Button.PlayerButton>
        </FocusItem>
        <FocusItem>
          <Button.PlayerButton>📅</Button.PlayerButton>
        </FocusItem>
        <FocusItem>
          <Button.PlayerButton>❤️</Button.PlayerButton>
        </FocusItem>
      </HorizontalList>
    </Flex>
  )
}

export default BottomButtons