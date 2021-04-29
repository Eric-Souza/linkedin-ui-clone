import React from 'react'

import MobileHeader from '../MobileHeader/index'

import LeftColumn from '../LeftColumn/index'
import MiddleColumn from '../MiddleColumn/index'
import RightColumn from '../RightColumn/index'

import { Container } from './styles'

const Layout: React.FC = () => {
  return (
    <Container>
      <MobileHeader />

      <main>
        <LeftColumn />
        <MiddleColumn />
        <RightColumn />
      </main>
    </Container>
  )
}

export default Layout