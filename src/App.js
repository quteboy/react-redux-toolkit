import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Fragment } from 'react';
import UserDetails from './Components/UserDetails/UserDetails';
import Todos from './Components/Todos/Todos';
function App() {
  return (
    <Fragment>
      <Navbar/>
      {/* <UserDetails/> */}
      <Todos/>
    </Fragment>
  );
}

export default App;
