import { createStore } from "redux";
function cartReducer(state= { items: {}}, action) {
  switch(action.type) {
    case "ADD_TO_CART":{
        const product = action.payload;
        if(state.items[product.id]) {
          return{
            ...state,
            items: {
              ...state.items,
              [product.id]: {
                ...product,
                quantity: state.items[product.id].quantity + 1
              }
            }
          }
        }
        else{
            return {
              ...state,
              items: {
                ...state.items,
                [product.id]: {
                  ...product,
                  quantity: 1
                }
              }
            }
        }
    }
  }
}


const store = createStore(cartReducer);

export default store;
