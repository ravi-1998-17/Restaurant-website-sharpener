import { React, Fragment } from 'react'
import './App.css'
import Header from './components/Layout/Header'
import MealsSummary from './components/Meals/MealsSummary'
import Meals from './components/Meals/Meals'

function App() {

  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  )
}

export default App
