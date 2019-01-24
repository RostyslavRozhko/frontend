import React from 'react'

import Layout from '../styles/Layout'
import Text from '../styles/Text'

const { Flex } = Layout

const PhoneNumber = (props) => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Text sub fontSize="26px">{props.text || 'Still Have Questions?'}</Text>
      <Text sub fontSize="26px">(888) 720-0928</Text>
    </Flex>
  )
}

export default PhoneNumber