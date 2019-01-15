import React, { useRef } from 'react'
import ReactPlayer from 'react-player'

import Player from '../../styles/Player'
import BottomButtons from './BottomButtons'

const VideoPlayer = (props) => {
  const playerRef = useRef(null)

  return (
    <Player.Container>
      <ReactPlayer
        ref={playerRef}
        url={props.url}
        width={900}
        height={506}
        playing 
        controls 
      />
      <BottomButtons player={playerRef.current} />
    </Player.Container>
  )
}

export default VideoPlayer