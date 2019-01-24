import React from 'react'
import { VerticalList } from '../../react-keys'
import FocusItem from '../FocusItem'
import { withRouter } from 'react-router-dom'
import PhoneNumber from '../PhoneNumber'

import { ReactComponent as SuccessIcon } from '../../assets/success.svg'
import Button from '../../styles/Button'
import Layout from '../../styles/Layout'
import Text from '../../styles/Text'

const { Flex } = Layout
const { H1 } = Text

const ThanksPage = (props) => {
  return (
    <Flex flexDirection="column" alignItems="center" p="100px 0" justifyContent="space-around" height="100%">
      <Flex flexDirection="column" alignItems="center">
        <SuccessIcon />
        <H1 mb="0" mt="20px">Thank you for your subscription!</H1>
        <H1>Please enjoy watching!</H1>
      </Flex>
      <VerticalList>
        <Flex flexDirection="column" alignItems="center">
            <FocusItem forceFocus={true}>
              <Button onClick={() => props.history.push('/dashboard')} mb="10px">Go to TV Channels</Button>
            </FocusItem>
            <FocusItem>
              <Button>Return to Profile</Button>
            </FocusItem>
        </Flex>
      </VerticalList>
      <PhoneNumber />
    </Flex>
  )
}

export default withRouter(ThanksPage)