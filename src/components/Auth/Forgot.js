import React, { useState } from 'react'
import { VerticalList } from '../../react-keys'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'
import userAPI from '../../api/userAPI'
import FocusItem from '../FocusItem'

import Layout from '../../styles/Layout'
import Text from '../../styles/Text'
import Input from '../../styles/Input'

const { Flex } = Layout
const { H1, H2 } = Text

const Forgot = () => {
  const [email, setEmail] = useState('')

  const resetPassword = () => {
    userAPI.resetPassword(email)
      .then(data => {
        
      })
      .catch(e => console.log(e.response))
  }
  return (
    <Flex flexDirection='column' alignItems="center" justifyContent="center" height="100%" p="50px 0">
      <Flex flexDirection="column" alignItems="center">
        <H1><FormattedMessage id="auth.forgotPassword"></FormattedMessage></H1>
        <H2><FormattedHTMLMessage id="auth.forgotPasswordInfo"></FormattedHTMLMessage></H2>
      </Flex>
      <VerticalList>
        <Flex flexDirection="column" alignItems="center" mt="60px">
          <FocusItem>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" mb="20px" placeholder="Your email" />
          </FocusItem>
          <FocusItem>
            <Input.Button onClick={resetPassword}><FormattedMessage id="auth.restoreButton"></FormattedMessage></Input.Button>
          </FocusItem>
        </Flex>
      </VerticalList>
    </Flex>
  )
}

export default Forgot