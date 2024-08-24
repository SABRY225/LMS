import { useSelector } from "react-redux";
import { Link } from "react-router-dom"

function NavbarStudent() {
    let id=useSelector((state) => state.auth.id)
    return (
        <>
            <li className="sidebar-item  nav-item mb-1">
                <a href="#exam" className="sidebar-link collapsed" data-bs-toggle="collapse" data-bs-target="#exam" aria-expanded="false" aria-controls="settings">
                    <i className="fa-solid fa-home pe-2"></i>
                    <span className="topic m-2"> الصفحة الرئيسية</span>
                </a>
            </li>
            <li className="sidebar-item  nav-item mb-1">
                <Link to={`/Student/${id}/mycourses`} className="sidebar-link ">
                    <i className="fa-solid fa-newspaper pe-2"></i>
                    <span className="topic m-2"> كورساتي </span>
                </Link>
            </li>
        </>
    )
}

export default NavbarStudent