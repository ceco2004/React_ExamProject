

import { Routes, Route } from 'react-router-dom';


import AnimalsList from './components/Animals/AnimalsList';
import Navbar from './components/Navbar/Navbar';
import Modal from './components/resourceComponents/Modal';
import Form from './components/resourceComponents/Form';


function App() {
  return (

    <>
      <Navbar />
      <AnimalsList />
      <Form />
        <Modal />
      <Routes>
        <Route path='/' element={<h1>Hello from React</h1>} />
        <Route path='/about' element={<h1>About page</h1>} />
      </Routes>
    </>

  );
}

export default App;
