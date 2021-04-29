import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>

        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQHv386XtaLKdg/profile-displayphoto-shrink_200_200/0/1593352575374?e=1625097600&v=beta&t=cOXl2NB6ibBjj6Ul17FAecDZMr7TrPWXC5Cfwd4CyCc"
          alt="Avatar"
          className="profile-picture"
        />

        <h1>Eric Souza</h1>
        <h2>Software Engineer</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Who saw your profile</span>
          <span className="value">123</span>
        </div>

        <div className="key-value">
          <span className="key">Who saw your publication</span>
          <span className="value">456</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
