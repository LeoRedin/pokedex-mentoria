import React from 'react'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faUser, faSearch} from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter as Router} from 'react-router-dom'
import {Layout, RoutesLayout, Header} from 'components'
import {createBrowserHistory} from 'history'
import {Routes} from './routes'

library.add(faUser, faSearch)

function App() {
  const history = createBrowserHistory()

  return (
    <Router history={history}>
      <Layout>
        <Header />
        <RoutesLayout>
          <Routes />
        </RoutesLayout>
      </Layout>
    </Router>
  )
}

export default App
