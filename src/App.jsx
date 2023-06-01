import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { MainPage } from './components/MainPage/MainPage'
import { Productos } from './components/Productos/Productos';

function App() {

  return (
    <Router>
      <Routes>
       <Route path='/' element={<MainPage />} />
       <Route path='/productos' element={<Productos />} />
      </Routes>
    </Router>
  )
}

export default App
