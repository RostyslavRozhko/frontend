import styled from 'styled-components'
import colors from './colors'

const List = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  padding-right: 60px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0;
`

const Text = styled.div`
  color: ${colors.white};
  font-size: 24px;
`

const Time = styled(Text)`
  margin-right: 30px;
`

const Title = styled(Text)``

const Program = styled.div`
  display: flex;
  padding: 15px;
  align-items: center;
  margin-bottom: 5px;
  cursor: pointer;

  &.active, &:hover {
    background: ${colors.white};
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.3);
    border-radius: 8px;

    ${Text} {
      color: ${colors.black}
    }
  }
`

Program.List = List
Program.Container = Container
Program.Time = Time
Program.Title = Title

export default Program