import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendOtpEmail } from "../../redux/actions/authAction";
function SendEmail() {
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        let formData = {
            email
        };
        let jsonData = JSON.stringify(formData);
        dispatch(sendOtpEmail(jsonData)).then((response) => {
            if (response.error) {
                toast.error("البريد الالكتروني غير صالح");
            } else {
                toast.success("تم ارسال رمز التحقق");
                navigate(`/landing/${email}/changePassword`)
            }
        });
    };
  return (
<>
        <div className="col-md-12 " dir="rtl">
        <div className='mt-5'>
        <div className="logo col-md-12 text-center ">
                <i className="fas fa-graduation-cap fs-1"></i>
                <span className='fs-1 fw-bold'>Education</span>
            </div>
            <div className='text-center m-5'>
                <div className='fs-3 fw-bold'>نسيت كلمة السر</div>
            </div>
        <div className='d-flex justify-content-center'>
        <div className='text-center'>
            <form onSubmit={handleSubmit} className="col-md-12">
                <div className="col-md-12 form-group mb-2">
                    <div className=' col-md-12 form-group mb-1 text-center fw-bold fs-6'>
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
                    />
                </div>
               
                <div className="col-md-12 form-group mb-4">
                    <input
                        type="submit"
                        value="ارسال"
                        className="submit-btn w-100"
                    />
                </div>
                <div className="col-md-12 form-group mb-4">
                    <span>ليس لديك حساب ؟ <Link to="./register" className='linkText fw-bold'>انشاء حساب</Link></span>
                </div>
            </form>
            </div>
        </div>
        </div>
            <ToastContainer />
        </div>
        </>
  )
}

export default SendEmail