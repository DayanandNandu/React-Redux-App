import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to={'/'}><h2>React Redux App</h2></Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link px-3" to={'/users'}><h4>Users</h4></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-3" to={'/posts'}><h4>Posts</h4></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-3" to={'/comments'}><h4>Comments</h4></Link>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}
export default Header;