import { useContext } from 'react';

import { Routes, Route } from 'react-router-dom';



import AnimalsList from './components/Animals/AnimalsList';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Users/Login';
import Register from './components/Users/Register';
import Logout from './components/Users/Logout';


function App() {

  

  return (

    <>
      <Navbar />
      {/* <AnimalsList /> */}
      
      <Routes>
        <Route path='/' element={<h1>Hello from React</h1>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/about' element={<h1>About page</h1>} />
      </Routes>
    </>

  );
}

export default App;
