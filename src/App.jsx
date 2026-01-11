// import { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// pages and components
import Header from './components/Header'
import Home from './pages/Home/Home'
import Destination from './pages/Destination/Destination'
import Crew from './pages/Crew/Crew'
import Technology from './pages/Technology/Technology'


import './App.css'
import { Redirect } from 'react-router-dom/cjs/react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter basename="/Space-Tourism">

        <Header />    

        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route  path='/destination/:planet'>
            <Destination />
          </Route>

          <Route  path='/destination'>
            <Redirect to='/destination/moon'>
              <Destination />
            </Redirect>
          </Route>
 
          <Route  path='/crew/:people'>
            <Crew />
          </Route>

          <Route  path='/crew'>
            <Redirect to='/crew/douglas-hurley'>
              <Crew />
            </Redirect>
          </Route>

          <Route  path='/technology/:spaceLaunch'>
            <Technology />
          </Route>

          <Route  path='/technology'>
            <Redirect to='/technology/launch-vehicle'>
              <Technology />
            </Redirect>
          </Route>

        </Switch>

      </BrowserRouter>
    
    </>
  )
}

export default App
