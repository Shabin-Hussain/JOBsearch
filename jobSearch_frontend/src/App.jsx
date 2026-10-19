
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Search from './pages/Search'
import Footer from './components/Footer'
import Tips from './pages/Tips'
import Resource from './pages/Resource'
import Questions from './pages/Questions'
import About from './pages/About'
import Mission from './pages/Mission'
import Contact from './pages/Contact'
import What from './pages/What'

function App() {


  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/tips' element={<Tips/>}/>
      <Route path='/resource' element={<Resource/>}/>
      <Route path='/questions' element={<Questions/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/mission' element={<Mission/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/what' element={<What/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
