import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshAuthToken } from '../../redux/actions/authAction';


export default function ProtectedRoutes({ children }) {
    // let logOutbtn=false
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.token);
    const navigate = useNavigate();
    const token=localStorage.getItem('token')
    console.log(!token);
    
    useEffect(() => {
        if (!token) {
            localStorage.removeItem('token');
            return navigate('/landing')
        }else{
            if(!isLoggedIn){
                let formData = {
                    token
                };
                let jsonData = JSON.stringify(formData);
                dispatch(refreshAuthToken(jsonData)).then((response) => {
                    console.log(response);
                    if (response.error) {
                        console.log("فشلت عمليت التسجيل الرجاء المحاولة مرة أخري");
                    } else {
                       console.log("لقد نجحت عمليت التسجيل ");
                       localStorage.setItem('token',response.payload.token)
                       
                    }
                });
             }
        }
      
    }, [isLoggedIn, navigate]);

    if (!isLoggedIn) {
        return null;
    }

    return children;
}
