import React from 'react';
import './App.css'
import { Routes, Route } from "react-router-dom";
import { NewGamePage } from './pages/NewGamePage/NewGamePage'

export const App = () => {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/new-game" element={<NewGamePage />} />
        </Routes>
      </div>
  );
}
