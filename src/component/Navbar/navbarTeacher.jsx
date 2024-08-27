import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function NavbarTeacher() {
    let id=useSelector((state) => state.auth.id)
    return (
        <>

            <li className="sidebar-item  nav-item mb-1">
                <a href="#" className="sidebar-link collapsed" data-bs-toggle="collapse" data-bs-target="#cousrse" aria-expanded="false" aria-controls="settings">
                    <i className="fa-regular fa-newspaper pe-2" />
                    <span className="topic m-2">الكورسات </span>
                </a>
                <ul id="cousrse" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                <li className="sidebar-item">
                        <Link to={`/Teacher`} className="sidebar-link" >
                            <i className="fa-solid fa-eye pe-2"></i>
                            <span className="topic m-2">كورساتي </span>
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link to={`Teacher/${id}/addcourse`} className="sidebar-link">
                            <i className="fa-solid fa-plus pe-2"></i>
                            <span className="topic m-2">اضافة </span>
                        </Link>
                    </li>
                    
                </ul>
            </li>

            <li className="sidebar-item  nav-item mb-1">
                <a href="#" className="sidebar-link collapsed" data-bs-toggle="collapse" data-bs-target="#lecture" aria-expanded="false" aria-controls="settings">
                    <i className="fa-solid fa-book pe-2" />
                    <span className="topic m-2">الدروس </span>
                </a>
                <ul id="lecture" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                    <li className="sidebar-item">
                        <Link to={`/Teacher/${id}/mylecture`} className="sidebar-link">
                            <i className="fa-solid fa-eye pe-2"></i>
                            <span className="topic m-2">دروسي</span>
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link to={`Teacher/${id}/addlecture`} className="sidebar-link">
                            <i className="fa-solid fa-plus pe-2"></i>
                            <span className="topic m-2">اضافة </span>
                        </Link>
                    </li>
                </ul>
            </li>

            <li className="sidebar-item  nav-item mb-1">
                <a href="#exam" className="sidebar-link collapsed" data-bs-toggle="collapse" data-bs-target="#exam" aria-expanded="false" aria-controls="settings">
                    <i className="fa-regular fa-pen-to-square pe-2" />
                    <span className="topic m-2">الامتحانات </span>
                </a>
                <ul id="exam" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                    <li className="sidebar-item">
                        <Link to={`Teacher/${id}/myexam`} className="sidebar-link">
                            <i className="fa-solid fa-eye pe-2"></i>
                            <span className="topic m-2">امتحاناتي</span>
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link to={`Teacher/${id}/addexam`} className="sidebar-link">
                            <i className="fa-solid fa-plus pe-2"></i>
                            <span className="topic m-2">اضافة </span>
                        </Link>
                    </li>
                </ul>
            </li>
        </>
    )
}

export default NavbarTeacher