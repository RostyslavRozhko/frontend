import styled, { css } from 'styled-components'
import colors from './colors'
import { space, fontWeight, fontSize } from 'styled-system'


const H1 = styled.h1`
  font-size: 36px;
  color: ${colors.white};
  font-weight: normal;
  margin-top: 0;
  margin-bottom: 50px;
  ${space};
  ${fontSize};
`

const H2 = styled.h2`
  font-size: 28px;
  color: ${colors.opacityFontColor};
  font-weight: normal;
  margin-top: 0;
  margin-bottom: 20px;
  ${space}
  ${fontSize};
`

const Text = styled.div`
  ${props => props.primary && css`
    color: ${colors.white};
    font-size: 28px;
  `}

  ${props => props.sub && css`
    color: ${colors.white};
    font-size: 22px;
    opacity: 0.7;
  `}

  ${fontWeight};
  ${fontSize};
  ${space};
`

Text.H1 = H1
Text.H2 = H2

export default Text