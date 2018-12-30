import React, { Component } from 'react'

import MainScreen from '../sw-components/main-screen'

import KawaapiService from '../../services/kawaapi-service'

import { KawaapiServiceProvider } from '../kawaapi-service-context'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import './app.scss'

export default class App extends Component {
  state = {
    kawaapiService: new KawaapiService()
  }

  render() {
    return (
      <KawaapiServiceProvider value={this.state.kawaapiService}>
        <Router>
          <Route
            path="/:id"
            render={({ match }) => {
              const { id } = match.params
              return <MainScreen itemId={id} />
            }}
          />
        </Router>
      </KawaapiServiceProvider>
    )
  }
}
