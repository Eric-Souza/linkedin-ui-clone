import React from 'react';

import Panel from '../../Panel';

import { Container, HashtagIcon } from './styles';

const tags = ['LinkedIn', 'UI Clone', 'Node', 'React', 'Engineering'];

const HashtagPanel: React.FC = () => {
  return (
    <Container>
      <Panel>
        <span className="title">Followed hashtags</span>

        {tags.map(item => (
          <span className="tag">
            <HashtagIcon />
            
            {item}
          </span>
        ))}
      </Panel>
    </Container>
  );
};

export default HashtagPanel;
