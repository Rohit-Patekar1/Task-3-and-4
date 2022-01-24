import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginScreen from "./components/LoginScreen";
import DashBoard from "./components/DashBoard";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' component={LoginScreen} exact />
        <Route path='/admin/dashboard' component={DashBoard} exact />

      </Router>

    </div>
  );
}

export default App;
