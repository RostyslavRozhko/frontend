import styled from 'styled-components'
import colors from './colors'

const Controls = styled.div`
  position: absolute;
  bottom: -46px;
  height: 46px;
  width: 100%;
  background: ${colors.opacityWhiteDarker};
  transition: bottom 0.2s;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  background: linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0));
`

const Button = styled.div`
  cursor: pointer;
  font-size: 24px;
  color: ${colors.white};
  user-select: none;
  padding: 0 10px;
`

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5px;
`

const Player = styled.div`
  position: relative;
  font-size: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;

  &:fullscreen { 
    width: 100%;
  }
  
  &:hover { 
    ${Controls} {
      bottom: 0px;
    }
  }
`

const Slider = styled.input`
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s linear 300ms, opacity 300ms;
`

const Volume = styled(Button)`
  display: flex;

  &:hover {
    ${Slider} {
      visibility: visible;
      opacity: 1;
      transition: visibility 0s linear 0s, opacity 300ms;
    }
  }
`

Player.Controls = Controls
Player.Button = Button
Player.Volume = Volume
Player.Slider = Slider
Player.ButtonGroup = ButtonGroup

export default Player