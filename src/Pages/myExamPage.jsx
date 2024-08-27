import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCourseAction, getCoursesByStudent, getCoursesByTeacher } from "../redux/actions/courseAction";
import { Button, Modal, Spinner } from "react-bootstrap";
import CardCourse from "../component/Card/cardCourse";
import { useParams } from "react-router-dom";
import { fetchExamsByTeacher, getExamsInCourse } from "../redux/actions/examAction";
import CardExam from "../component/Card/cardExam";

function MyExamPage() {
  const { id } = useParams();
  const role = localStorage.getItem('roleStorage');
  const examsByTeaher = useSelector((state) => state.exam.examsByTeaher);
  const coursesByStudent = useSelector((state) => state.course.coursesByStudent);
  const idUser = localStorage.getItem('idUser');
  
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleRemoveCourse = useCallback((courseId) => {
    setSelectedCourse(courseId);
    setShowDeleteModal(true);
  }, []);

  const handleCloseDeleteModal = useCallback(() => {
    setShowDeleteModal(false);
    setSelectedCourse(null);
  }, []);

  const handleDelete = useCallback(() => {
    if (!selectedCourse) return;
    const fetchCourseData = async () => {
      try {
        let formData = {
          token,
          courseId: selectedCourse
        };
        await dispatch(deleteCourseAction(formData));
      } catch (error) {
        console.error('Failed to delete the course', error);
      }
    };
    fetchCourseData();
    handleCloseDeleteModal();
  }, [selectedCourse, token, dispatch, handleCloseDeleteModal]);

  useEffect(() => {
    const formData = {
      token: token,
      ...(role === 'Teacher' ? { teacherId: idUser } : { studentId: idUser }),
    };
    if (role === 'Teacher') {
      dispatch(fetchExamsByTeacher(id));
    } else {
      dispatch(getCoursesByStudent(formData));
    }
  }, [dispatch, token, role, id]); // `id` added to dependency array

  const exams = role === 'Teacher' ? examsByTeaher : coursesByStudent;
   
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
