import React, { useEffect, useState } from 'react'
import planAPI from '../../api/planAPI'
import billingAPI from '../../api/billingAPI'
import Package from './Package'
import Navigation, { HorizontalList } from '../../react-keys'

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
    <Navigation>
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
        <Flex flexDirection="column" alignItems="center" justifyContent="space-around">
          <Text sub fontSize="28px">Still Have Questions?</Text>
          <Text sub fontSize="28px">(888) 720-0928</Text>
        </Flex>
      </Flex>
    </Navigation>
  )
}

export default Join