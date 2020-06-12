import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Home, About } from 'pages'

export const useRoutes = () => (
  <Switch>
    <Route path='/' component={Home} exact />
    <Route path='/about' component={About} />
    <Redirect to='/' />
  </Switch>
)
