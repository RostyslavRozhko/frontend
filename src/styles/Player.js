import styled from 'styled-components'
import colors from './colors'

const Controls = styled.div`
  position: absolute;
  bottom: -60px;
  height: 60px;
  width: 100%;
  background: ${colors.opacityWhiteDarker};
  transition: bottom 0.2s;
  display: flex;
  align-items: center;
  padding: 0 30px;
  z-index: 2147483649;
`

const Container = styled.div`
  position: relative;
  overflow: hidden;
  background: ${colors.black};
  display: flex;
  align-items: center;
  
  &:hover { 
    ${Controls} {
      bottom: 0px;
    }
  }
`

const Button = styled.div`
  cursor: pointer;
  font-size: 32px;
`

const Player = styled.div`

`

Player.Container = Container
Player.Controls = Controls
Player.Button = Button

export default Player