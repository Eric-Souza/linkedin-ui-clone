import React, { useState, useEffect } from 'react'

import MobileHeader from '../MobileHeader/index'
import DesktopHeader from '../DesktopHeader/index'

import AdBanner from '../AdBanner/index'

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

      <span>
        {!isLoading && <AdBanner />}
      </span>

      <main>
        <LeftColumn isLoading={isLoading} />
        <MiddleColumn isLoading={isLoading} />
        <RightColumn isLoading={isLoading} />
      </main>
    </Container>
  )
}

export default Layout