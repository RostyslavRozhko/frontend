import React, { useEffect, useRef, useState } from 'react'
import { HorizontalList } from '../../react-keys'
import FocusItem from '../FocusItem'
import config from '../../config'
import { withRouter } from "react-router";

import Channel from '../../styles/Channel'
import Layout from '../../styles/Layout'
import Text from '../../styles/Text'

const { H2 } = Text
const { Flex } = Layout

const CategoryList = (props) => {
  const imageWidth = 300

  const containerRef = useRef(null)

  const [lastFocus, setLastFocus] = useState(0)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const width = (Math.floor(containerRef.current.scrollWidth /  containerRef.current.clientWidth ) * containerRef.current.clientWidth) + containerRef.current.clientWidth

    setWidth(width)
  }, {})

  const onFocus = (index) => {
    if (lastFocus === index) {
      return;
    }

    const offsetWidth = imageWidth + 50
    containerRef.current.scrollLeft = offsetWidth * index

    setLastFocus(index)
  }

  const handleClick = (channelId) => {
    props.history.push(`/dashboard/${channelId}`)
  }

  return (
    <Flex flexDirection="column">
      <H2 fontSize="28px" mb="5px" mt="5px">{props.title}</H2>
      <Channel.Category ref={containerRef} >
        <HorizontalList style={{width, display: 'flex', alignItems: 'center'}} 
          onFocus={(index) => onFocus(index)}
          onBlur={() => setLastFocus(0)}
          retainLastFocus={true} >
          { props.items.map((channel, i) => 
            <FocusItem key={i} >
              <Channel onClick={() => handleClick(channel.ch_id)}>
                <Channel.Image width={imageWidth} src={`${config.api.url}/${channel.logo}`} />
                <Channel.Name>{channel.name}</Channel.Name>
              </Channel>
            </FocusItem>
          ) }
        </HorizontalList>
      </Channel.Category>
    </Flex>
  )
}

export default withRouter(CategoryList)