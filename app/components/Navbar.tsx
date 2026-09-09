import { Link } from "react-router"

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <p className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    RESUMIND
                </p>
            </Link>
            <Link to="/upload" className="primary-button w-fit">
                Upload Resume
            </Link>
        </nav>
    )
}

export default Navbar
