import React, { useEffect, useState } from 'react'
import planAPI from '../../api/planAPI'
import billingAPI from '../../api/billingAPI'
import Package from './Package'
import { HorizontalList } from '../../react-keys'
import PhoneNumber from '../PhoneNumber';

import Layout from '../../styles/Layout'
import Text from '../../styles/Text'

const { Flex } = Layout

const Join = (props) => {
  const [packages, setPackages] = useState([])

  useEffect(() => {
    getPackages()
  }, {})

  const getPackages = async () => {
    const packages = await planAPI.getPackages()
    
    setPackages(packages)
  }

  const handleClick = async (pack) => {
    const url = await billingAPI.getPaymentLink(pack.package_id)
    window.location.replace(url)
  }

  return (
    <Flex flexDirection="column" p="50px" alignItems="center" justifyContent="space-around" height="100%">
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Text primary>Subscribe</Text>
        <Text sub>Please select how would you like to subscribe</Text>
      </Flex>
      <Flex alignItems="center" justifyContent="center">
        <HorizontalList>
          {packages && packages.map(pack => <Package key={pack.package_id} pack={pack} onClick={() => handleClick(pack)} />)}
        </HorizontalList>
      </Flex>
      <PhoneNumber />
    </Flex>
  )
}

export default Join