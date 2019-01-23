import React from 'react'
import { VerticalList } from '../../react-keys'
import { useFormState } from 'react-use-form-state';
import FocusItem from '../FocusItem'
import { withRouter } from "react-router";
import { useModal } from '../Modal/useModal'
import { FormattedMessage } from 'react-intl'

import Input from '../../styles/Input'
import Layout from '../../styles/Layout'
import Text from '../../styles/Text'

import userApi from '../../api/userAPI'

const { Flex, Box } = Layout
const { H1, H2 } = Text

const Login = (props) => {
  const [formState, { email, password }] = useFormState()
  const [showModal] = useModal('ERROR')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const {email, password} = formState.values
    await userApi.login(email, password)
      .then(res => props.history.push('/dashboard'))
      .catch(err => showModal({
        title: 'Дані авторизації не вірні!',
        body: 'Будь ласка, повторіть спробу! Якщо Ви забули пароль - скористайтесь формою відновлення паролю.',
        button: 'Гаразд!'
      }))
    
  }

  return (
    <VerticalList>
      <Flex flexDirection='column' alignItems="center" justifyContent="space-around" height="100%" p="50px 0">
        <Flex flexDirection="column" alignItems="center">
          <H1><FormattedMessage id="auth.signInWith"></FormattedMessage></H1>
          <H2><FormattedMessage id="auth.fillTheDataBelow"></FormattedMessage></H2>
        </Flex>
          <form>
              <Flex flexDirection="column" alignItems="center">
                <FocusItem forseFocus={true}>
                  <Input type="email" mb="10px" placeholder="Your email" {...email('email')} required  autoComplete="username" />
                </FocusItem>
                <FocusItem>
                  <Input type="password" mb="10px" placeholder="Your password" {...password('password')} required minLength="6" autoComplete="current-password" />
                </FocusItem>
                <FocusItem>
                  <Input.Button mt="20px" width="100%" onClick={handleSubmit}><FormattedMessage id="auth.signin"></FormattedMessage></Input.Button>
                </FocusItem>
              </Flex>
          </form>
        <Flex flexDirection="column" alignItems="center" justifyContent="space-around">
          <FocusItem>
            <Input.Button width="100%" mb="20px"><FormattedMessage id="auth.forgotPassword"></FormattedMessage></Input.Button>
          </FocusItem>
          <Text sub fontSize="26px">Problems with signing in?</Text>
          <Text sub fontSize="26px">(888) 720-0928</Text>
        </Flex>
      </Flex>
    </VerticalList>
  )
}

export default withRouter(Login)