import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { MainPage } from './components/MainPage/MainPage'
import { Productos } from './components/Productos/Productos';
import { Empresa } from './components/Empresa/Empresa';
import { Contacto } from "./components/Contacto/Contacto";
import { Footer } from "./components/Footer/Footer";

function App() {

  return (
    <Router>
      <Routes>
       <Route path='/' element={<MainPage />} />
       <Route path='/productos' element={<Productos />} />
       <Route path='/empresa' element={<Empresa />} />
       <Route path='/contacto' element={<Contacto />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
