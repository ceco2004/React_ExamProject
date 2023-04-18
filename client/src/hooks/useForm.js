import { useState } from "react";

export default function useForm(initValues) {
    const [values, setValues] = useState(initValues || {});
    const [errors, setErrors] = useState({});

    function changeHandler(e) {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }



    const messages = {
        password: "Password must be between 3 and 6 characters long ",
        notMatch: "Passwords don't match ",
        email: "Email is not valid ",
        age: "Value must be positive number ",
        city: "Value must be at least 2 characters ",
        imageUrl: "Value must be not blank ",
        description: "Description must be at least 50 characters ",
    }


    function validateForm(e) {
        let message = "";


        switch (e.target.name) {
            case "password":
            case "rePass":
                if (values[e.target.name]?.length < 3 || values[e.target.name]?.length > 6) {
                    message = messages.password
                };

                if ((values.password && values.rePass) && values.password !== values.rePass) {
                    setErrors(state => ({ ...state, match: messages.notMatch }));

                }
                break;
            case "email":
                if (!values[e.target.name]?.includes("@")) {
                    message = messages.email;
                }
                break;
            case "name":
            case "city":
                if(values[e.target.name]?.length < 2) {
                     message = messages.city;
                 }
                 break;
            case "age":
            case "weight":
                if(values[e.target.name] && Number(values[e.target.name]) <= 0) {
                    message = messages.age;
                }
                break;
            case "imageUrl":
            case "ownerPhone":
                if(values[e.target.name]?.length < 1){
                    message = messages.imageUrl;
                }
                break;
            case "description":
                if(values[e.target.name]?.length < 50){
                    message = messages.description;
                }
                break;



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