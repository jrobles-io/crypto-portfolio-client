import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import CreatePortfolioPage from './pages/CreatePortfolioPage'

function App() {

  return (
      <div className='App'>
        <Navbar />
        <div className='main-layout'>
          <Sidebar />
          <div className='content'>
            <Routes>
              <Route path='/' element={<DashboardPage />}/>
              <Route path='/CreatePortfolio' element={<CreatePortfolioPage />}/>
            </Routes>
          </div>
        </div>
      </div>
  )
}

export default App
