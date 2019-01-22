import React from 'react'
import Navigation, { VerticalList } from '../../react-keys'
import { useFormState } from 'react-use-form-state';
import FocusItem from '../FocusItem'
import { withRouter } from "react-router";
import { useModal } from '../Modal/useModal'

import Input from '../../styles/Input'
import Layout from '../../styles/Layout'
import Text from '../../styles/Text'

import userApi from '../../api/userAPI'

const { Flex } = Layout
const { H1 } = Text

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
    <Flex justifyContent="space-around" alignItems="center" height="100%" >
      <Navigation>
        <form>
          <VerticalList>
            <Flex flexDirection='column'>
              <H1>Login</H1>
                  <FocusItem>
                    <Input type="email" mb="20px" placeholder="Your email" {...email('email')} required  autoComplete="username" />
                  </FocusItem>
                  <FocusItem>
                    <Input type="password" mb="20px" placeholder="Your password" {...password('password')} required minLength="6" autoComplete="current-password" />
                  </FocusItem>
                  <FocusItem>
                    <Input.Button width="100%" onClick={handleSubmit}>Увійти</Input.Button>
                  </FocusItem>
            </Flex>
          </VerticalList>
        </form>
      </Navigation>
      <Flex>
      </Flex>
    </Flex>
  )
}

export default withRouter(Login)