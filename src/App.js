import React from 'react';
import './App.css';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import { Provider } from 'react-redux';
import store from './store';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Products />
                <Cart />
            </div>
        </Provider>
    );
}

export default App;
