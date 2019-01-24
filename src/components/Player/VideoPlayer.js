import React, { useRef, useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import KeyboardEventHandler from 'react-keyboard-event-handler';
import Player from '../../styles/Player'
import { ReactComponent as MuteIcon } from '../../assets/mute.svg'
import { ReactComponent as VolumeIcon } from '../../assets/volume.svg'
import { ReactComponent as PlayIcon } from '../../assets/play.svg'
import { ReactComponent as PauseIcon } from '../../assets/pause.svg'
import { ReactComponent as FullIcon } from '../../assets/full.svg'
import { ReactComponent as NoFullIcon } from '../../assets/nofull.svg'
import { ReactComponent as PIPIcon } from '../../assets/pip.svg'

const VideoPlayer = (props) => {
  const video = useRef(null)
  const player = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [fullscreen, setFullscreen] = useState(false)
  const [volume, setVolume] = useState(100)
  const [muted, setMuted] = useState(false)
  const [pip, setPIP] = useState(false)

  const canPlayPIP = ReactPlayer.canEnablePIP(props.url)
  console.log(canPlayPIP)

  const onReady = () => {
    props.stopLoading()
  }

  const handlePlaying = () => {
    setPlaying(!playing)
  }


  const handleFullscreen = () => {
    const play = player.current
    if(!fullscreen) {
      if (play.requestFullscreen) {
        play.requestFullscreen()
      } else if (play.webkitRequestFullScreen) {
        play.webkitRequestFullScreen()
      } else if (play.mozRequestFullScreen) {
        play.mozRequestFullScreen()
      } else if (play.msRequestFullscreen) {
        play.msRequestFullscreen()
      }  
      setFullscreen(true)
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
      } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
      }
      setFullscreen(false)
    }
  }

  const handleError = (e) => {
    console.log(e)
  }

  const onPlay = () => {
    console.log('play')
  }

  const handleKeys = (key, e) => {
    switch(key) {
      case 'space': 
        handlePlaying()
        break
      case 'f':
        handleFullscreen()
        break
      case 'm':
        setMuted(!muted)
        break
      case 'esc':
        setFullscreen(false)
        break
      default: 
    }
  }

  const handleVolume = (e) => {
    const value = parseInt(e.target.value)
    setVolume(value)
    if (muted) {
      setMuted(false)
    }
    if(value === 0) {
      setMuted(true)
    }
  }

  return (
    <>
      <KeyboardEventHandler
        handleKeys={['space', 'm', 'f', 'esc']}
        onKeyEvent={handleKeys} >
      </KeyboardEventHandler>
      <Player ref={player}
        onDoubleClick={handleFullscreen}
      >
        <ReactPlayer
          ref={video}
          url={props.url}
          width="100%"
          height="auto"
          onReady={onReady}
          playing={playing}
          volume={volume/100}
          muted={muted}
          onError={handleError}
          onPlay={onPlay}
          playsinline={true}
          pip={pip}
          onDisablePIP={() => setPIP(false)}
        />
        <Player.Controls>
          <Player.ButtonGroup>
            <Player.Button onClick={handlePlaying}>{playing ? <PauseIcon /> : <PlayIcon />}</Player.Button>
            <Player.Volume>
              <Player.Button onClick={() => setMuted(!muted)}>{muted ? <MuteIcon /> : <VolumeIcon />}</Player.Button>
              <Player.Slider value={volume} onChange={handleVolume} type="range" min="0" max="100" />
            </Player.Volume>
          </Player.ButtonGroup>
          <Player.ButtonGroup>
            {canPlayPIP && <Player.Button onClick={() => setPIP(true)}><PIPIcon /></Player.Button>}
            <Player.Button onClick={handleFullscreen}>{fullscreen ? <NoFullIcon /> : <FullIcon />}</Player.Button>
          </Player.ButtonGroup>
        </Player.Controls>
      </Player>
    </>
  )
}

export default VideoPlayer