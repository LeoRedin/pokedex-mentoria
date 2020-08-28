import React from 'react'
import PropTypes from 'prop-types'

import {Container, ButtonText} from './styles'

function Button({children}) {
  return (
    <Container>
      <ButtonText>{children}</ButtonText>
    </Container>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
}

export {Button}
