import './App.css';
import { Link, Routes, Route} from 'react-router-dom';
import { Home } from './Pages/Home/home';
import { Calculator } from './Pages/Calculator/calculator';
import { ToDoList } from './Pages/ToDoList/todolist';
import { Converter } from './Pages/CurrencyConverter/converter';
import { StopWatch } from './Pages/Stopwatch/stopwatch';


function App() {
  return (
    <>      
      {/* <nav>
        <Link to="/"> HOME </Link>
        <Link to="/todolist"> TODOLIST </Link>
        <Link to="/calculator"> CALCULATOR </Link>
        <Link to="/converter"> CONVERTER </Link>
        <Link to="/timer"> TIMER </Link>
      </nav> */}
      
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route index element={<ToDoList/>}/> 
          <Route path="/todolist" element={<ToDoList/>}/>
          <Route path="/calculator" element={<Calculator/>}/>
          <Route path="/converter" element={<Converter/>}/>
          <Route path="/timer" element={<StopWatch/>}/>            
        </Route>  
            
      </Routes>
    </>
  )
}

export default App;
