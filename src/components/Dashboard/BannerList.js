import React, { useEffect, useRef, useState } from 'react'
import { HorizontalList } from '../../react-keys'
import FocusItem from '../FocusItem'

import Banner from '../../styles/Banner'

const BannerList = () => {
  const containerRef = useRef(null)

  const [lastFocus, setLastFocus] = useState(0)
  const [width, setWidth] = useState(0)
  const [bannerWidth, setBannerWidth] = useState(0)

  const images = [
    'https://www.pakistaneo.com/wp-content/uploads/2018/01/beautiful-images-of-nature.jpg',
    'https://i.ytimg.com/vi/FZrqmg_bm7o/maxresdefault.jpg',
    'https://talkinnow.com/wp-content/uploads/2018/10/Xmas-Trees-Images.jpg',
  ]

  useEffect(() => {
    const width = (Math.floor(containerRef.current.scrollWidth /  containerRef.current.clientWidth ) * containerRef.current.clientWidth) + containerRef.current.clientWidth

    const bannerWidth = Math.floor(containerRef.current.clientWidth)

    setBannerWidth(bannerWidth - 80)
    setWidth(width)
  })

  const onFocus = (index) => {
    if (lastFocus === index) {
      return;
    }

    let offsetWidth = bannerWidth - 25

    if(index === images.length -1) {
      offsetWidth = bannerWidth
    }

    containerRef.current.scrollLeft = offsetWidth * index

    setLastFocus(index)
  }

  return (
    <Banner.Container ref={containerRef} >
      <HorizontalList style={{width, display: 'flex'}} 
        onFocus={(index) => onFocus(index)}
        onBlur={() => setLastFocus(0)} >
        { images.map((src, i) => 
          <FocusItem key={i} >
            <Banner width={bannerWidth} key={i} src={src} />
          </FocusItem>
        ) }
      </HorizontalList>
    </Banner.Container>
  )
}

export default BannerList