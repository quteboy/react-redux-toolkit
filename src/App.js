import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Fragment } from "react";
import UserDetails from "./Components/UserDetails/UserDetails";
import Todos from "./Components/Todos/Todos";
import Albums from "./Components/Albums/Albums";
function App() {
  return (
    <Fragment>
      <Navbar />
      {/* <UserDetails/> */}
      {/* <Todos /> */}
      <Albums />
    </Fragment>
  );
}

export default App;
