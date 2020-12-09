var ID = function () {
  return '_' + Math.random().toString(36).substr(2, 9)
}

export const coffeeReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COFFEE':
      return [
        ...state,
        {
          title: action.coffee.title,
          price: action.coffee.price,
          image: action.coffee.image,
          id: ID(),
        },
      ]
    case 'REMOVE_COFFEE':
      return state.filter((coffee) => coffee.id !== action.id)
    default:
      return state
  }
}
