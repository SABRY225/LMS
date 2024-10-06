import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchExamsByTeacher ,getExamsInCourse} from "../redux/actions/examAction";
import CardExam from "../component/Card/cardExam";

function MyExamPage() {
  const { id ,courseId} = useParams();
  const role = localStorage.getItem('roleStorage');
  const examsByTeaher = useSelector((state) => state.exam.examsByTeaher);
  const examsByStudent = useSelector((state) => state.exam.exams);
  const dispatch = useDispatch();



  useEffect(() => {
    if (role === 'Teacher') {
      dispatch(fetchExamsByTeacher(id));
    } else {
      dispatch(getExamsInCourse(courseId));
    }
  }, [dispatch,role,courseId, id]); // `id` added to dependency array

  const exams = role === 'Teacher' ? examsByTeaher : examsByStudent;
   
  return (
    <div className="container">
        <div className="row">
            <h1>امتحاناتي</h1>
        </div>
        <CardExam exams={exams} role={role}/>
    </div>
  )
}

export default MyExamPage;
