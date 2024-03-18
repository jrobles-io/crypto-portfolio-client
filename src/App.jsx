import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import CreatePortfolioPage from './pages/CreatePortfolioPage'
import EditPortfolioPage from './pages/EditPortfolioPage'

function App() {

  return (
        <div className='main-layout'>
        <Navbar />
          {/* <Sidebar /> */}
          {/* <div className='content'> */}
            <Routes>
              <Route path='/' element={<DashboardPage />}/>
              <Route path='/CreatePortfolio' element={<CreatePortfolioPage />}/>
              <Route path='/Portfolio/:portfolioId' element={<EditPortfolioPage />}></Route>
            </Routes>
          {/* </div> */}
        </div>
  )
}

export default App
