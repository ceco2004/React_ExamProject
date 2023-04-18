import { Navigate, useParams} from "react-router-dom";
import { useContext } from "react";
import { AnimalContext } from "../../contexts/AnimalsContext";
import { AuthContext } from "../../contexts/AuthContext";


export default function ForOwner({redirect}){

    const{animals} = useContext(AnimalContext);
    const{_id} = useContext(AuthContext);
    const {id} = useParams();

  

    const isOwner = true;

    if(!isOwner){
        return <Navigate to="/" replace />;
    }

    return redirect;


}