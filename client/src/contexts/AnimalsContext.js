import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as animalServices from '../services/animalServices';

export const AnimalContext = createContext();



export function AnimalsContextProvider({ children }) {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        animalServices.getAll()
        .then(a => setAnimals(a))
        .then(console.log)
       // setAnimals(animals);
    }, [])
   

    async function onCreateAnimal(animalData, accessToken) {
        //create animal if success add it to the state
        //TODO...

        const animal = animalServices.createAnimal(animalData, accessToken);
        setAnimals(state => ({...state, animal}));

    }



    async function onEditAnimal(animalData){
        //edit animal if success edit state
        //TODO...
    }



    async function onDeleteAnimal(animalId){
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