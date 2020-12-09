import React from 'react'
import ReactDOM from 'react-dom'
import '../styles/main.scss'
import CoffeeList from './components/CoffeeList'
import NavBar from './components/NavBar'
import NewCoffeeForm from './components/NewCoffeeForm'
import CoffeeContextProvider from './context/CoffeeContext'

export const App = () => {
  return (
    <div className="App">
      <CoffeeContextProvider>
        <NavBar></NavBar>
        <CoffeeList></CoffeeList>
        <NewCoffeeForm></NewCoffeeForm>
      </CoffeeContextProvider>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}
