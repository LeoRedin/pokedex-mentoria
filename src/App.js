import React from 'react'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faUser, faSearch} from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter as Router} from 'react-router-dom'
import {Layout, RoutesLayout, Header} from 'components'
import {createBrowserHistory} from 'history'
import {useSelector, useDispatch} from 'react-redux'
import {Routes} from './routes'

library.add(faUser, faSearch)

function App() {
  const history = createBrowserHistory()
  const dispatch = useDispatch()

  const isAuthenticated = useSelector(store => store.auth.isAuthenticated)

  return isAuthenticated ? (
    <Router history={history}>
      <Layout>
        <Header />
        <RoutesLayout>
          <Routes />
        </RoutesLayout>
      </Layout>
    </Router>
  ) : (
    <button onClick={() => dispatch({type: 'LOGIN'})}>Fazer login</button>
  )
}

export default App
