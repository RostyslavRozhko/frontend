import React from 'react'
import Navigation, { VerticalList } from '../../react-keys'
import { useFormState } from 'react-use-form-state';
import FocusItem from '../FocusItem'
import { withRouter } from "react-router";

import Input from '../../styles/Input'
import Layout from '../../styles/Layout'
import Text from '../../styles/Text'

import userApi from '../../api/userAPI'

const { Flex } = Layout
const { H1 } = Text

const Login = (props) => {
  const [formState, { email, password }] = useFormState();

  const handleSubmit = async () => {
    const {email, password} = formState.values
    await userApi.login(email, password)
    props.history.push('/dashboard')
  }

  return (
    <Flex justifyContent="space-around" alignItems="center" height="100%" >
      <Navigation>
        <VerticalList>
          <Flex flexDirection='column'>
            <H1>Login</H1>
                <FocusItem>
                  <Input type="email" mb="20px" placeholder="Your email" {...email('email')} required />
                </FocusItem>
                <FocusItem>
                  <Input type="password" mb="20px" placeholder="Your password" {...password('password')} required minLength="6" />
                </FocusItem>
                <FocusItem>
                  <Input.Button onClick={handleSubmit}>Увійти</Input.Button>
                </FocusItem>
          </Flex>
        </VerticalList>
      </Navigation>
      <Flex>
      </Flex>
    </Flex>
  )
}

export default withRouter(Login)