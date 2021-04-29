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
              <span className="subtext">1 day ago • 123 readers</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">React development</span>
              <span className="subtext">1 day ago • 456 readers</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Typescript development</span>
              <span className="subtext">2 day ago • 789 readers</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">LinkedIn</span>
              <span className="subtext">3 day ago • 101 readers</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">UI</span>
              <span className="subtext">4 day ago • 121 readers</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Clone</span>
              <span className="subtext">5 day ago • 141 readers</span>
            </span>
          </li>
        </ul>
      </Panel>
    </Container>
  )
}

export default TrendingPanel
