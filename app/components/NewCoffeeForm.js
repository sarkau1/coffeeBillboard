import React, { useContext, useState } from 'react'
import { CoffeeContext } from '../context/CoffeeContext'

const NewCoffeeForm = () => {
  const { dispatch } = useContext(CoffeeContext)
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: 'ADD_COFFEE', coffee: { title, price, image } })
    dispatch('')
    setPrice('')
    setImage('')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="coffee title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="coffee price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="coffee image url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />

        <input
          type="submit"
          value="Add coffee"
          className="btn btn-green"
        ></input>
      </form>
    </div>
  )
}

export default NewCoffeeForm
