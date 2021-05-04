import React from 'react'

import Panel from '../../Panel'

import { Container } from './styles'

const TrendingPanel: React.FC = () => {
  return (
    <Container>
      <Panel>
        <span className="title">Trending topics</span>

        <ul>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Software Engineering</span>
              <span className="subtext">1d • 34 readers</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">React development</span>
              <span className="subtext">2d • 19 readers</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Typescript development</span>
              <span className="subtext">3d • 67 readers</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">LinkedIn</span>
              <span className="subtext">4d • 25 readers</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">UI</span>
              <span className="subtext">5d • 92 readers</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Clone</span>
              <span className="subtext">6d • 34 readers</span>
            </span>
          </li>
        </ul>
      </Panel>
    </Container>
  )
}

export default TrendingPanel
