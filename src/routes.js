import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import {Home, Pokemons, Geracoes, Sobre} from 'components'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/pokemons" component={Pokemons} />
      <Route exact path="/pokemon/:name" component={Pokemons} />
      <Route exact path="/pokemon/:id" component={Pokemons} />
      <Route exact path="/geracoes" component={Geracoes} />
      <Route exact path="/sobre" component={Sobre} />
      <Redirect from="*" to="/" />
    </Switch>
  )
}

export {Routes}
