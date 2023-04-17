
import { Routes, Route } from 'react-router-dom';



import Animals from './components/Animals/Animals';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Users/Login';
import Register from './components/Users/Register';
import Logout from './components/Users/Logout';
import CreateAnimal from './components/Animals/CreateAnimal';
import AnimalInfo from './components/Animals/AnimalInfo';

import { AnimalsContextProvider } from './contexts/AnimalsContext';


function App() {



    return (

        <>
            <Navbar />

            <AnimalsContextProvider>
                <Routes>
                    <Route path='/' element={<h1>Hello from React</h1>} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/logout' element={<Logout />} />

                    <Route path='/publish' element={<CreateAnimal />} />
                    <Route path='/animals' element={<Animals />} />
                    <Route path='/animals/:id' element={<AnimalInfo />} />

                </Routes>
            </AnimalsContextProvider>
        </>

    );
}

export default App;
