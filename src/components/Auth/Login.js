import React from 'react'
import { VerticalList } from '../../react-keys'
import { useFormState } from 'react-use-form-state';
import FocusItem from '../FocusItem'
import { withRouter } from "react-router";
import { useModal } from '../Modal/useModal'
import { FormattedMessage } from 'react-intl'
import userApi from '../../api/userAPI'
import PhoneNumber from '../PhoneNumber';

import Input from '../../styles/Input'
import Layout from '../../styles/Layout'
import Text from '../../styles/Text'


const { Flex, Box } = Layout
const { H1, H2 } = Text

const Login = (props) => {
  const [formState, { email, password }] = useFormState()
  const [showModal] = useModal('ERROR')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const {email, password} = formState.values
    await userApi.login(email, password)
      .then(res => console.log(res))
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
                <FocusItem forceFocus={true}>
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
            <Input.Button onClick={() => props.history.push('/forgot')} width="100%" mb="20px"><FormattedMessage id="auth.forgotPassword"></FormattedMessage></Input.Button>
          </FocusItem>
          <PhoneNumber text="Problems with signing in?" />
        </Flex>
      </Flex>
    </VerticalList>
  )
}

export default withRouter(Login)