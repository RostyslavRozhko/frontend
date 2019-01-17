import styled from 'styled-components'
import { space, width, display, alignItems, alignContent, justifyContent, flexWrap, flexDirection, flex, height, textAlign } from 'styled-system'

const Flex = styled.div`
  display: flex;
  ${alignItems};
  ${alignContent};
  ${justifyContent};
  ${flexWrap};
  ${flexDirection};
  ${height};
  ${space};
  ${width};
  ${textAlign};
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