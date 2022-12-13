import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './Pages/Home'
import Sobre from './Pages/Sobre'
import Contato from './Pages/Contato'

function RouterApp (){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sobre' element={<Sobre/>} />
        <Route path='/Contato' element ={<Contato/>} />
      </Routes>    
    </BrowserRouter>
  )
}

export default RouterApp