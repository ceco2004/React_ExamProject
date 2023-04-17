import { useState } from "react";

export default function useForm(initValues) {
    const [values, setValues] = useState(initValues);
    const [errors, setErrors] = useState({});

    function changeHandler(e) {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }



    const messages = {
        password: "Password must be between 3 and 6 characters long ",
        notMatch: "Passwords don't match ",
        email: "Email is not valid ",
    }


    function validateForm(e) {

        let message = "";


        switch (e.target.name) {
            case "password":
            case "rePass":
                if (values[e.target.name].length < 3 || values[e.target.name].length > 6) {
                    message = messages.password
                };

                if ((values.password && values.rePass) && values.password !== values.rePass) {
                    setErrors(state => ({ ...state, match: messages.notMatch }));

                }
                break;
            case "email":
                if (!values[e.target.name].includes("@")) {
                    message = messages.email
                }


            default:

        }

        setErrors(state => ({ ...state, [e.target.name]: message }));


    }



    return {
        values,
        changeHandler,
        validateForm,
        errors
    }
}