
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Search from './pages/Search'
import Footer from './components/Footer'
import Tips from './pages/Tips'

function App() {


  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/tips' element={<Tips/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
