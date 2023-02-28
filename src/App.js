import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Fragment } from "react";
import UserDetails from "./Components/UserDetails/UserDetails";
import Todos from "./Components/Todos/Todos";
import Albums from "./Components/Albums/Albums";
import Photos from "./Components/Photos/Photos";
import Address from "./Components/Address/Address";
import TodoApp from "./Components/TodoApp/TodoApp";
import AddTodo from "./Components/TodoApp/AddTodo";
import TodoList from "./Components/TodoApp/TodoList";
import JSPrac from "./Components/JSPrac/JSPrac";
import JSPrac2 from "./Components/JSPrac/JSPrac2";
function App() {
  return (
    <Fragment>
      {/*  <div className="App">
        <div className="header">Adv Redux Toolkit</div>
        <AddTodo />
        <TodoList />
      </div> */}
      {/* <JSPrac /> */}
      <JSPrac2/>
    </Fragment>
  );
}

export default App;
