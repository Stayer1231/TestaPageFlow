import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GuestHeader from './components/organisms/guest-header/guest-header'
import HomeBodyContent from './components/atoms/home-body-content/home-body-content'
import LoginPage from './components/pages/login/login'

const App: React.FC = () => {
  return (
    <div>
      <header>
        <Routes>
          <Route path='/*' element={<GuestHeader />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </header>
    </div>
  )
}


export default App
