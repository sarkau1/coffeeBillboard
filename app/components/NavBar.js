import React, { useContext } from 'react'
import { CoffeeContext } from '../context/CoffeeContext'

const NavBar = () => {
  const { coffees } = useContext(CoffeeContext)
  return (
    <div className="coffeeList">
      <h1>Coffee billboard</h1>
      <h2>Select from {coffees.length} different coffees</h2>
    </div>
  )
}

export default NavBar
