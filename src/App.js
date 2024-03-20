import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SubmitSnippet from "./pages/SubmitSnippet";
import SnippetList from "./pages/SnippetList";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Submit Snippet</Link>
            </li>
            <li>
              <Link to="/snippets">Snippet List</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<SubmitSnippet />} />
          <Route path="/snippets" element={<SnippetList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
