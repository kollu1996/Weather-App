import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './App.css';
import Weather from "./Main";

function App() {
  return (
    <div>
      <Router>
        <switch>
          <Route exact path = "/"  component = {Weather} />
        </switch>
      </Router>
    </div>
  );
}

export default App;
