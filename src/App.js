
import { Route } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import { AuthContext } from './context/AuthContext';


import Home from './page/Home';
import Signup from './page/Signup';
import Login from './page/Login';
import LinkPage from './page/LinkPage';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <>
      <AuthContext>
      <Router>
        <div>
          <section>
            <Routes>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/' element={<Login/>}/>
              
              <Route path='/LinkPage' element={
              <ProtectedRoute>
              <LinkPage/>
            </ProtectedRoute>}/>
            
            <Route path='/home' element={
              <ProtectedRoute>
            <Home/>
          </ProtectedRoute>}/>
              
              
            </Routes>
          </section>
        </div>
      </Router>
      </AuthContext>
   
    </>
  );
}

export default App;
