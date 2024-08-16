import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import ConfirmUserPage from './Pages/ConfirmUserPage';

function App() {
  const isAuthenticated = () => {
    const accessToken = sessionStorage.getItem('accessToken');
    return !!accessToken;
  };

  return (
    <Routes>
      <Route
        path='/'
        element={isAuthenticated() ? <Navigate replace to='/home' /> : <Navigate replace to='/login' />}
      />
      <Route path='/login' element={<Login />} />
      <Route path='/confirm' element={<ConfirmUserPage />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/home' element={isAuthenticated() ? <Home /> : <Navigate replace to='/login' />} />
    </Routes>
  );
}

export default App;
