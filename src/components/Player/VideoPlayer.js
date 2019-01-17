import React from 'react'
import ReactPlayer from 'react-player'

const VideoPlayer = (props) => {
  return (
    <ReactPlayer
      url={props.url}
      width="100%"
      height="auto"
      playing 
      controls
    />
  )
}

export default VideoPlayer