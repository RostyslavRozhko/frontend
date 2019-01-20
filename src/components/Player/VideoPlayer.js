import React, { useRef } from 'react'
import ReactPlayer from 'react-player'

const VideoPlayer = (props) => {
  const player = useRef(null)

  const onDuration = (value) => {
    console.log(value)
    
  }

  return (
    <ReactPlayer
      onDuration={onDuration}
      ref={player}
      url={props.url}
      width="100%"
      height="auto"
      // playing 
      controls
    />
  )
}

export default VideoPlayer