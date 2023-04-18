import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';



import Animals from './components/Animals/Animals';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Users/Login';
import Register from './components/Users/Register';
import Logout from './components/Users/Logout';
import AnimalCreate from './components/Animals/AnimalCreate';
import AnimalInfo from './components/Animals/AnimalInfo';
import AnimalEdit from './components/Animals/AnimalEdit';
import E404 from './components/404/E404';
import Home from './components/Home/Home';

import ForLogged from './components/RouteGuard/ForLogged';
import ForGuests from './components/RouteGuard/ForGuests';
import ForOwner from './components/RouteGuard/ForOwners';




import { AnimalsContextProvider } from './contexts/AnimalsContext';
import { AuthContext } from './contexts/AuthContext';
import LoginError from './components/Errors/LoginError';


function App() {
     const {_id} = useContext(AuthContext);

     let isLogged = !!_id;

    return (

        <>
            <Navbar />

            <AnimalsContextProvider>
                <Routes>
                    <Route path='/' element={<Home />} />

                    <Route path='/login' element={ForGuests({isLogged, redirect: <Login />})} />
                    <Route path='/register' element={ForGuests({isLogged, redirect: <Register />})} />
                    <Route path='/logout' element={ForLogged({isLogged, redirect: <Logout />})} />

                    <Route path='/publish' element={ForLogged({isLogged, redirect: <AnimalCreate />})} />
                    <Route path='/animals' element={<Animals />} />
                    <Route path='/animals/:id' element={<AnimalInfo /> }  />

                    <Route path='/animals/:id/edit' element={ForLogged({isLogged, redirect: <AnimalEdit />})} />
                    <Route path='/animals/:id/remove' element={ForLogged({isLogged, redirect: <AnimalInfo />})} />

                    <Route path='/login/error' element={<LoginError />} />

                    <Route path='*' element={<E404 />} />

                </Routes>
            </AnimalsContextProvider>
        </>

    );
}

export default App;
