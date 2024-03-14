// src/pages/CreateProjectPage.jsx

import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../services/API_URL";
import AddCoin from "../components/AddCoin";
import CoinUpdate from "../components/CoinUpdate";
import { PortfolioContext } from "../contexts/portfolios.context";

function EditPortfolioPage() {
  const [ portfolioToEdit, setPortfolioToEdit ] = useState(null)
  const { portfolios, setPortfolios, coins, metaData, getAllPortfolios } = useContext(PortfolioContext);

  const { portfolioId } = useParams()

  const navigate = useNavigate();

  const handleChange = (e) => {
    setPortfolioToEdit((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${API_URL}/portfolios/${portfolioId}`, portfolioToEdit)
      .then((response) => {

        getAllPortfolios()

        // Once the project is created navigate to Project List Page
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {

    if (portfolios.length > 0) {
      let thisPortFolio = portfolios.find((portfolio) => portfolio.id == portfolioId)
      setPortfolioToEdit(thisPortFolio)
    }

  }, [portfolios])


  return (
    <div className="create-portfolio">
      <h3>Edit Portfolio</h3>

      {
        portfolioToEdit &&

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          required
          value={portfolioToEdit.title}
          onChange={(e) => handleChange(e)}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={portfolioToEdit.description}
          onChange={(e) => handleChange(e)}
        />

        <label>Edit Coins</label>

        <button type="submit">Submit Edit</button>
        {/* <AddCoin setPortfolio={setPortfolioToEdit} portfolio={portfolioToEdit} /> */}
        <CoinUpdate setPortfolio={setPortfolioToEdit} portfolio={portfolioToEdit} />

      </form>

      }

    </div>
  );
}

export default EditPortfolioPage;
