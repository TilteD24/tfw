// frontend/src/components/SnippetTable.js
import React, { useState } from "react";

const SnippetTable = ({ snippets }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentCode, setCurrentCode] = useState("");

  const openModal = (code) => {
    setCurrentCode(code);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Language</th>
            <th>Stdin</th>
            <th>Timestamp</th>
            <th>Code</th>
          </tr>
        </thead>
        <tbody>
          {snippets.map((snippet) => (
            <tr key={snippet.id}>
              <td>{snippet.username}</td>
              <td>{snippet.language}</td>
              <td>{snippet.stdin}</td>
              <td>{snippet.createdAt}</td>
              <td>
                <a
                  href="#"
                  style={{ color: "blue" }}
                  onClick={() => openModal(snippet.code)}
                >
                  Full code
                </a>
              </td>
              {/* <td>{snippet.code.slice(0, 100)}...</td> */}
            </tr>
          ))}
        </tbody>
      </table>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span
              style={{ cursor: "pointer" }}
              className="close"
              onClick={closeModal}
            >
              &times;
            </span>
            <pre>{currentCode}</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default SnippetTable;
