import React, { useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import Player from '../../styles/Player'

const VideoPlayer = (props) => {
  const player = useRef(null)
  const [playing, setPlaying] = useState(false)

  const onReady = () => {
    props.stopLoading()
  }

  const handlePlaying = () => {
    setPlaying(!playing)
  }


  const handleFullscreen = () => {
    const play = player.current.getInternalPlayer()
    if (play.mozRequestFullScreen) {
      play.mozRequestFullScreen();
    } else if (play.webkitRequestFullScreen) {
      play.webkitRequestFullScreen();
    }  
  }

  return (
    <Player.Container>
      <ReactPlayer
        ref={player}
        url={props.url}
        width="100%"
        height="auto"
        onReady={onReady}
        playing={playing}
      >
      </ReactPlayer>
      <Player.Controls>
        <Player.Button onClick={handlePlaying}>⏯</Player.Button>
        <Player.Button onClick={handleFullscreen}>📺</Player.Button>
      </Player.Controls>
    </Player.Container>
  )
}

export default VideoPlayer