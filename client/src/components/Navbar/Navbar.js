import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Navbar() {

    const context = useContext(AuthContext);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Adopt pet - Save thier life</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <h3>Hello {context.email ? context.email : "Guest"}</h3>

                <div style={{ right: "150px" }}>
                    <div className="collapse navbar-collapse" id="navbarNav" >
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/animals">Animals</Link>
                            </li>
                            {context.email && (
                                <li className="nav-item">
                                    <Link className="nav-link" to="/publish">Publish</Link>
                                </li>
                            )}
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            {!context.email && (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/register">Register</Link>
                                    </li>
                                </>
                            )}
                            {context.email && (
                                <li className="nav-item">
                                    <Link className="nav-link" to="/logout">Logout</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}