import { Link, Outlet, useNavigate } from 'react-router-dom'
import '../component/Style/Sidebar.css'
import {NavbarTeacher, NavbarAdmin, NavbarStudent } from '../component/constant/Path'
import { logout } from '../redux/reducers/authSlice'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from '../redux/actions/userAction';
function LayoutAPP() {
  const role = localStorage.getItem('roleStorage');
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
    dispatch(fetchCurrentUser(token))
  })
   const handelLogOut =()=>{
        localStorage.clear();
        dispatch(logout())
        navigate(`/landing`);
   }
  return (
    <div dir="rtl">
    <div className="container-fluid p-0 d-flex">
    <div id="bdSidebar" className=" d-flex flex-column flex-shrink-0 p-3 bg-warning text-white offcanvas-md offcanvas-start">
                    <a href="#" className="navbar-brand text-center">
                    <i className="fas fa-graduation-cap fs-5"></i>
                    <span className='fs-5 fw-bold m-2'>تعلم</span>
                    </a><hr />
                    <ul className="mynav nav nav-pills flex-column mb-auto">
                      {
                        role=='Teacher' ? <NavbarTeacher /> : ''
                      }
                       {
                        role=='Student' ?  <NavbarStudent /> : ''
                      }
                       {
                        role=='Admin' ? <NavbarAdmin />  : ''
                      }                    
                        {/*  */}
                        <li className="sidebar-item  nav-item mb-1">
                            <a href="#" className="sidebar-link collapsed" data-bs-toggle="collapse" data-bs-target="#settings" aria-expanded="false" aria-controls="settings">
                                <i className="fas fa-cog pe-2 " />
                                <span className="topic m-2">الاعدادات </span>
                            </a>
                            <ul id="settings" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                                <li className="sidebar-item">
                                    <Link to={'./profile'} className="sidebar-link">
                                        <i className="fa-regular fa-user pe-2" />
                                        <span className="topic m-2">حسابي</span>
                                    </Link>
                                </li>
                                <li className="sidebar-item">
                                    <div href="#" className="sidebar-link LogOut" onClick={handelLogOut}>
                                        <i className="fas fa-sign-out-alt pe-2" />
                                        <span className="topic m-2">تسجيل خروج</span>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <hr />
                </div>
      <div className="bg-light flex-fill">
        <div className="p-2 d-md-none d-flex text-white bg-warning">
          <a href="#" className="text-white" data-bs-toggle="offcanvas" data-bs-target="#bdSidebar">
            <i className="fa-solid fa-bars fs-3 mt-2" />
          </a>
        </div>
        <div className="p-4">
          <div className="row">
            <div className="col">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default LayoutAPP