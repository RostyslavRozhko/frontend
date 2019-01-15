import styled from 'styled-components'
import { space, display, alignItems, alignContent, justifyContent, flexWrap, flexDirection, flex, height } from 'styled-system'

const Flex = styled.div`
  display: flex;
  ${alignItems};
  ${alignContent};
  ${justifyContent};
  ${flexWrap};
  ${flexDirection};
  ${height};
  ${space}
`

const Box = styled.div`
  ${space};
  ${display};
  ${flex};
`

const Layout = {
  Flex,
  Box
}

export default Layout