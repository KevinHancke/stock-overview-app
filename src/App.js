import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StockOverviewPage } from './pages/StockOverviewPage';
import { StockDetailPage } from './pages/StockDetailPage';

export default function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StockOverviewPage/>}/>
          <Route path="/detail/:symbol" element={<StockDetailPage/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  )
}


//coingecko api: "https://www.coingecko.com/en/api" 

//finhub api key: ccbivk2ad3i07p03rlv0
