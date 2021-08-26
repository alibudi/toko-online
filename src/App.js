// import logo from './logo.svg';
import './App.css';
// import { Button } from 'react-bootstrap';
import Header from './components/Header';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import AddProducts from './components/AddProducts';
import UpdateProducts from './components/UpdateProducts';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <h1>Toko online</h1>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/add">
          <AddProducts />
        </Route>
        <Route path="/update">
          <UpdateProducts />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
