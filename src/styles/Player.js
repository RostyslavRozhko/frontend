import styled from 'styled-components'

const Player = styled.div`
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% - 250px);
`

Player.Container = Container

export default Player