import { legacy_createStore } from "redux";
function cartReducer(state={items : {}}, action){
    switch(action.type){
        case "cart/add":{
            break;
        }
        case "cart/remove":{
            break;
        }
        default:{
            return state;
            break;
        } 
    }
}
const store = legacy_createStore(cartReducer);
export default store;