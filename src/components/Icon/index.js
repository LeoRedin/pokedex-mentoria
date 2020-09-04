import React from 'react'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {Container} from './styles'

function Icon({name, color, size}) {
  return (
    <Container>
      <FontAwesomeIcon icon={name} color={color} size={size} />
    </Container>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
}

Icon.defeaultProps = {
  color: '#fff',
  size: '1x',
}

export {Icon}
