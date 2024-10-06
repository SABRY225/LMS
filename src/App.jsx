import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoutes from './component/ProtectedRoutes/ProtectedRoutes';
import {LayoutAuth, LayoutAPP,ErrorPage} from './Layout/index';
import Store from './redux/store/stroe';
import { Provider } from 'react-redux';
import Landing from './component/Landing/Landing';
import {SignUp,SignIn, SendEmail, Verify, SelectRole, ChangePassword, Profile, AddCourse, AddStudent} from './component/constant/Path';
import '@coreui/coreui/dist/css/coreui.min.css'
import AppPage from './Pages/appPage';
import MyCoursesPage from './Pages/MyCoursesPage';
import TeacherPage from './Pages/teacherPage';
import AdminPage from './Pages/adminPage';
import StudentPage from './Pages/studentPage';
import MyLecturePage from './Pages/myLecturePage';
import AddLecture from './component/Dashboard/dashboardTeacher/addLecture';
import EditLecture from './component/Dashboard/dashboardTeacher/editLecture';
import EditCourse from './component/Dashboard/dashboardTeacher/editCourse';
import EditExam from './component/Dashboard/dashboardTeacher/editExam';
import AddExam from './component/Dashboard/dashboardTeacher/addExam';
import MyExamPage from './Pages/myExamPage';
import ViewLecturePage from './Pages/ViewLecturePage';
import ViewExamPage from './Pages/viewExamPage';
import ViewCourse from './Pages/viewCourse';
import Courses from './Pages/courses';
import ViewSubCourse from './Pages/ViewSubCourse';
 
const routers = createBrowserRouter([
  {
    path: "/",
    element: (
        <LayoutAuth />
    ),
    children: [
      {index:true,element:<AppPage />},
      {path:"landing",element:<Landing /> ,children:[
        {index:true,element:<SignIn />},
        {path:"register/:role",element:<SignUp />},
        {path:"sendEmail",element:<SendEmail />},
        {path:":email/verifyRgister",element:<Verify />},
        {path:"selectRole",element:<SelectRole />},
        {path:":email/changePassword",element:<ChangePassword />}
      ]},
      {path:"#",element:<ErrorPage />}

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
      {path:'profile',element:<Profile />},
      {path:'Teacher',element:<TeacherPage />,children:[
        // course
        {index:true,element:<MyCoursesPage />},
        {path:':id/addcourse',element:<AddCourse />},
        {path:':courseId/editcourse',element:<EditCourse />},
        // lecture
        {path:':id/mylecture',element:<MyLecturePage />},
        {path:':id/addlecture',element:<AddLecture />},
        {path:':lectureId/editlecture',element:<EditLecture />},
        {path:':lectureId/viewlecture',element:<ViewLecturePage />},
        // exam
        {path:':id/myexam',element:<MyExamPage />},
        {path:':id/addexam',element:<AddExam />},
        {path:':examId/editexam',element:<EditExam />},
        {path:':examId/viewexam',element:<ViewExamPage />}
      ]},
      {path:'admin',element:<AdminPage />,children:[
        {index:true,element:<AddStudent />}

      ]},
      {path:'Student',element:<StudentPage />,children:[
       {index:true,element:<Courses />},
       {path:':id/mycourses',element:<MyCoursesPage />},
       {path:':courseId/mylecture',element:<MyLecturePage />},
       {path:':courseId/myexam',element:<MyExamPage />},
       {path:':courseId/viewcourse',element:<ViewCourse />},
       {path:':courseId',element:<ViewSubCourse />},
       {path:':lectureId/viewlecture',element:<ViewLecturePage />},

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