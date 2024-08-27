import { useState } from 'react';
import Header from '../Landing/Header';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, } from 'react-redux';
import { signInUser } from '../../redux/actions/authAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        let formData = {
            email,
            password,
        };
        let jsonData = JSON.stringify(formData);
        dispatch(signInUser(jsonData)).then((response) => {
            console.log(response);
            if (response.payload.message !=='Login successful') {
                toast.error("فشلت عمليت التسجيل الرجاء المحاولة مرة أخري");
            } else {
                 toast.success("لقد نجحت عمليت التسجيل ");
                localStorage.setItem('token',response.payload.Token)
                localStorage.setItem('roleStorage',response.payload.Role)
                const role=localStorage.getItem('roleStorage')
                if (role=="Admin") {
                    navigate(`/admin`);
                }else if(role=="Teacher"){
                    navigate(`/Teacher`);
                }else{
                    navigate(`/Student`);
                }
            }
        });
    };
    return (
        <>
        <div className="col-md-12 " dir="rtl">
        <div className='mt-5'>
        <Header />
        <div className='d-flex justify-content-center'>
        <div className='text-center'>
            <form onSubmit={handleSubmit} className="col-md-12">
                <div className="col-md-12 form-group mb-2">
                    <div className=' col-md-12 form-group mb-1 text-end fw-bold fs-5'>
                        <label htmlFor="email">البريد الالكتروني</label>
                    </div>
                    <input
                        type="email"
                        name='email'
                        id='email'
                        className="inp"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        dir="rtl"
                    />
                </div>
                <div className=' col-md-12 form-group mb-1 text-end fw-bold fs-5'>
                    <label htmlFor="password "> كلمة السر</label>
                </div>
                <div className="col-md-12 form-group mb-1">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="inp"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="col-md-12 form-group mb-4 text-start ">
                    <Link to="./sendEmail" className='linkText fw-bold'>نسيت كلمة السر؟</Link>
                </div>
                <div className="col-md-12 form-group mb-4">
                    <input
                        type="submit"
                        value="دخول"
                        className="submit-btn w-100"
                    />
                </div>
                <div className="col-md-12 form-group mb-4">
                    <span>ليس لديك حساب ؟ <Link to="./selectRole" className='linkText fw-bold'>انشاء حساب</Link></span>
                </div>
            </form>
            </div>
        </div>
        </div>
            <ToastContainer />
        </div>
        </>
    );
}

export default SignIn;
