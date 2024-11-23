// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResponsiveDrawer from "./components/Sidebar";
import Header from "./components/Header";
import MovieGridRedux from "./components/MovieGridRedux";
import SearchResults from "./components/SearchResults";
import MovieDetails from "./components/MovieDetails"; // Import the new component

function App() {
  return (
    <Router>
      <div>
        <Header />
        <ResponsiveDrawer />
        <main
          style={{ marginLeft: "240px", marginTop: "64px", padding: "20px" }}
        >
          <Routes>
  <Route path="/" element={<MovieGridRedux category="popular" />} />
  <Route path="/action" element={<MovieGridRedux category="action" />} />
  <Route path="/adventure" element={<MovieGridRedux category="adventure" />} />
  <Route path="/comedy" element={<MovieGridRedux category="comedy" />} />
  <Route path="/drama" element={<MovieGridRedux category="drama" />} />         {/* New route for Drama */}
  <Route path="/horror" element={<MovieGridRedux category="horror" />} />       {/* New route for Horror */}
  <Route path="/sci_fi" element={<MovieGridRedux category="sci_fi" />} />       {/* New route for Sci-Fi */}
  <Route path="/romance" element={<MovieGridRedux category="romance" />} />     {/* New route for Romance */}
  <Route path="/documentary" element={<MovieGridRedux category="documentary" />} /> {/* New route for Documentary */}
  <Route path="/search" element={<SearchResults />} />
  <Route path="/movie/:id" element={<MovieDetails />} /> {/* Route for Movie Details */}
</Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
