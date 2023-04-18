import { useParams, useNavigate } from "react-router-dom";
import * as animalServices from '../../services/animalServices';
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { AnimalContext } from "../../contexts/AnimalsContext";


export default function AnimalInfo() {
    const [animal, setAnimal] = useState({});
    const [isOwner, setIsOwner] = useState(false);
    const { _id, accessToken } = useContext(AuthContext);
    const animalContext = useContext(AnimalContext);

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {

        animalServices.getOne(id)
            .then(a => {
                setAnimal(a)
                setIsOwner(_id === a._ownerId)
            });

    }, [id]);

    ;


    function onEdit(id) {
        navigate(`/animals/${id}/edit`);
    }

    function onRemove(id) {

        animalContext.onDeleteAnimal(id, accessToken)

    }

    // function onOfferAdoption(animalId, userId){
    // }



    return (
        <>
            <div className="card" style={{ margin: "100px",  }}>
                <div className="card-body" >
                    <h5 className="card-title">Name: {animal.name}</h5>
                    <p className="card-text">{animal.description}</p>
                    <p className="card-text"><big className="text-muted">Age: {animal.age}</big></p>
                    <p className="card-text"><big className="text-muted">Weight: {animal.weight}</big></p>
                    <p className="card-text"><big className="text-muted">Owner: {animal.ownerEmail} - phone: {animal.ownerPhone}</big></p>
                    <p className="card-text"><big className="text-muted">City: {animal.city}</big></p>
                </div>
                <img style={{ width: "350px", height: "350px", marginBottom: "30px" }} src={animal.imageUrl} className="card-img-bottom" alt="..." />


                {isOwner && (
                    <div>
                        <button type="button" className="btn btn-primary" onClick={() => onEdit(animal._id)}>Edit</button>


                        {/* <!-- Button trigger modal --> */}
                        <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >
                            Remove
                        </button>

                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Question</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                                    </div>
                                    <div className="modal-body">
                                        <h3 className="text-danger">Are You sure to complete remove {animal.name}</h3>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => onRemove(animal._id)}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                )}

            </div>

            {/* {(!isOwner && animal.adopterId === "x") && (
                <button type="button" className="btn btn-primary" onClick={() => onOfferAdoption(animal._id, _id)}>I offer adoption</button>
            )} */}


        </>
    )

}