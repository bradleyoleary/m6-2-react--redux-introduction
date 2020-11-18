const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      //need to update qty so the item must exist in the state and must have qty prop
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity:
            state[action.item.id] && state[action.item.id].quantity
              ? state[action.item.id].quantity + 1
              : 1,
        },
      };
    }
    case "REMOVE_ITEM": {
      let newItems = { ...state };
      //console.log(newItems);
      delete newItems[action.id];

      return newItems;
    }

    case "UPDATE_QUANTITY": {
      const { id, quantity } = action;
      console.log(action);
      return {
        ...state,
        [id]: {
          ...state[id],
          quantity: quantity,
        },
      };
    }
    default:
      return state;
  }
}
export const getStoreItemArray = (state) => Object.values(state);

//the store below represents the carts subtotal
export const getSubTotal = (state) => {
  let sum = 0;
  Object.values(state).forEach((item) => {
    sum += item.price * item.quantity;
  });
  if (!sum) return 0;
  return sum;
};
