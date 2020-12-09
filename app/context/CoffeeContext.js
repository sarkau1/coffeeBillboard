import React, { createContext, useReducer, useEffect } from 'react'
import { coffeeReducer } from '../reducers/coffeeReducer'

export const CoffeeContext = createContext()

const CoffeeContextProvider = (props) => {
  const [coffees, dispatch] = useReducer(coffeeReducer, [], () => {
    const localData = localStorage.getItem('coffees')
    return localData ? JSON.parse(localData) : []
  })

  //-----------------------------------------------

  useEffect(() => {
    localStorage.setItem('coffees', JSON.stringify(coffees))
  }, [coffees])

  return (
    <CoffeeContext.Provider value={{ coffees, dispatch }}>
      {props.children}
    </CoffeeContext.Provider>
  )
}

export default CoffeeContextProvider
