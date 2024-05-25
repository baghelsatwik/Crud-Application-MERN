import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './Component/NavBar';
import AllUser from './Component/AllUser';
import AddUser from './Component/AddUser';
import EditUser from './Component/EditUser';
import CrudApplicationMERN from './Component/CrudApplicationMERN';
function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<CrudApplicationMERN/>}></Route>
      <Route path="/allUser" element={<AllUser/>}></Route>
      <Route path="/addUser" element={<AddUser/>}></Route>
      <Route path="/edit/:id" element={<EditUser/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
