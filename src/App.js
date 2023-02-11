
import { Route } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes} from 'react-router-dom';

import Home from './page/Home';
import Signup from './page/Signup';
import Login from './page/Login';



function App() {
  return (
    <>
   
      <Router>
        <div>
          <section>
            <Routes>
            <Route path='/home' element={<Home/>}/>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/' element={<Login/>}/>
         

            </Routes>
          </section>
        </div>
      </Router>
    </>
  );
}

export default App;
