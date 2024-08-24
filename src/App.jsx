import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoutes from './component/ProtectedRoutes/ProtectedRoutes';
import {LayoutAuth, LayoutAPP,ErrorPage} from './Layout/index';
import Store from './redux/store/stroe';
import { Provider } from 'react-redux';
// import AuthPage from './Pages/authPage';
// import SignIn from './component/Auth/signIn';
import Landing from './component/Landing/Landing';
import {SignUp,SignIn, SendEmail, Verify, SelectRole, ChangePassword, Profile, AddCourse, AddStudent} from './component/constant/Path';
// import StudentPage from './Pages/StudentPage';
import '@coreui/coreui/dist/css/coreui.min.css'
import AppPage from './Pages/appPage';
import MyCoursesPage from './Pages/MyCoursesPage';
import TeacherPage from './Pages/teacherPage';
import AdminPage from './Pages/adminPage';
import StudentPage from './Pages/studentPage';
 
const routers = createBrowserRouter([
  {
    path: "/",
    element: (
        <LayoutAuth />
    ),
    children: [
      {path:"landing",element:<Landing /> ,children:[
        {index:true,element:<SignIn />},
        {path:"register/:role",element:<SignUp />},
        {path:"sendEmail",element:<SendEmail />},
        {path:":email/verifyRgister",element:<Verify />},
        {path:"selectRole",element:<SelectRole />},
        {path:":email/changePassword",element:<ChangePassword />}
      ]},

    ],
    errorElement:(<ErrorPage />)
  },
  {
    path: "/",
    element: (
      <ProtectedRoutes>
        <LayoutAPP />
      </ProtectedRoutes>
    ),
    children: [
      {index:true,element:<AppPage />},
      {path:'profile',element:<Profile />},
      {path:'Teacher',element:<TeacherPage />,children:[
        {index:true,element:<AddCourse />},
        {path:':id/mycourses',element:<MyCoursesPage />},

      ]},
      {path:'admin',element:<AdminPage />,children:[
        {index:true,element:<AddStudent />}

      ]},
      {path:'Student',element:<StudentPage />,children:[
       {path:':id/mycourses',element:<MyCoursesPage />},

      ]}
     
    ],
    errorElement:(<ErrorPage />)
  },
]);
function App() {

  
  return (
    <Provider store={Store} >
    <RouterProvider router={routers} />
  </Provider>
  )
}
<link rel="stylesheet" href="./tyle.css" />
export default App