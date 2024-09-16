
import './App.css'
import Banner from './components/Banner/Banner'
import CoinTable from './components/CoinTable/CoinTable'
import Navbar from './components/Navbar/Navbar'
import { useState } from 'react'

function App() {

  const [currency, setCurrency] = useState('usd')

  return (
    <>
     <Navbar setCurrency={setCurrency} />
     <Banner />
     <CoinTable currency={currency} />
    </>
  )
}

export default App
