import React, { useState, useEffect } from 'react'

import MobileHeader from '../MobileHeader/index'
import DesktopHeader from '../DesktopHeader/index'

import LeftColumn from '../LeftColumn/index'
import MiddleColumn from '../MiddleColumn/index'
import RightColumn from '../RightColumn/index'

import { Container } from './styles'

const Layout: React.FC = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <Container>
      <MobileHeader />
      <DesktopHeader />

      <main style={{marginTop: "60px"}}>
        <LeftColumn isLoading={isLoading} />
        <MiddleColumn isLoading={isLoading} />
        <RightColumn isLoading={isLoading} />
      </main>
    </Container>
  )
}

export default Layout