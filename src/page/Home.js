import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

import NavComponent from '../components/NavComponent'
import Heroslider from '../components/HeroSlider'

const Home = () => {
    const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

   // const handleLogout = () => {               
    //     signOut(auth).then(() => {
    //     // Sign-out successful.
    //         navigate("/");
    //         console.log("Signed out successfully")
    //     }).catch((error) => {
    //     // An error happened.
    //     });

    // const navigate = useNavigate();
 

    
   
    return(
        <>
            <nav>
                <p
                className='font-mono ml-5 mt-2 bg-yellow-300 inline-block'>
                    Welcome Home
                </p>
 
                <div>

                    {user ? 
                        <>
        			<button onClick={handleLogout}
                                                        className='font-mono text-blue-500 hover:text-blue-800 underline ml-5'                                       
                                                        >
                        Logout
                    </button>
                        <NavComponent/>
                    <Heroslider/>
                    </>
                    :
                    <div>you need to login first</div>
                    }
        		</div>
            </nav>
        </>
    )
}
 
export default Home;
 