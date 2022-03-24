import React, {useState} from 'react'
import styled from 'styled-components';

const sideIcons = [
    {
      name: 'home',
      link: '/',
      icon: 'https://img.icons8.com/fluency-systems-regular/96/8E8D91/home.png',
      activeIcon:
        'https://img.icons8.com/fluency-systems-regular/96/eeeeee/home.png',
    },
    {
      name: 'liked',
      link: '/liked',
      icon: 'https://img.icons8.com/fluency-systems-regular/96/8E8D91/like.png',
      activeIcon:
        'https://img.icons8.com/fluency-systems-regular/96/eeeeee/like.png',
    },
    {
      name: 'history',
      link: '/history',
      icon: 'https://img.icons8.com/fluency-systems-regular/48/8E8D91/overview-pages-3.png',
      activeIcon:
        'https://img.icons8.com/fluency-systems-regular/48/eeeeee/overview-pages-3.png',
    },
    {
      name: 'profile',
      link: '/profile',
      icon: 'https://img.icons8.com/fluency-systems-regular/96/8E8D91/admin-settings-male.png',
      activeIcon:
        'https://img.icons8.com/fluency-systems-regular/96/eeeeee/admin-settings-male.png',
    },
  ]
const Sidebar = () => {
    const [activeIcon, setActiveIcon] = useState('home');

  return (
    <Wrapper>
        <NavIconsContainer>
            {sideIcons.map(icon => (
                <IconContainer 
                key={icon.name}
                onClick={() => {
                    setActiveIcon(icon.name)
                }}
                style={{
                    backgroundColor: activeIcon ==icon.name ? '#F38C00' : '',
                }}
                >
                    <SideIcon
                    src={activeIcon == icon.name ? icon.activeIcon : icon.icon}
                    />

                </IconContainer>
            ))}

            <Placeholder />
            <Logout>
                <SideIcon src='https://img.icons8.com/fluency-systems-regular/48/8E8D91/exit.png' />
            </Logout>
        </NavIconsContainer>
    </Wrapper>
  )
}

export default Sidebar;
const Wrapper = styled.div`
  width: 70px;
  background-color: #f6f6f6;
  height: 100vh;
`

const NavIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100% - 80px);
  padding: 40px 0;
  div {
    margin: 8px 0;
    cursor: pointer;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    display: grid;
    place-items: center;
    &:hover {
      background-color: #f8ce93;
    }
  }
`

const IconContainer = styled.div``

const SideIcon = styled.img`
  height: 22px;
`

const Placeholder = styled.div`
  flex: 1;
  &:hover {
    background-color: #f6f6f6 !important;
    cursor: default !important;
  }
`

const Logout = styled.div`
  cursor: pointer;
`