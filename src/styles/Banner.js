import styled from 'styled-components'
import { width } from 'styled-system'

const Banner = styled.img`
  margin: 0 5px;
  height: 500px;
  ${width};
  object-fit: cover;
  scroll-behavior: smooth;

  &.active {
  }
`

const Container = styled.div`
  display: flex;
  margin: 20px 0;
  overflow: hidden;
  margin-bottom: 40px;
  transition: transform 1s;
`

Banner.Container = Container

export default Banner