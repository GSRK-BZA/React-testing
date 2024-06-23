import { legacy_createStore } from "redux";
function cartReducer(state={items : {}}, action){

}
const store = legacy_createStore(cartReducer);
export default store;