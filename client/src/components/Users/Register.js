import { AuthContext } from '../../contexts/AuthContext';
import useForm from '../../hooks/useForm';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const { values, changeHandler, validateForm, errors } = useForm({ email: "", password: "", rePass: "" });

    const navigate = useNavigate();
    const authContext = useContext(AuthContext);

    async function onRegisterHandler(e) {
        e.preventDefault();

        if(values.password === values.rePass){

            const userData = { email: values.email, password: values.password };
            
           await authContext.onRegister(userData);
            
            navigate("/");
        }
    }
    


    return (
        <form style={{ width: "50%", margin: "50px" }} onSubmit={onRegisterHandler}>
            <h3>Register</h3>
            <div className="mb-3" >
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" name="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={values.email} onChange={changeHandler} onBlur={validateForm} />
                {(values.email.length > 0 && errors.email) && (
                    <p className='text-danger'>{errors.email}</p>
                )}
            </div>

            <div className="mb-3" >
                <label htmlFor="exampleFormControlInput2" className="form-label">Password</label>
                <input type="password" autoComplete="on" name="password" className="form-control" id="exampleFormControlInput2" placeholder="3 - 6 symbols" value={values.password} onChange={changeHandler} onBlur={validateForm} />
                {((values.password.length > 0 && errors.password) || errors.match) && (
                    <p className='text-danger'>{errors.password || errors.match}</p>
                )}
            </div>

            <div className="mb-3" >
                <label htmlFor="exampleFormControlInput3" className="form-label">Repeat password</label>
                <input type="password" autoComplete="on" name="rePass" className="form-control" id="exampleFormControlInput3" placeholder="3 - 6 symbols" value={values.rePass} onChange={changeHandler} onBlur={validateForm} />
                {((values.rePass.length > 0  && errors.rePass) || errors.match) && (
                    <p className='text-danger'>{errors.rePass || errors.match}</p>
                )}
            </div>

            <button type="sybmit" className="btn btn-primary">Register</button>


        </form>
    )
}