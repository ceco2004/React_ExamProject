import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Adopt pet - Save thier life</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div style={{ right: "150px" }}>
                    <div className="collapse navbar-collapse" id="navbarNav" >
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">Animals</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled">Disabled</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">Login</Link>
                            </li><li className="nav-item">
                                <Link className="nav-link" href="#">Register</Link>
                            </li><li className="nav-item">
                                <Link className="nav-link" href="#">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}