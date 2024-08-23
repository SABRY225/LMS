import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { verifyOtpCode } from "../../redux/actions/authAction";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Verify() {
    const {email}=useParams()
    const [otp, setOtp] = useState('');
      const dispatch = useDispatch();
      const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let formData = {
            email,
            otp
        };
        let jsonData = JSON.stringify(formData);
        dispatch(verifyOtpCode(jsonData)).then((response) => {
            if (response.error) {
                toast.error(" رمز التأكيد خطا او منتهي الصلاحية الرجاء اعادة التسجيل مجددا");
            } else {
                toast.success("لقد نجحت عمليت التسجيل ");
                navigate(`/landing`);
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
                <div className='fs-5 fw-bold'>الرجاء كتاب رمز التأكيد المرسل الي حسابك لتأكيد الحساب</div>
            </div>
        <div className='d-flex justify-content-center'>
        <div className='text-center'>
            <form onSubmit={handleSubmit} className="col-md-12">
                <div className="col-md-12 form-group mb-2">
                    <div className=' col-md-12 form-group mb-1 text-center fw-bold fs-6'>
                        <label htmlFor="otp">رمز التأكيد</label>
                    </div>
                    <input
                        type="text"
                        name='otp'
                        id='otp'
                        className="inp"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        required
                    />
                </div>
               
                <div className="col-md-12 form-group mb-4">
                    <input
                        type="submit"
                        value="تاكيد"
                        className="submit-btn w-100"
                    />
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

export default Verify