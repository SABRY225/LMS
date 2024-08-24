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
                        <Link to={`/Teacher/${id}/mycourses`} className="sidebar-link" >
                            <i className="fa-solid fa-eye pe-2"></i>
                            <span className="topic m-2">كورساتي </span>
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link to={`/teacher`} className="sidebar-link">
                            <i className="fa-solid fa-plus pe-2"></i>
                            <span className="topic m-2">اضافة </span>
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <a href="#" className="sidebar-link">
                            <i className="fa-solid fa-pen pe-2"></i>
                            <span className="topic m-2">تعديل </span>
                        </a>
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
                        <a href="#" className="sidebar-link">
                            <i className="fa-solid fa-plus pe-2"></i>

                            <span className="topic m-2">اضافة </span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="#" className="sidebar-link">
                            <i className="fa-solid fa-trash pe-2"></i>
                            <span className="topic m-2">حذف </span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="#" className="sidebar-link">
                            <i className="fa-solid fa-pen pe-2"></i>
                            <span className="topic m-2">تعديل </span>
                        </a>
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
                        <a href="#" className="sidebar-link">
                            <i className="fa-solid fa-plus pe-2"></i>

                            <span className="topic m-2">اضافة </span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="#" className="sidebar-link">
                            <i className="fa-solid fa-trash pe-2"></i>
                            <span className="topic m-2">حذف </span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="#" className="sidebar-link">
                            <i className="fa-solid fa-pen pe-2"></i>
                            <span className="topic m-2">تعديل </span>
                        </a>
                    </li>
                </ul>
            </li>
        </>
    )
}

export default NavbarTeacher