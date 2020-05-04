import React, { Fragment } from "react";
import { HashRouter as Router, Route,Switch } from "react-router-dom";
import './App.css';
import NewMemberFormTest from "./components/NewMemberFormTest/NewMemberFormTest";

function App() {
  return (
    <div>
      <header>Band App</header>
      <NewMemberFormTest/>
    </div>
  );
}

export default App;


