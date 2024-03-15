import './App.css';
import {Route,Routes} from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from '../src/pages/Login';
import Register from './pages/Register';
import axios from 'axios';
import {Toaster} from 'react-hot-toast';

axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.withCredentials = true;

function App() {
  return (
   <>
   <Navbar/>
   <Toaster position='bottom-right' toastOptions={{duration:4000}}/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
  <Footer/>
   </>
  );
}

export default App;
