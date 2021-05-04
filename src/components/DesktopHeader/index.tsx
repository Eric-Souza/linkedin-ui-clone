import React from 'react'

import { 
  Container, 
  Wrapper, 
  LinkedInIcon, 
  SearchInput, 
  HomeIcon, 
  NotificationsIcon, 
  ProfileCircle, 
  CaretDownIcon 
} from './styles'

const DesktopHeader: React.FC = () => {
  return (
    <Container>
      <Wrapper>
          <div className="left">
            <LinkedInIcon />
            <SearchInput placeholder="Search" />
          </div>

          <div className="right">
            <nav>
              <button className="active">
                <HomeIcon />
                <span>Home</span>
              </button>

              <button>
                <NotificationsIcon />
                <span>Notifications</span>
              </button>

              <button>
                <ProfileCircle src="https://media-exp1.licdn.com/dms/image/C4D03AQHv386XtaLKdg/profile-displayphoto-shrink_200_200/0/1593352575374?e=1625097600&v=beta&t=cOXl2NB6ibBjj6Ul17FAecDZMr7TrPWXC5Cfwd4CyCc" />

                <span>
                  Me <CaretDownIcon />
                </span>
              </button>
            </nav>
          </div>
      </Wrapper>
    </Container>
  )
}

export default DesktopHeader