import React from 'react'

import {Menu} from 'components/Menu'

import {Container, Content, ContainerTitle, Title, Subtitle} from './styles'

function Header() {
  return (
    <Container>
      <Content>
        <ContainerTitle>
          <Title>Pokédex</Title>
          <Subtitle>Ache seu pokémon favorito!</Subtitle>
        </ContainerTitle>
        <Menu />
      </Content>
    </Container>
  )
}

export {Header}
