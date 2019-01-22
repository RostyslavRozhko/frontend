import React, { useState, useEffect } from 'react'
import userAPI from '../../api/userAPI'
import { withRouter } from 'react-router-dom'
import { VerticalList } from '../../react-keys'
import FocusItem from '../FocusItem';
import moment from 'moment'

import ProfileStyles from '../../styles/Profile'
import Button from '../../styles/Button'
import Text from '../../styles/Text'
import Layout from '../../styles/Layout'

const { Flex } = Layout

const Profile = (props) => {
  const [user, setUser] = useState({})
  const [plan, setPlan] = useState({})

  useEffect(() => {
    getUser()
    getPlan()
  }, {})

  const getUser = async () => {
    const user = await userAPI.getUser()
    setUser(user)
  }

  const getPlan = async () => {
    const plan = await userAPI.getPlan()
    setPlan(plan)
  }

  const logout = async () => {
    await userAPI.logout()
    props.history.push('/')
  }

  return (
    <ProfileStyles.Container>
      <Flex flexDirection="column" alignItems="center" flex="2">
        <ProfileStyles.Image />
        <ProfileStyles.Box mt="50px;">
          <Text primary>{`${user.name} ${user.lastname}`}</Text>
          <Text sub>{user.email}</Text>
        </ProfileStyles.Box>
        <Flex flexDirection="column" mt="100px" alignItems="center">
          <Text sub fontWeight="bold">MEDIACAST, LLC</Text>
          <Text sub>support@mediacast.tv</Text>
          <Text sub>(888) 720-0928</Text>
        </Flex>
      </Flex>
      <Flex flexDirection="column" alignItems="center" flex="3">
        <Flex flexDirection="row">
          <Flex flexDirection="column" alignItems="flex-end">
            <Text primary>Current plan:</Text>
            <Text primary>Plan price:</Text>
            <Text primary>Plan start date:</Text>
            <Text primary>Next billing date:</Text>
            <Text primary>Days left:</Text>
          </Flex>
          <ProfileStyles.Box alignItems="flex-start" ml="30px">
            <Text primary fontWeight="bold">{plan.name}</Text>
            <Text primary fontWeight="bold">199.00 USD</Text>
            <Text primary fontWeight="bold">{moment(plan.start).format("DD/MM/YYYY")}</Text>
            <Text primary fontWeight="bold">{moment(plan.end).format("DD/MM/YYYY")}</Text>
            <Text primary fontWeight="bold">{moment(plan.end).diff(moment(), 'days')}</Text>
          </ProfileStyles.Box>
        </Flex>
        <Flex flexDirection="column" mt="100px" width="100%">
          <VerticalList width="100%">
            <Flex flexDirection="column" textAlign="center">
              <FocusItem>
                <Button>Change timezone</Button>
              </FocusItem>
              <FocusItem>
                <Button>Customer Agreement</Button>
              </FocusItem>
              <FocusItem>
                <Button>Privacy Policy</Button>
              </FocusItem>
              <FocusItem>
                <Button onClick={logout}>Logout</Button>
              </FocusItem>
            </Flex>
          </VerticalList>
        </Flex>
      </Flex>
    </ProfileStyles.Container>
  )
}

export default withRouter(Profile)