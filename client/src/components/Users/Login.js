import { AuthContext } from '../../contexts/AuthContext';
import useForm from '../../hooks/useForm';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const { values, changeHandler, validateForm, errors } = useForm({ email: "", password: "", rePass: "" });

    let navigate = useNavigate();
    let authContext = useContext(AuthContext);

    async function onLoginHandler(e) {
        e.preventDefault();

        const userData = { email: values.email, password: values.password };

        const result = await authContext.onLogin(userData);

        if(result?.error){
            navigate("error")
        }
        navigate("/animals");

    }


    return (
        <form style={{ width: "50%", margin: "50px" }} onSubmit={onLoginHandler}>
            <h3>Login</h3>
            <div className="mb-3" >
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" autoComplete="on" name="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={values.email} onChange={changeHandler} onBlur={validateForm} />
                {(values.email.length > 0 && errors.email) && (
                    <p className='text-danger'>{errors.email}</p>
                )}
            </div>

            <div className="mb-3" >
                <label htmlFor="exampleFormControlInput2" className="form-label">Password</label>
                <input type="password" name="password" className="form-control" id="exampleFormControlInput2" placeholder="3 - 6 symbols" value={values.password} onChange={changeHandler} onBlur={validateForm} />
                {((values.password.length > 0 && errors.password) || errors.match) && (
                    <p className='text-danger'>{errors.password || errors.match}</p>
                )}
            </div>


            <button type="sybmit" className="btn btn-primary">Login</button>


        </form>
    )
}