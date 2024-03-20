// frontend/src/pages/SnippetList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import SnippetTable from "../components/SnippetTable";
import "./SnippetList.css";

const SnippetList = () => {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    const fetchSnippets = async () => {
      try {
        const response = await axios.get(
          "https://tfw-backend.onrender.com:10000/api/snippets"
        );
        setSnippets(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSnippets();
  }, []);

  return (
    <div className="snippet-list-container">
      <h1>Code Snippets</h1>
      <SnippetTable snippets={snippets} />
    </div>
  );
};

export default SnippetList;
