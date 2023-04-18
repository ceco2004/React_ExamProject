import { useParams, useNavigate } from "react-router-dom";
import * as animalServices from '../../services/animalServices';
import { useEffect, useState } from "react";
import AnimalEdit from "./AnimalEdit";


export default function AnimalInfo() {
    const [animal, setAnimal] = useState({});
    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        animalServices.getOne(id)
            .then(a => setAnimal(a))
    }, [id]);


    function onEdit(id){
       navigate(`edit`);
    }

    function onRemove(){
        //TODO...
    }


    return (
       <>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Name: {animal.name}</h5>
                <p className="card-text">{animal.description}</p>
                <p className="card-text"><big className="text-muted">Age: {animal.age}</big></p>
                <p className="card-text"><big className="text-muted">Weight: {animal.weight}</big></p>
                <p className="card-text"><big className="text-muted">Owner: {animal.ownerEmail} - phone: {animal.ownerPhone}</big></p>
                <p className="card-text"><big className="text-muted">City: {animal.city}</big></p>
            </div>
            <img style={{width:"50%", height: "50%"}} src={animal.imageUrl} className="card-img-bottom" alt="..." />
            
        </div>
        <button type="button" className="btn btn-primary" onClick={() => onEdit(animal._id)}>Edit</button>
        <button type="button" className="btn btn-danger" onClick={onRemove}>Remove</button>
       </>
    )

}