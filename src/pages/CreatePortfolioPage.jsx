// src/pages/CreateProjectPage.jsx

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../services/API_URL";

function CreatePortfolioPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {                          
    e.preventDefault();
 
    const requestBody = { title, description };
    
    axios
      .post(`${API_URL}/portfolios`, requestBody)
      .then((response) => {
        // Once the project is created navigate to Project List Page
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="create-portfolio">
      <h3>Add Portfolio</h3>

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreatePortfolioPage;
