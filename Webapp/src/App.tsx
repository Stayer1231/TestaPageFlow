import './App.scss'
import { Routes, Route, useLocation } from 'react-router-dom'
import GuestHeader from './components/organisms/guest-header/guest-header'
import LoginPage from './components/pages/login/login';
import LoginVerification from './components/pages/login/login-verification';

function App() {
  const location = useLocation();

  const shouldRenderHeader = () => {
    // Check if the current location path starts with "/login"
    return !location.pathname.startsWith('/login');
  };

  console.log(location);

  return (
    <>
      <header>
        {shouldRenderHeader() && <GuestHeader />}
      </header>
      {/* <body>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/login/verification' element={<LoginVerification />} />
        </Routes>
      </body> */}
    </>
  )
}

export default App
