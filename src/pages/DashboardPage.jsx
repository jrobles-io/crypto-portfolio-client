import PortfolioCard from "../components/PortfolioCard";
import { useState, useEffect, useContext } from "react";
import { PortfolioContext } from "../contexts/portfolios.context";
import axios from "axios";
import { API_URL } from "../services/API_URL";
import { Link } from "react-router-dom";

const DashboardPage = () => {

  const { portfolios } = useContext(PortfolioContext)

  return (
    <div className="dashboard">
      <h3>Dashboard</h3>
      {portfolios.length > 0 ? (
        portfolios.map((portfolio) => {
          return <PortfolioCard portfolio={portfolio} key={portfolio.id} />;
        })
      ) : (
        <p>Create a new portfolio to start!</p>
      )}

        <Link to="/CreatePortfolio">         
            <button>Create Portfolio</button>
        </Link>  
    </div>
  );
};

export default DashboardPage;
