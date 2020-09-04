import React from 'react'
import {Icon} from 'components/Icon'
import {icons} from 'utils/icons'

import {Container, Content, Logout, LogoutButton, Link} from './styles'

function Menu() {
  const menuItems = [
    {
      name: 'Home',
      linkTo: '/',
    },
    {
      name: 'Pokemons',
      linkTo: '/pokemons',
    },
    {
      name: 'Gerações',
      linkTo: '/geracoes',
    },
    {
      name: 'Sobre',
      linkTo: '/sobre',
    },
  ]

  return (
    <Container>
      <Content>
        {menuItems.map(item => (
          <Link
            exact
            activeClassName="menu-active"
            to={item.linkTo}
            key={item.name}
          >
            {item.name}
          </Link>
        ))}
        <Logout>
          <LogoutButton>
            <Icon name={icons.USER} /> Sair
          </LogoutButton>
        </Logout>
      </Content>
    </Container>
  )
}

export {Menu}
