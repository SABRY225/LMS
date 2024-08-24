import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteCourseAction, getCoursesByStudent, getCoursesByTeacher } from "../redux/actions/courseAction";
import Card from "../component/Card/card";
import { Button, Modal } from "react-bootstrap";

function MyCoursesPage() {
  const {  id } = useParams();
  let role=localStorage.getItem('roleStorage');
  const coursesByTeacher = useSelector((state) => state.course.coursesByTeacher);
  const coursesByStudent = useSelector((state) => state.course.coursesByStudent);
  const [courses,setCourses]=useState([])
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handelRemovCourse = useCallback((courseId) => {
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
    if (role === 'Teacher') {
      const formData = {
        token: token,
        teacherId: id,
      };
      dispatch(getCoursesByTeacher(formData));
      setCourses(coursesByTeacher);
    } else {
      const formData = {
        token: token,
        studentId: id,
      };
      dispatch(getCoursesByStudent(formData));
      setCourses(coursesByStudent);

    }
  }, [role, id, dispatch,handleDelete]);
  console.log(courses._id);
  
  return (
    <div>
      <h1>كورساتي</h1>
      <div className="container">
        <div className="row mt-5 d-flex justify-content-center">
          {role === 'Teacher' && courses ? (
          courses.map(course => (
            <Card 
            name={course.name}
            price={course.price}
            courseImg={course.courseImg}
            level={course.level}
            semester={course.semester}
            key={course._id}
            id={course._id}
            onDelete={() => handelRemovCourse(course._id)}
             />
          ))
      ) : (
        role === 'Student' && courses ? (
          courses.map(course => (
            <Card 
            name={course.courseId.name}
            price={course.courseId.price}
            courseImg={course.courseId.courseImg}
            level={course.courseId.level}
            semester={course.courseId.semester}
            key={course._id}
            id={course._id}
             />
          ))
      ) : (
        <p>No courses available.</p>
      )
      )}
        </div>
      </div>
      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
                <Modal.Header closeButton>
                    <Modal.Title>تأكيد الحذف</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-center'>هل تريد ازالة الكورس نهائيا؟</Modal.Body>
                <Modal.Footer className='d-flex justify-content-between'>
                    <Button variant="danger" onClick={handleDelete}>
                        حذف
                    </Button>
                    <Button variant="secondary" onClick={handleCloseDeleteModal}>
                        إلغاء
                    </Button>
                </Modal.Footer>
            </Modal>
    </div>
  );
}

export default MyCoursesPage;
