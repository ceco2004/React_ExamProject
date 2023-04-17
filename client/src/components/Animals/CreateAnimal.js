import { AnimalContext } from '../../contexts/AnimalsContext';
import { AuthContext } from '../../contexts/AuthContext';
import useForm from '../../hooks/useForm';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateAnimal() {

    const navigate = useNavigate();

    const { values, changeHandler, validateForm, errors } = useForm({
        name: "",
        age: "",
        imageUrl: "",
        weight: "",
        city: "",
        description: "",
        ownerPhone: "",
        ownerEmail: "",
        adopterId: ""
    });



    const animalContext = useContext(AnimalContext);
    const { accessToken, email } = useContext(AuthContext);

    async function onSuggestHandler(e) {
        e.preventDefault();

        console.log("errors");

        const animalData = { ...values, ownerEmail: email };

        await animalContext.onCreateAnimal(animalData, accessToken)

        navigate("/animals");

    }



    return (
        <form style={{ width: "50%", margin: "50px" }} onSubmit={onSuggestHandler}>
            <h3>Suggest animal for adopting</h3>

            <div className="mb-3" >
                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" name="name" className="form-control" id="exampleFormControlInput1" placeholder="Pet's name..." value={values.name} onChange={changeHandler} onBlur={validateForm} />
                {errors.name && (
                    <p className='text-danger'>{errors.name}</p>
                )}
            </div>

            <div className="mb-3" >
                <label htmlFor="exampleFormControlInput2" className="form-label">Age</label>
                <input type="number" name="age" className="form-control" id="exampleFormControlInput2" placeholder="Pet's age..." value={values.age} onChange={changeHandler} onBlur={validateForm} />
                {(errors.age) && (
                    <p className='text-danger'>{errors.age}</p>
                )}
            </div>

            <div className="mb-3" >
                <label htmlFor="exampleFormControlInput3" className="form-label">Weight</label>
                <input type="number" name="weight" className="form-control" id="exampleFormControlInput3" placeholder="Pet's weight..." value={values.weight} onChange={changeHandler} onBlur={validateForm} />
                {(errors.weight) && (
                    <p className='text-danger'>{errors.weight}</p>
                )}
            </div>

            <div className="mb-3" >
                <label htmlFor="exampleFormControlInput4" className="form-label">Image URL</label>
                <input type="text" name="imageUrl" className="form-control" id="exampleFormControlInput4" placeholder="URL with pet's foto..." value={values.imageUrl} onChange={changeHandler} onBlur={validateForm} />
                {(errors.imageUrl) && (
                    <p className='text-danger'>{errors.imageUrl}</p>
                )}
            </div>

            <div className="mb-3" >
                <label htmlFor="exampleFormControlInput5" className="form-label">City</label>
                <input type="text" name="city" className="form-control" id="exampleFormControlInput5" placeholder="City where pet is..." value={values.city} onChange={changeHandler} onBlur={validateForm} />
                {(errors.city) && (
                    <p className='text-danger'>{errors.city}</p>
                )}
            </div>

            <div className="mb-3" >
                <label htmlFor="exampleFormControlInput5" className="form-label">Owner Phone</label>
                <input type="text" name="ownerPhone" className="form-control" id="exampleFormControlInput5" placeholder="Owner's phone for contacting..." value={values.ownerPhone} onChange={changeHandler} onBlur={validateForm} />
                {(errors.ownerPhone) && (
                    <p className='text-danger'>{errors.ownerPhone}</p>
                )}
            </div>

            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                <textarea className="form-control" name="description" id="exampleFormControlTextarea1" rows="3" placeholder="Short pet's description..." value={values.description} onChange={changeHandler} onBlur={validateForm} />
                {(errors.description) && (
                    <p className='text-danger'>{errors.description}</p>
                )}
            </div>



            <button type="sybmit" className="btn btn-primary">Suggest for adopt</button>


        </form>
    )
}