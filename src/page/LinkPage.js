import NavComponent from "../components/NavComponent";
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';



const LinkPage = () => {
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
    return(
        <>
        <nav>
            <p
            className='font-mono ml-5 mt-2 bg-yellow-300 inline-block'>
                Welcome to 2nd page
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
                
                <div>LinkPagewriting</div>
                
                    </>
                    :
                    <div>you need to login first</div>
                }
            </div>
        </nav>
    </>
    )
}

export default LinkPage;