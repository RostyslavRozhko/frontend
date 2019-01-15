import styled from 'styled-components'
import colors from './colors'

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  backdrop-filter: blur(40px);
  background-color: ${colors.opacityWhiteDarker};
  height: 100px;
`

const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
`

const Item = styled.div`
  flex: 1;
  font-size: 24px;
  color: ${colors.white};
  opacity: 0.4;
  cursor: pointer;
  user-select: none;

  &.active, &:focus, &:hover {
    opacity: 1
  }
`

Header.Item = Item
Header.ItemsContainer = ItemsContainer

export default Header