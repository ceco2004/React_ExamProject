import { useParams } from "react-router-dom";
import * as animalServices from '../../services/animalServices';
import { useEffect, useState } from "react";


export default function AnimalInfo() {
    const [animal, setAnimal] = useState({});

    const { id } = useParams();

    useEffect(() => {
        animalServices.getOne(id)
            .then(a => setAnimal(a))
    }, [id]);


    console.log(animal);


    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
            <img src="..." className="card-img-bottom" alt="..." />
        </div>
    )

}