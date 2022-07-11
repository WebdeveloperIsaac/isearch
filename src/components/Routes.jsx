
import React from 'react'
import { Switch, Redirect,Route } from 'react-router-dom'
import { Results } from './Results'

export const Routes  = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/search' />
        </Route>
        <Route exact path={['./search','./images','./videos','./news']}>
          <Redirect to='/search' />
        </Route>
        <Results />
      </Switch> 
    </div>
  )
}
