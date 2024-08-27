import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshAuthToken } from '../../redux/actions/authAction';

export default function ProtectedRoutes({ children }) {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.token);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    
    useEffect(() => {
        if (!token || localStorage.getItem('token')=='undefined') {
            localStorage.clear()
            localStorage.removeItem('token')
            navigate('/landing');
        } else if (!isLoggedIn) {
            const formData = {
                token,
            };
            dispatch(refreshAuthToken(formData)).then((response) => {
                if (response.error) {
                    console.log("فشلت عمليت التسجيل الرجاء المحاولة مرة أخرى");
                    navigate('/landing');  // Redirect to landing page on failure
                } else {
                    localStorage.setItem('token', response.payload.token);
                }
            });
        }
    }, [dispatch, isLoggedIn, navigate, token]);

    if (!isLoggedIn) {
        return null;
    }

    return children;
}
