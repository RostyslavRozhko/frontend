import React from 'react'
import { ScaleLoader } from 'react-spinners';

import LoaderStyles from '../styles/Loader'

const Loader = (props) => {
  return (
    <LoaderStyles.Container>
      <ScaleLoader 
        height={100}
        width={10}
        margin="5px"
        radius={25}
        color={"#fff"}
      />
    </LoaderStyles.Container>
  )
}

export default Loader