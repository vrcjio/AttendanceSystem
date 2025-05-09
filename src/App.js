import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LayndingPage from './LayndingPage';
import LoginPage from './LoginPage'
import AboutPage from './AboutPage';
import NavigationBar from './Components/LayndingPage/NavigationBar';

function App() {
  return (
    <>
    <NavigationBar />
    <Routes>
      <Route  path='/' element={<LayndingPage style={{ paddingTop: '55px' }}/>} />
      <Route  path='/Login' element={<LoginPage style={{ paddingTop: '55px' }}/>} />
      <Route  path='/About' element={<AboutPage style={{ paddingTop: '55px' }}/>} />
    </Routes>
    </>
  );
}

export default App;
