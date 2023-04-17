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

        authContext.onLogin(userData);
        // userServices.Login(userData).then(result => {
        //     authContext = result;
        // }).then(() => console.log(authContext));

        navigate("/");

    }


    return (
        <form style={{ width: "50%", margin: "50px" }} onSubmit={onLoginHandler}>
            <div className="mb-3" >
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" name="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={values.email} onChange={changeHandler} onBlur={validateForm} />
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

            {/* <div className="mb-3" >
                <label htmlFor="exampleFormControlInput3" className="form-label">Repeat password</label>
                <input type="password" name="rePass" className="form-control" id="exampleFormControlInput3" placeholder="3 - 6 symbols" value={values.rePass} onChange={changeHandler} onBlur={validateForm} />
                {((values.rePass.length > 0  && errors.rePass) || errors.match) && (
                    <p className='text-danger'>{errors.rePass || errors.match}</p>
                )}
            </div> */}

            <button type="sybmit" class="btn btn-primary">Login</button>


        </form>
    )
}