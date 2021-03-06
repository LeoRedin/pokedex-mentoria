/* eslint-disable react/prop-types */
import React from 'react'
import {badges} from 'assets/badges'
import {convertToPokemonId} from 'utils/utils'
import {
  Container,
  Id,
  Name,
  Badges,
  Badge,
  BadgeImage,
  PokemonImage,
} from './styles'

function PokemonCard({id, name, types, image}) {
  return (
    <Container types={types} to={`/pokemon/${id}`}>
      <Id>{convertToPokemonId(id)}</Id>
      <Name>{name}</Name>
      <Badges>
        {types.map(type => (
          <Badge key={`${name}-badge-${type.type.name}`}>
            <BadgeImage
              src={badges[type.type.name]}
              alt={`Badge ${type.type.name}`}
            />
          </Badge>
        ))}
      </Badges>
      <PokemonImage>
        <img src={image} alt={`Imagem do ${name}`} width={180} height={180} />
      </PokemonImage>
    </Container>
  )
}

export {PokemonCard}
