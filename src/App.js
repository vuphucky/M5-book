import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
import Library from "./components/Library";
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/edit/:id" element={<EditBook />} />
        </Routes>
      </Router>
  );
}

export default App;