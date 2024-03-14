// src/pages/CreateProjectPage.jsx

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../services/API_URL";
import AddCoin from "../components/AddCoin";

function EditPortfolioPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [coins, setCoins] = useState([]);
  const [portfolio, setPortfolio] = useState({ coinIds: [] });
  const getAllCoins = () => {
    axios
      .get(`${API_URL}/coins`)
      .then((response) => setCoins(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllCoins();
  }, []);
  useEffect(() => {
    console.log(portfolio);
  }, [portfolio]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(portfolio);
    setPortfolio((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${API_URL}/portfolios`, portfolio)
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
          required
          onChange={(e) => handleChange(e)}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          onChange={(e) => handleChange(e)}
        />

        <label>Add Coins</label>

        <button type="submit">Submit</button>
        <AddCoin setPortfolio={setPortfolio} portfolio={portfolio} />
      </form>
    </div>
  );
}

export default EditPortfolioPage;
