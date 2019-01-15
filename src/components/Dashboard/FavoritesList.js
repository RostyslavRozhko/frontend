import React, { useState, useEffect, useRef } from 'react'
import channelAPI from '../../api/channelAPI'
import FocusItem from '../FocusItem'
import config from '../../config'

import { Grid } from '../../react-keys'

import Channel from '../../styles/Channel'
import Text from '../../styles/Text'

const { H1 } = Text

const FavoritesList = () => {
  const imageWidth = 300
  const containerRef = useRef(null)

  const [channels, setChannels] = useState([])
  const [dimensions, setDimensions] = useState({rows: 4, columns: 4})

  useEffect(() => {
    getChannels()
  }, {})

  const getDimensions = () => {
    const screenWidth = containerRef.current.clientWidth
    const countChannels = channels.length || 1

    console.log(countChannels)

    const rows = Math.floor(screenWidth / countChannels)
    const columns = Math.floor(countChannels / rows)

    console.log(rows, columns)
    setDimensions({rows, columns})
  }

  const getChannels = async () => {
    const channels = await channelAPI.getFavoritesChannels().then(response => response.data.favorites)
    
    setChannels(channels)
  }

  return (
    <Channel.Container ref={containerRef}>
      <H1 mt="50px" mb="30px">Favorite Channels</H1>
      <Channel.Grid>
        <Grid rows={dimensions.rows} columns={dimensions.columns} rowHeight="270px" >
          {channels.map((channel, i) => 
            <FocusItem key={i}>
              <Channel>
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

export default FavoritesList