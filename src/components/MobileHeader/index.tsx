import React from 'react';

import { Container, ProfileCircle, SearchInput, MessageIcon } from './styles';

const MobileHeader: React.FC = () => {
  const imgSrc = "https://media-exp1.licdn.com/dms/image/C4D03AQHv386XtaLKdg/profile-displayphoto-shrink_200_200/0/1593352575374?e=1625097600&v=beta&t=cOXl2NB6ibBjj6Ul17FAecDZMr7TrPWXC5Cfwd4CyCc"

  return (
    <Container>
      <ProfileCircle src={imgSrc} />

      <SearchInput placeholder="Search" />
      <MessageIcon />
    </Container>
  )
}

export default MobileHeader;