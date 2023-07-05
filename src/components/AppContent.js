import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { getUser, login, logout } from '../helpers/auth_helper';
import { Link, Routes, Route } from 'react-router-dom';

import AuthContent from './AuthContent';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import LoginComponent from './LoginComponent';
import LogoutComponent from './LogoutComponent';

const AppContent = () => {
    const [user, setUser] = useState({});
    const [shouldCancel, setShouldCancel] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    
    const [currentPage, setCurrentPage] = useState();
    useEffect(()=>{
        const path = window.location.pathname;
        setCurrentPage(path.slice(1, path.length));
    },[]);
    // ...

    useEffect(() => {
      
        getUser().then(us => {
          console.log("user: "+us);
          if (us) {
            toast.success('User has been successfully loaded from store.');
            setIsLoggedIn(true);
            setUser(us);
          } else {
            toast.info('You are not logged in.');
            setIsLoggedIn(false);
          }
        
        });
        return () => {
          // Clean up code
          // Will be called when the component unmounts
          // Set shouldCancel to true to cancel any ongoing asynchronous tasks
          setShouldCancel(true);
        };
  }, [shouldCancel]);
  
  // ...
  
  
    const handleLogin = () => {
      login();
    };
  
    const handleLogout = () => {
      logout();
    };
  
    return (
      <BrowserRouter>
        <ToastContainer />
        <nav className='m-1 p-1 border border-info'>
  <ul className='nav na-pills'>
    {/* <li>
      <Link
        onClick={() => {setCurrentPage("/")}}
        className={currentPage==='/'?'btn btn-info ms-1':'ms-1 btn btn-outline-primary'}
        to={"/"}
      >
        Home
      </Link>
    </li> */}
    {isLoggedIn ? (
            <>
            <li>
              <Link
                onClick={() => {setCurrentPage("/logout")}}
                className={currentPage==='/logout'?'btn btn-info ms-1':'ms-1 btn btn-outline-primary'}
                to={"/logout"}
              >
                Logout
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {setCurrentPage("/backendApi")}}
                className={currentPage==='/backendApi'?'btn btn-info ms-1':'ms-1 btn btn-outline-primary'}
                to={"/backendApi"}
              >
                Protected Backend
              </Link>
            </li>
          </>
      
    ) : (
      <li>
        <Link
          // onClick={() => {setCurrentPage("/login")}}
          className='ms-1 btn btn-outline-primary'
          to={"/login"}
        >
          Login
        </Link>
      </li>
    )}
  </ul>
</nav>

            <div className='menu'>
              <Routes>
                  {/* <Route path='/' element={<App/>}></Route> */}
                  <Route path='/backendApi' element={<AuthContent user={user}/>}></Route>
                  <Route path='/login' element={<LoginComponent onLogin={handleLogin} />} />
                  <Route path='/logout' element={<LogoutComponent onLogout={handleLogout} />} />
              </Routes>
            </div>
  
      </BrowserRouter>
    );
  };
  
export default AppContent;
  
