import React, { useContext } from 'react'

import { CoffeeContext } from '../context/CoffeeContext'
import CoffeeDetails from './CoffeeDetails'

const CoffeeList = () => {
  const { coffees } = useContext(CoffeeContext)
  return coffees.length ? (
    <div className="container grid grid-4">
      {coffees.map((coffee) => {
        return <CoffeeDetails coffee={coffee} key={coffee.id} />
      })}
    </div>
  ) : (
    <div className="none"> No coffees. </div>
  )
}

export default CoffeeList
