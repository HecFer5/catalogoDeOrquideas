import Crear from './components/Crear';
import Editar from './components/Editar';
import Listar from './components/Listar'
import { Route, Routes, Link} from 'react-router-dom';

function App() {
 

  return (
    <>
    <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="nav navbar-nav">
            <Link className="nav-item nav-link active" to={"/"}>Home <span className="sr-only"></span></Link>
            <Link className="nav-item nav-link" to={"/crear"}>Crear lista</Link>
            <Link className="nav-item nav-link" to={"/editar"}>Editar Especies</Link>

        </div>
    </nav>
    <br />
   
   <div className="container">
  
    
    <Routes>
    <Route exact path='/' Component={Listar}></Route> 
    <Route  path='/crear' Component={Crear}></Route> 
    <Route  path='/editar/:id' Component={Editar}></Route> 
    
   </Routes>
   </div>
  </>
  )
}

export default App
