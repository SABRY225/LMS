import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCourseAction, getCoursesByStudent, getCoursesByTeacher } from "../redux/actions/courseAction";
import { Button, Modal, Spinner } from "react-bootstrap";
import CardCourse from "../component/Card/cardCourse";

function MyCoursesPage() {
  const role = localStorage.getItem('roleStorage');
  const coursesByTeacher = useSelector((state) => state.course.coursesByTeacher);
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
      dispatch(getCoursesByTeacher(formData));
    } else {
      dispatch(getCoursesByStudent(formData));
    }
  }, [dispatch, token, role, idUser]);

  const courses = role === 'Teacher' ? coursesByTeacher : coursesByStudent;
  
  return (
    <div>
      <h1>كورساتي</h1>
      <div className="container">
        <div className="row mt-5 d-flex justify-content-center">
          {courses && courses.length > 0 ? (
            courses.map((course) => (
              <CardCourse
                name={role === 'Teacher' ? course.name : course.courseId.name}
                price={role === 'Teacher' ? course.price : course.courseId.price}
                courseImg={role === 'Teacher' ? course.courseImg : course.courseId.courseImg}
                level={role === 'Teacher' ? course.level : course.courseId.level}
                semester={role === 'Teacher' ? course.semester : course.courseId.semester}
                key={course._id}
                id={role === 'Teacher' ? course._id : course.courseId._id}
                onDelete={() => handleRemoveCourse(course._id)}
              />
            ))
          ) : (
            <Spinner />
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
