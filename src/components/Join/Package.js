import React from 'react'
import FocusItem from '../FocusItem'

import Join from '../../styles/Join'
import Text from '../../styles/Text'

const Package = (props) => {
  const fontSize = '18px'
  const { pack } = props

  let period
  switch(pack.period) {
    case 'yearly':
      period = 'One Year'
      break
    case 'monthly':
      period = 'One Month'
      break
    default: 
      period = 'Dont know'
  }

  return (
    <FocusItem forceFocus={true}>
      <Join.Package onClick={props.onClick}>
        <Join.Image />
        <Text primary mt="30px" fontSize="34px">{period}</Text>
        <Text sub fontSize={fontSize}>Subscription</Text>
        <Text sub mt="45px" fontSize={fontSize}>All Available Channels</Text>
        <Text sub fontSize={fontSize}>{pack.data.haveTrial.days} Days Archive</Text>
        <Text sub fontSize={fontSize}>13 HD Channels</Text>
        <Text sub fontSize={fontSize}>Any device</Text>
        <Text primary mt="15px" fontSize="34px">{pack.price} USD</Text>
      </Join.Package>
    </FocusItem>
  )
}

export default Package