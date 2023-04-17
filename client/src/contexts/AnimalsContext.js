import { createContext, useState, useEffect } from "react";

import * as animalServices from '../services/animalServices';

export const AnimalContext = createContext();



export function AnimalsContextProvider({ children }) {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        animalServices.getAll()
        .then(a => setAnimals(a))
    }, [])
   

    async function onCreateAnimal(animalData, accessToken) {
      
        const animal = animalServices.createAnimal(animalData, accessToken);
        setAnimals(state => ([...state, animal]));

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