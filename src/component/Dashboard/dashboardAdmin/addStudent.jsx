import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudentInCourse } from "../../../redux/actions/adminAction";
import { toast, ToastContainer } from "react-toastify";

function AddStudent() {
    const token = localStorage.getItem('token')
    const error=useSelector((state)=> state.admin.error)
    console.log(error);

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        email: '',
        codeCourse: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            let jsonData = JSON.stringify(formData);
            let credentials = {
                formData: jsonData,
                token
            }
            // Add your form submission logic here
            const res=await dispatch(addStudentInCourse(credentials));
            console.log();
            if (res.meta.requestStatus === 'rejected') 
                 toast.error(error.response.data.message);
            else
               toast.success(" لقد نجحت عملية اضافة الكورس للطالب");
        } catch (error) {
            toast.error('Failed to add the course for Student', error);


        }

    };

    return (
        <div className="container">
            <div className="row">
                <div className="fw-bold fs-3 text-warning">اضافة اعضاء جدد للكورسات</div>
            </div>
            <form
                className="row mt-5 border border-warning rounded shadow p-5"
                onSubmit={handleSubmit}
            >
                <div className="col-sm-12 d-md-flex text-center mt-3">
                    <div className="col-sm-12 col-md-6">
                        <div className="fw-bold fs-5 text-warning">البريد الالكتروني لطالب</div>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            className="inptBox"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="fw-bold fs-5 text-warning">كود الكورس</div>
                        <input
                            type="text"
                            name="codeCourse"
                            id="codeCourse"
                            className="inptBox"
                            value={formData.codeCourse}
                            onChange={handleChange}
                            required

                        />
                    </div>
                </div>
                <div className="col-sm-12 d-md-flex text-center mt-3">
                    <div className="col-sm-12 col-md-12">
                        <input type="submit" value="ارسال" className="inptBtn" />
                    </div>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
}

export default AddStudent;
