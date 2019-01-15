import styled from 'styled-components'
import colors from './colors'
import { space } from 'styled-system'


const H1 = styled.h1`
  font-size: 36px;
  color: ${colors.white};
  font-weight: normal;
  margin-top: 0;
  margin-bottom: 50px;
  ${space}
`

const H2 = styled.h1`
  font-size: 28px;
  color: ${colors.opacityFontColor};
  font-weight: normal;
  margin-top: 0;
  margin-bottom: 20px;
  ${space}
`

const Text = {
  H1,
  H2
}

export default Text