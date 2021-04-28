import React from 'react';

import Panel from '../../Panel';

import { Container, Row, PostImage, Separator, Avatar, Column, LikeIcon, CommentIcon, ShareIcon, SendIcon, } from './styles';

const FeedPost: React.FC = () => {
  return (
    <Panel>
      <Container>
        <Row className="heading">
          <Avatar src="http://www.w3.org/2000/svg" alt="LinkedIn" />

          <Column>
            <h3>LinkedIn</h3>
            <h4>UI Clone</h4>
            <time>2 sem</time>
          </Column>
        </Row>

        <PostImage
          src="https://wallpaperaccess.com/full/1579976.jpg"
          alt="Circuit"
        />

        <Row className="likes">
          <span className="circle blue" />
          <span className="circle green" />
          <span className="circle red" />
          <span className="number">28</span>
        </Row>

        <Row>
          <Separator />
        </Row>

        <Row className="actions">
          <button>
            <LikeIcon />
            <span>Gostei</span>
          </button>

          <button>
            <CommentIcon />
            <span>Comentar</span>
          </button>

          <button>
            <ShareIcon />
            <span>Compartilhar</span>
          </button>

          <button>
            <SendIcon />
            <span>Enviar</span>
          </button>
        </Row>
      </Container>
    </Panel>
  );
};

export default FeedPost;
