import styled from 'styled-components'
import colors from './colors'
import { space, alignItems, flexDirection } from 'styled-system'

const Profile = styled.div``

const Container = styled.div`
  display: flex;
  margin: 50px;
  justify-content: space-around;
  align-items: center;
`

const Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.3);
  background: ${colors.lightGrey};
  ${flexDirection};
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${space};
  ${alignItems};
`

Profile.Container = Container
Profile.Image = Image;
Profile.Box = Box

export default Profile