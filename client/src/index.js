import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'normalize.css'
import './App.css'
import App from "./components/App.jsx"

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}/>
    </Routes>
  </Router>,
  document.getElementById('main')
);