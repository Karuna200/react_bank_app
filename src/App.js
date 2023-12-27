
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Registration from './Components/Registration';
import SignIn from './Components/SignIn';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='/dashboard' element={<Dashboard/>}/>
       <Route path='/Registration' element={<Registration/>}/>
       <Route path='/SignIn' element={<SignIn/>}/>
      <Route/>
     </Routes>
    </BrowserRouter>
   
  );
}

export default App;
