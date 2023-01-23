import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'

function App() {

  const [page, setPage] = useState('home')

  return (
    <Navbar />
  )
}

export default App;
