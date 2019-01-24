import React, { useState, useEffect, useRef } from 'react'
import channelAPI from '../../api/channelAPI'
import FocusItem from '../FocusItem'
import config from '../../config'
import { withRouter } from 'react-router-dom'

import { Grid } from '../../react-keys'

import Channel from '../../styles/Channel'
import Text from '../../styles/Text'

const { H2 } = Text

const FavoritesList = (props) => {
  const imageWidth = 300
  const containerRef = useRef(null)

  const [channels, setChannels] = useState([])
  const [dimensions, setDimensions] = useState({rows: 4, columns: 4})

  useEffect(() => {
    getChannels()
    // window.addEventListener("resize", (e) => getDimensions(null, e))
    // return () => {
    //   window.removeEventListener("resize", () => getDimensions())
    // }
  }, {})

  const getDimensions = (countChannels) => {
    const screenWidth = containerRef.current.clientWidth

    const count = countChannels ? countChannels : channels.length

    const columns = Math.floor(screenWidth / (imageWidth + 50))
    const rows = Math.ceil(count / columns)

    setDimensions({rows, columns})
  }

  const getChannels = async () => {
    const channels = await channelAPI.getFavoritesChannels()
    
    getDimensions(channels.length)
    setChannels(channels)
  }

  const handleClick = (channelId) => {
    props.history.push(`/dashboard/${channelId}`)
  }

  return (
    <Channel.Container ref={containerRef}>
      <H2 fontSize="28px" mt="20px" mb="30px">Favorite Channels</H2>
      <Channel.Grid>
        <Grid rows={dimensions.rows} columns={dimensions.columns} rowHeight="270px" >
          {channels.map((channel, i) => 
            <FocusItem key={i}>
              <Channel onClick={() => handleClick(channel.ch_id)}>
                <Channel.Image width={imageWidth} src={`${config.api.url}/${channel.logo}`} />
                <Channel.Name>{channel.name}</Channel.Name>
              </Channel>
            </FocusItem>
          )}
        </Grid>
      </Channel.Grid>
    </Channel.Container>
  )
}

export default withRouter(FavoritesList)