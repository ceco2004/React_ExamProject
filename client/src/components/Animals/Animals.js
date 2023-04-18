import { useContext} from "react";

import AnimalCard from "./AnimalCard";
import { AnimalContext } from "../../contexts/AnimalsContext";

export default function Animals() {

    const animalContext = useContext(AnimalContext);
    const animals = animalContext.animals;


    return (
        <section className="carousel-inner py-4">
            <div className="carousel-item active">
                <div className="container">
                    <div className="row">

                 
                 
                 
                    {animals.map(a => (<AnimalCard key={a._id} {...a}/>))}




                    </div>
                </div>
            </div>
        </section>
    )
}