import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                <Link className="navbar-brand" to="/">WebSiteName</Link>
                </div>
                <ul className="nav navbar-nav">
                    <li><Link to="/timer">Timer</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Header;