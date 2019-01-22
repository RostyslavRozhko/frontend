import styled from 'styled-components'
import colors from './colors'

const Modal = styled.div``

const Title = styled.div`
  color: ${colors.white};
  font-size: 38px;
  text-align: center;
`

const Body = styled.div`
  color: ${colors.white};
  font-size: 18px;
  text-align: center;
  margin: 30px 0;
`

Modal.Title = Title
Modal.Body = Body

export default Modal