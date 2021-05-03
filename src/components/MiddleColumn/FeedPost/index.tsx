import React from 'react';

import Panel from '../../Panel';

import { Container, Row, PostImage, Separator, Avatar, Column, LikeIcon, CommentIcon, ShareIcon, SendIcon, } from './styles';

const FeedPost: React.FC = () => {
  return (
    <Panel>
      <Container>
        <Row className="heading">
          <Avatar 
            src="https://banner2.cleanpng.com/20180410/dbq/kisspng-react-javascript-responsive-web-design-github-angu-github-5accac24ced243.4761515415233628528472.jpg" 
            alt="React logo" 
          />

          <Column>
            <h3>LinkedIn</h3>
            <h4>React UI Clone</h4>
            <time>2 weeks</time>
          </Column>
        </Row>

        <PostImage
          src="https://cdn.wallpapersafari.com/92/8/DMFyk9.jpg"
          alt="Nature wallpaper"
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
