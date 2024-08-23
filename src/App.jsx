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
import {SignUp,SignIn, SendEmail, Verify, SelectRole, ChangePassword} from './component/constant/Path';

 
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