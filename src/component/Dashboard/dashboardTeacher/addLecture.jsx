import { useState } from 'react';
import MyLecturePage from '../../../Pages/myLecturePage';
import { useDispatch, useSelector } from 'react-redux';
import { addLectureAction } from '../../../redux/actions/lectureAction';
import { toast, ToastContainer } from "react-toastify";

function AddLecture() {
  const courses = useSelector((state) => state.course.coursesByTeacher);  
  const dispatch = useDispatch();
  const token =localStorage.getItem('token')

  const [lectureData, setLectureData] = useState({
    name: '',
    videoUrl: '',
    courseId: '', 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLectureData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dataNewData={name:lectureData.name,videoUrl:lectureData.videoUrl}
      let jsonData=JSON.stringify(dataNewData)

      let data={
        newData:jsonData,
        courseId:lectureData.courseId,
        token
      }
      const res=await dispatch(addLectureAction(data))
      console.log(res.meta.requestStatus);
      
      if (res.meta.requestStatus === 'rejected') 
        toast.error(res.meta.requestStatus);
   else
      toast.success(" لقد نجحت عملية اضافة الكورس للطالب");
      
      
    } catch (error) {
      console.error('Error:', error);
      alert('Error adding lecture');
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="fs-3 text-warning fw-bold">اضافة درس جديد</div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row d-flex text-center shadow border p-1 m-5">
          <div className="col-md-12">
            <label htmlFor="courseId" className="m-3 fs-5 text-warning fw-bold">حدد الكورس</label>
            <select
              name="courseId"
              id="courseId"
              className="inptBox"
              value={lectureData.courseId} // Bind to state
              onChange={handleChange}
              required
            >
              <option value="" disabled>اختر الكورس</option>
              {courses.map((course) => (
                <option key={course._id} value={course._id}>
                  {course.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-12">
            <label htmlFor="name" className="m-3 fs-5 text-warning fw-bold">اسم الدرس</label>
            <input
              type="text"
              name="name"
              id="name"
              className="inptBox"
              value={lectureData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="videoUrl" className="m-3 fs-5 text-warning fw-bold">رابط الدرس</label>
            <input
              type="text"
              name="videoUrl"
              id="videoUrl"
              className="inptBox"
              value={lectureData.videoUrl}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-12 d-flex justify-content-center">
            <div className="col-md-6">
              <input type="submit" value="ارسال" className="inptBtn m-3 mb-5" />
            </div>
          </div>
        </div>
      </form>
      <div className="row">
        <MyLecturePage />
      </div>
      <ToastContainer />

    </div>
  );
}

export default AddLecture;
