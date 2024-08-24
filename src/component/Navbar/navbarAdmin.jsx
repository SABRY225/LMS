import { Link } from "react-router-dom"

function NavbarAdmin() {
    return (
        <>
            <li className="sidebar-item  nav-item mb-1">
                <Link to='/admin' className="sidebar-link" >
                    <i className="fa-solid fa-plus pe-2"></i>
                    <span className="topic m-2">اضافة اعضاء جدد </span>
                </Link>
            </li>
        </>
    )
}

export default NavbarAdmin