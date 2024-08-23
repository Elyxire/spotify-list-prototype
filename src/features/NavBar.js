import { NavLink } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li>
                    <NavLink to="/" activeClassName="active-link" className="nav-link">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/podcast" activeClassName="active-link" className="nav-link">Podcast Page</NavLink>
                </li>
                <li>
                    <NavLink to="/otherPage" activeClassName="active-link" className="nav-link">Other Page</NavLink>
                </li>

            </ul>
        </nav>
    );
};

export default Navbar;