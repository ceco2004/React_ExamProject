import { AnimalContext } from '../../contexts/AnimalsContext';
import { AuthContext } from '../../contexts/AuthContext';
import useForm from '../../hooks/useForm';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as animalServices from '../../services/animalServices';


export default function AnimalEdit() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [animal, setAnimal] = useState({});

    let { values, changeHandler, validateForm, errors } = useForm({});
    

    useEffect(() => {
        animalServices.getOne(id)
            .then(data => setAnimal(data));
    }, [id])

    useEffect(() => {
        for (let key in animal) {
            let e = {};
            e.target = { name: key, value: animal[key] }
            changeHandler(e)
        }
    }, [animal])


    const animalContext = useContext(AnimalContext);
    const { accessToken } = useContext(AuthContext);

    async function onEditHandler(e) {
        e.preventDefault();

        animalContext.onEditAnimal(values, accessToken);

        navigate("/animals");
    }



    return (
        <form style={{ width: "50%", margin: "50px" }} onSubmit={onEditHandler}>
            <h3>Edit animal data</h3>

            <div className="mb-3" >
                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" name="name" className="form-control" id="exampleFormControlInput1" placeholder="Pet's name..." defaultValue={values.name} onChange={changeHandler} onBlur={validateForm} />
                {errors.name && (
                    <p className='text-danger'>{errors.name}</p>
                )}
            </div>

            <div className="mb-3" >
                <label htmlFor="exampleFormControlInput2" className="form-label">Age</label>
                <input type="number" name="age" className="form-control" id="exampleFormControlInput2" placeholder="Pet's age..." defaultValue={values.age} onChange={changeHandler} onBlur={validateForm} />
                {(errors.age) && (
                    <p className='text-danger'>{errors.age}</p>
                )}
            </div>

            <div className="mb-3" >
                <label htmlFor="exampleFormControlInput3" className="form-label">Weight</label>
                <input type="number" name="weight" className="form-control" id="exampleFormControlInput3" placeholder="Pet's weight..." defaultValue={values.weight} onChange={changeHandler} onBlur={validateForm} />
                {(errors.weight) && (
                    <p className='text-danger'>{errors.weight}</p>
                )}
            </div>

            <div className="mb-3" >
                <label htmlFor="exampleFormControlInput4" className="form-label">Image URL</label>
                <input type="text" name="imageUrl" className="form-control" id="exampleFormControlInput4" placeholder="URL with pet's foto..." defaultValue={values.imageUrl} onChange={changeHandler} onBlur={validateForm} />
                {(errors.imageUrl) && (
                    <p className='text-danger'>{errors.imageUrl}</p>
                )}
            </div>

            <div className="mb-3" >
                <label htmlFor="exampleFormControlInput5" className="form-label">City</label>
                <input type="text" name="city" className="form-control" id="exampleFormControlInput5" placeholder="City where pet is..." defaultValue={values.city} onChange={changeHandler} onBlur={validateForm} />
                {(errors.city) && (
                    <p className='text-danger'>{errors.city}</p>
                )}
            </div>

            <div className="mb-3" >
                <label htmlFor="exampleFormControlInput5" className="form-label">Owner Phone</label>
                <input type="text" name="ownerPhone" className="form-control" id="exampleFormControlInput5" placeholder="Owner's phone for contacting..." defaultValue={values.ownerPhone} onChange={changeHandler} onBlur={validateForm} />
                {(errors.ownerPhone) && (
                    <p className='text-danger'>{errors.ownerPhone}</p>
                )}
            </div>

            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                <textarea className="form-control" name="description" id="exampleFormControlTextarea1" rows="3" placeholder="Short pet's description..." defaultValue={values.description} onChange={changeHandler} onBlur={validateForm} />
                {(errors.description) && (
                    <p className='text-danger'>{errors.description}</p>
                )}
            </div>



            <button type="sybmit" className="btn btn-primary">Edit data</button>


        </form>
    )
}