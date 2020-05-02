import React, { Fragment } from "react";
import { HashRouter as Router, Route,Switch } from "react-router-dom";
import './App.css';
import NewMemberForm from "./components/NewMemberForm/NewMemberForm";

function App() {
  return (
    <div>
      <header>Band App</header>
      <NewMemberForm/>
    </div>
  );
}

export default App;


