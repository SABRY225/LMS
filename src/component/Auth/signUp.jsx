// import './auth.css'; // Ensure this file exists and has styles
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../../services/firebase';  // Import the storage object
import { signUpUser } from '../../redux/actions/authAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function SignUp() {
    const msg = useSelector((state) => state.auth.msg);
    let { role } = useParams();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repetPassword, setRepetPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== repetPassword) {
            toast.error("كلمتان المرور غير متطابقتان");
            return;
        }

        if (!file) return;

        const storageRef = ref(storage, `imagesProfile/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(progress);
                setLoading(true);
            },
            (error) => {
                console.error("Upload failed: ", error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

                    // Proceed with form submission after image is uploaded
                    let formData = {
                        role,
                        email,
                        password,
                        firstName,
                        lastName,
                        address,
                        phone,
                        userImg: downloadURL
                    };
                    let jsonData = JSON.stringify(formData);
                    dispatch(signUpUser(jsonData)).then((response) => {
                        if (response.error) {
                            toast.error("فشلت عمليت انشاء حساب الرجاء المحاولة مرة أخري");
                        } else {
                            toast.success("لقد نجحت عمليت التسجيل ");
                            setLoading(false);
                            navigate(`/landing/${formData.email}/verifyRgister`);
                        }
                    });
                    console.log(msg);

                });
            }
        );
    };

    return (
        <div className="col-md-12" dir="rtl" >
            <div className='mt-5'>
                <div className="logo col-md-12 text-center ">
                    <span className='fs-1 fw-bold m-3'>تعلم</span>
                    <i className="fas fa-graduation-cap fs-1"></i>
                </div>
                <div className='text-start m-5'>
                    <div className=' fs-6 fw-bold'>
                        لديك حساب بالفعل؟  <Link to="/landing" className=' linkText'>
                            الدخول الي حسابك
                        </Link>
                    </div>
                </div>
                <div className='text-center m-5'>
                    <div className=' fs-2 fw-bold'>
                        انشاء حساب
                    </div>
                </div>
                <div className={loading ? '' : 'd-flex justify-content-center'}>
                    <div className='text-center'>
                        {
                            !loading ? <>
                                <form onSubmit={handleSubmit} className="col-md-12">
                                    <div className="col-md-12 d-flex form-group mb-2">
                                        <div className='order-1 col-md-6 m-1'>
                                            <div className=' col-md-12 form-group mb-1 text-end fw-bold fs-5'>
                                                <label htmlFor="firstName">الاسم الاول</label>
                                            </div>
                                            <input
                                                type="text"
                                                name='firstName'
                                                id='firstName'
                                                className="inp"
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className='order-2 col-md-6 m-1'>
                                            <div className=' col-md-12 form-group mb-1 text-end fw-bold fs-5'>
                                                <label htmlFor="lastName">الاسم الأخير</label>
                                            </div>
                                            <input
                                                type="text"
                                                name='lastName'
                                                id='lastName'
                                                className="inp"
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className=' col-md-12 form-group mb-1 text-end fw-bold fs-5'>
                                        <label htmlFor="email"> البريد الالكتروني</label>
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
                                    <div className=' col-md-12 form-group mb-1 text-end fw-bold fs-5'>
                                        <label htmlFor="Repetpassword "> اعادة كتابة كلمة السر</label>
                                    </div>
                                    <div className="col-md-12 form-group mb-1">
                                        <input
                                            type="password"
                                            name="Repetpassword"
                                            id="Repetpassword"
                                            className="inp"
                                            value={repetPassword}
                                            onChange={(e) => setRepetPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className=' col-md-12 form-group mb-1 text-end fw-bold fs-5'>
                                        <label htmlFor="phone ">رقم الهاتف</label>
                                    </div>
                                    <div className="col-md-12 form-group mb-1">
                                        <input
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            className="inp"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className=' col-md-12 form-group mb-1 text-end fw-bold fs-5'>
                                        <label htmlFor="address "> العنوان</label>
                                    </div>
                                    <div className="col-md-12 form-group mb-1">
                                        <input
                                            type="text"
                                            name="address"
                                            id="address"
                                            className="inp"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className=' col-md-12 form-group mb-1 text-end fw-bold fs-5'>
                                        <label htmlFor="address "> صورة شخصية</label>
                                    </div>
                                    <div className="col-md-12 form-group mb-1">
                                        <input
                                            type="file"
                                            name="userImg"
                                            id="userImg"
                                            className="inp form-control"
                                            onChange={handleFileChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-12 form-group mt-3 mb-5">
                                        <input
                                            type="submit"
                                            value="انشاء حساب"
                                            className="submit-btn w-100"
                                        />
                                    </div>
                                </form>
                            </> : <>
                                <div>جاري انشاء حساب</div>
                                <div className="progress mt-3 ">
                                    <div
                                        className="progress-bar progress-bar-striped bg-warning"
                                        role="progressbar"
                                        style={{ width: `${progress}%` }}
                                        aria-valuenow={progress}
                                        aria-valuemin="0"
                                        aria-valuemax="100">
                                        {Math.round(progress)}%
                                    </div>
                                </div>

                            </>
                        }
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default SignUp;
