import PortfolioCard from "../components/PortfolioCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../services/API_URL";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  const [portfolios, setPortfolios] = useState([]);

  const getAllPortfolios = () => {
    axios
      .get(`${API_URL}/portfolios`)
      .then((response) => {
        console.log(response.data)
        setPortfolios(response.data)})
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllPortfolios();
  }, []);

  return (
    <div className="dashboard">
      <h3>Dashboard</h3>
      {portfolios.length > 0 ? (
        portfolios.map((portfolio) => {
          return <PortfolioCard portfolio={portfolio} key={portfolio.id} />;
        })
      ) : (
        <p>Loading...</p>
      )}

        <Link to="/CreatePortfolio">         
            <button>Create Portfolio</button>
        </Link>  
    </div>
  );
};

export default DashboardPage;
