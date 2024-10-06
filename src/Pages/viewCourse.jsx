import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCourseById } from "../redux/actions/courseAction";
import MyLecturePage from "./myLecturePage";
import MyExamPage from "./MyExamPage";

function ViewCourse() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const course = useSelector((state) => state.course.course);
  const [showLecture,setShowLecture]=useState(false);
  const [showExam,setShowExam]=useState(false);
  useEffect(() => {
    dispatch(getCourseById(courseId));
  }, [courseId, dispatch]);
  const handelLecture=()=>{
    setShowLecture(true)
    setShowExam(false)
  }
  const handelExam=()=>{
    setShowExam(true)
    setShowLecture(false)
  }
  if (!course) {
    return <div>Loading...</div>; // عرض رسالة تحميل إذا كانت بيانات الدورة غير موجودة بعد
  }

  return (
    <div className="container">
      <div className="row align-items-center justify-content-around">
      <div className="col-sm-12 col-md-6">
      <h1 className="fw-bold text-warning mb-5">{course.name}</h1>
      <p><strong>السعر:</strong> {course.price} جنيه</p>
      <p><strong>المستوى:</strong> {course.level}</p>
      <p><strong>المادة:</strong> {course.nameMaterial}</p>
      <p><strong>الفصل الدراسي:</strong> {course.semester}</p>
      <p><strong>الكود:</strong> {course.code}</p>
      </div>
      <div className="col-sm-12 col-md-6">
      <div className="border shadow rounded  mt-2 p-2">
        <button  onClick={handelLecture}  className="btn fs-2 fw-bold  text-decoration-none">
        الدروس
        </button >
      </div>
      <div className="border shadow rounded  mt-2 p-2"> <button onClick={handelExam} className="btn fs-2 fw-bold  text-decoration-none">
        الامتحانات
        </button>
        </div>
      </div>
    </div>
    <div className="row mt-5 mb-5">
      {showLecture && <MyLecturePage />}
      {showExam && <MyExamPage />}
    </div>
    </div>
  );
}

export default ViewCourse;
