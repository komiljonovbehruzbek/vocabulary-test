import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    📚 Vocabulary Test
                </Link>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Bosh sahifa
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/test" className="nav-link">
                            Test
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/tenses" className="nav-link">
                            Zamonlar
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">
                            Haqida
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
