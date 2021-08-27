// import logo from './logo.svg';
import './App.css';
// import { Button } from 'react-bootstrap';
// import Header from './components/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import AddProducts from './components/AddProducts';
import UpdateProducts from './components/UpdateProducts';
import Protected from './components/Protected';
import Products from './components/Products';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>

          <Route path="/add">
            <Protected Cmp={AddProducts} />
            {/* <AddProducts /> */}
          </Route>
          <Route path="/update">
            <Protected Cmp={UpdateProducts} />
            {/* <UpdateProducts /> */}
          </Route>
          <Route path="/">
            <Protected Cmp={Products} />
            {/* <AddProducts /> */}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
