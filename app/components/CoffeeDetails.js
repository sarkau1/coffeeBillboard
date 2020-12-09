import React, { useContext } from 'react'

import { CoffeeContext } from '../context/CoffeeContext'

const CoffeeDetails = ({ coffee }) => {
  const { dispatch } = useContext(CoffeeContext)
  return (
    <div className="card">
      <img src={coffee.image} className="image"></img>
      <div className="title">{coffee.title}</div>
      <div className="price">{coffee.price}€</div>

      <button
        className="remove-btn btn-red"
        onClick={() => dispatch({ type: 'REMOVE_COFFEE', id: coffee.id })}
      >
        Remove
      </button>
    </div>
  )
}

export default CoffeeDetails
