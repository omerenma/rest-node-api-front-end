import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav'
import Header from './components/header'
import Register from './components/auth/register'
import {store} from './store'
import {Provider} from 'react-redux'
function App() {
  return (
    <Provider store={store}>
    <div>
      <Header/>
      <Nav />
      <Register />
    </div>
    </Provider>
  );
}

export default App;
