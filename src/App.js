import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Fragment } from 'react';
import UserDetails from './Components/UserDetails/UserDetails';
function App() {
  return (
    <Fragment>
      <Navbar/>
      <UserDetails/>
    </Fragment>
  );
}

export default App;
