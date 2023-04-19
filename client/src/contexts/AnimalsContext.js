import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as animalServices from '../services/animalServices';

export const AnimalContext = createContext();



export function AnimalsContextProvider({ children }) {
    const [animals, setAnimals] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        animalServices.getAll()
            .then(a => setAnimals(a))
    }, [])


    async function onCreateAnimal(animalData, accessToken) {

        const animal = await animalServices.createAnimal(animalData, accessToken);
        setAnimals(state => ([...state, animal]));

    }



    async function onEditAnimal(animalData, accessToken) {

        

        const editedAnimal = await animalServices.update(animalData, accessToken);
        

       setAnimals(state => state.map(a => a._id === editedAnimal._id ? editedAnimal : a));

    }



    async function onDeleteAnimal(animalId, accessToken) {

        const response = await animalServices.remove(animalId, accessToken);

        setAnimals(state => state.filter(a => a._id !== animalId));

        navigate("/animals")
        //remove animal from server if success remove it from state
        //TODO...
    }




    const contextData = {
        animals,
        onCreateAnimal,
        onEditAnimal,
        onDeleteAnimal

    }


    return (
        <AnimalContext.Provider value={contextData}>
            {children}
        </AnimalContext.Provider>
    )

}