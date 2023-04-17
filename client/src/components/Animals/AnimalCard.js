import { Link } from "react-router-dom";



export default function AnimalCard({
                                    _id,
                                    name,
                                    imageUrl,
                                    description,
}){

    return (
        <div className="col-lg-4 d-none d-lg-block" style={{marginBottom: "30px"}}>
        <div className="card">
            <img
                src={imageUrl}
                className="card-img-top"
                alt={`${name}-imageeeee`}
            />
            <div className="card-body">
                <h5 className="card-title">Pet name: {name}</h5>
                <p className="card-text">
                    {description}
                </p>
                <Link to={_id} className="btn btn-primary">More info...</Link>
            </div>
        </div>
    </div>
    )
}