
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
import Choose from './pages/Choose'
import Emplogin from './pages/Emplogin'
import Joblogin from './pages/Joblogin'

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
      <Route path='/choose' element={<Choose/>}/>
      <Route path='/emplogin' element={<Emplogin/>}/>
       <Route path='/joblogin' element={<Joblogin/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
