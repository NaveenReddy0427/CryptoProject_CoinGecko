import './App.css'
import { useState } from 'react'
import Home from './pages/Home'
import { currencyContext } from './context/currencyContext';

function App() {

  const [currency, setCurrency] = useState('usd')

  return (
    <>
      <currencyContext.Provider value={{currency, setCurrency}}>
        <Home/>
      </currencyContext.Provider>
    </>
  )
}

export default App
