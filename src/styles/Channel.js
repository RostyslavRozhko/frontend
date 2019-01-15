import styled from 'styled-components'
import colors from './colors'
import { width } from 'styled-system'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin-bottom: 20px;
`
const Grid = styled.div`
  display: flex;
`

const Category = styled.div`
  display: flex;
  align-items: center;
  height: 270px;
  overflow: scroll;
`

const Image = styled.img`
  ${width}
  transition: width 0.1s;
`

const Name = styled.div`
  text-align: center;
  font-size: 24px;
  text-align: center;
  color: ${colors.white};
  display: none;
`

const Channel = styled.div`
  display: inline-block;
  margin-right: 50px;

  &.active, &:hover {
    ${Image} {
      width: 350px;
    }

    ${Name} {
      display: block;
    }
  }
`

Channel.Container = Container
Channel.Category= Category
Channel.Name = Name
Channel.Image = Image
Channel.Grid = Grid

export default Channel