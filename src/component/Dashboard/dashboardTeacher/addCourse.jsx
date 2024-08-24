import { useState } from 'react';
import "../../Style/Course.css";
import { useDispatch } from 'react-redux';
import { addCourseAction } from '../../../redux/actions/courseAction';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../../../services/firebase';  // Import the storage object
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AddCourse() {
    const token = localStorage.getItem('token');
    const dispatch = useDispatch();
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        nameMaterial: '',
        level: '',
        semester: '',
        price: '',
        courseImg: null,
        code: Math.floor(Math.random() * 100000 + 1)
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'file' ? files[0] : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const storageRef = ref(storage, `imagesProfile/${formData.courseImg.name}`);
            const uploadTask = uploadBytesResumable(storageRef, formData.courseImg);
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
                        let formDataToSend = new FormData();

                        // Append data to FormData object
                        formDataToSend = {
                            name: formData.name,
                            nameMaterial: formData.nameMaterial,
                            level: formData.level,
                            semester: formData.semester,
                            price: formData.price,
                            courseImg: downloadURL,
                            code: Math.floor(Math.random() * 100000 + 1)
                        }
                        let jsonData = JSON.stringify(formDataToSend)
                        let data = {
                            formData: jsonData,
                            token
                        }
                        dispatch(addCourseAction(data));
                        toast.success("لقد نجحت عمليت انشاء الكورس ");
                        setLoading(false);

                    });
                }
            );
            
        } catch (error) {
            toast.error('Failed to add the course', error);
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center fw-bold fs-2 text-warning">
                    انشاء كورس جديد
                </div>
            </div>
            {!loading ?
                <form className="row d-flex text-center" onSubmit={handleSubmit}>
                    <div className="d-sm-block col-md-12 d-md-flex mt-5">
                        <div className="col-sm-12 col-md-6">
                            <div className="fw-bold text-center text-warning mb-1">اسم الكورس</div>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="inptBox"
                                required
                            />
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="fw-bold text-center text-warning mb-1">المادة العلمية</div>
                            <select
                                name="nameMaterial"
                                value={formData.nameMaterial}
                                onChange={handleChange}
                                className="inptBox"
                                required
                            >
                                <option value=""></option>
                                <option value="اللغة العربية">اللغة العربية</option>
                                <option value="الرياضيات">الرياضيات</option>
                                <option value="العلوم">العلوم</option>
                                <option value="اللغة الإنجليزية">اللغة الإنجليزية</option>
                                <option value="الدراسات الاجتماعية">الدراسات الاجتماعية</option>
                                <option value="التاريخ">التاريخ</option>
                                <option value="الجغرافيا">الجغرافيا</option>
                                <option value="التربية الدينية">التربية الدينية</option>
                                <option value="التربية الوطنية">التربية الوطنية</option>
                                <option value="الأحياء">الأحياء</option>
                                <option value="الكيمياء">الكيمياء</option>
                                <option value="الفيزياء">الفيزياء</option>
                                <option value="الفلسفة">الفلسفة</option>
                                <option value="علم النفس">علم النفس</option>
                                <option value="الاقتصاد">الاقتصاد</option>
                                <option value="علم الاجتماع">علم الاجتماع</option>
                                <option value="علوم الحاسوب">علوم الحاسوب</option>
                                <option value="التربية الفنية">التربية الفنية</option>
                                <option value="التربية الرياضية">التربية الرياضية</option>
                            </select>
                        </div>
                    </div>
                    <div className="d-sm-block col-md-12 d-md-flex mt-5">
                        <div className="col-sm-12 col-md-6">
                            <div className="fw-bold text-center text-warning mb-1">المستوي الدراسي</div>
                            <select
                                name="level"
                                value={formData.level}
                                onChange={handleChange}
                                className="inptBox"
                                required
                            >
                                <option value=""></option>
                                <option value="الصف الأول الابتدائي">الصف الأول الابتدائي</option>
                                <option value="الصف الثاني الابتدائي">الصف الثاني الابتدائي</option>
                                <option value="الصف الثالث الابتدائي">الصف الثالث الابتدائي</option>
                                <option value="الصف الرابع الابتدائي">الصف الرابع الابتدائي</option>
                                <option value="الصف الخامس الابتدائي">الصف الخامس الابتدائي</option>
                                <option value="الصف السادس الابتدائي">الصف السادس الابتدائي</option>
                                <option value="الصف الأول الإعدادي">الصف الأول الإعدادي</option>
                                <option value="الصف الثاني الإعدادي">الصف الثاني الإعدادي</option>
                                <option value="الصف الثالث الإعدادي">الصف الثالث الإعدادي</option>
                                <option value="الصف الأول الثانوي">الصف الأول الثانوي</option>
                                <option value="الصف الثاني الثانوي">الصف الثاني الثانوي</option>
                                <option value="الصف الثالث الثانوي">الصف الثالث الثانوي</option>
                            </select>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="fw-bold text-center text-warning mb-1">الفصل الدراسي</div>
                            <select
                                name="semester"
                                value={formData.semester}
                                onChange={handleChange}
                                className="inptBox"
                                required
                            >
                                <option value=""></option>
                                <option value="الفصل الاول">الفصل الاول</option>
                                <option value="الفصل الثاني">الفصل الثاني</option>
                            </select>
                        </div>
                    </div>
                    <div className="d-sm-block col-md-12 d-md-flex mt-5">
                        <div className="col-sm-12 col-md-6">
                            <div className="fw-bold text-center text-warning mb-1">سعر الكورس</div>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                className="inptBox"
                                required
                            />
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="fw-bold text-center text-warning mb-1">صورة خاصة بالكورس</div>
                            <input
                                type="file"
                                name="courseImg"
                                onChange={handleChange}
                                className="inptBox  d-inline"
                            />
                        </div>
                    </div>
                    <div className="d-sm-block col-md-12 d-md-flex mt-5">
                        <div className="col-sm-12 col-md-12">
                            <input
                                type="submit"
                                value={'ارسال'}
                                className="inptBtn"
                            />
                        </div>
                    </div>
                </form>
                :
                <>
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

            <ToastContainer />
        </div>
    );
}

export default AddCourse;
