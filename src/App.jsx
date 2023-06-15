import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { MainPage } from './components/MainPage/MainPage'
import { Productos } from './components/Productos/Productos';
import { Empresa } from './components/Empresa/Empresa';

function App() {

  return (
    <Router>
      <Routes>
       <Route path='/' element={<MainPage />} />
       <Route path='/productos' element={<Productos />} />
       <Route path='/empresa' element={<Empresa />} />
      </Routes>
      {/* <footer>
        &copy; 2023 Aderezos Gonmoher | Todos los derechos reservados
      </footer> */}
    </Router>
  )
}

export default App
