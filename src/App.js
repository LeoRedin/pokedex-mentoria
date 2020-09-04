import React from 'react'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter as Router} from 'react-router-dom'
import {Layout, RoutesLayout, Header} from 'components'
import {Routes} from './routes'

library.add(faUser)

function App() {
  return (
    <Router>
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
