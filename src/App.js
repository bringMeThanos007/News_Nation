import './App.css';
import NavBar from './Component/NavBar';
import React, { Component, useState } from 'react'
import News from './Component/News';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


export default function App() {
  const pageSize= 9;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress , setProgress] =useState(0);

    return (

      <Router>
        <NavBar />
        {/* Loading bar \|/ */}
        <LoadingBar
          color='#f11946'
          progress={progress}
          height = {3}
        />
        <Routes>
          <Route
            exact path="/about_science"
            element={
              <News key="science" setProgress={ setProgress} pageSize={pageSize} apiKey={ apiKey} country="us" category="science" />
            } />
          <Route
            exact path="/"
            element={
              <News key="general" setProgress={ setProgress}  pageSize={pageSize} apiKey={ apiKey} country="us" category="general" />
            } />
          <Route
            exact path="/about_business"
            element={
              <News key="business" setProgress={ setProgress} pageSize={pageSize} apiKey={ apiKey} country="us" category="business" />
            } />
          <Route
            exact path="/about_entertainment"
            element={
              <News key="entertainment" setProgress={ setProgress} pageSize={pageSize} apiKey={ apiKey} country="us" category="entertainment" />
            } />
          <Route
            exact path="/about_health"
            element={
              <News key="health" setProgress={ setProgress} pageSize={pageSize} country="us" apiKey={ apiKey} category="health" />
            } />
          <Route
            exact path="/about_sports"
            element={
              <News key="sports" setProgress={ setProgress} pageSize={pageSize} apiKey={ apiKey} country="us" category="sports" />
            } />
          <Route
            exact path="/about_technology"
            element={
              <News key="technology" setProgress={ setProgress} pageSize={pageSize
              } apiKey={ apiKey} country="us" category="technology" />
            } />
        </Routes>
      </Router>
    )
  
}



