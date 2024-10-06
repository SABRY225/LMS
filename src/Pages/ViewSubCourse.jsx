import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCourseById } from "../redux/actions/courseAction";
import { Button, Modal } from "react-bootstrap"; // استيراد Modal و Button من React Bootstrap

function ViewSubCourse() {
    const { courseId } = useParams();
    const dispatch = useDispatch();
    const course = useSelector((state) => state.course.course);
    const [showSubModal, setShowSubModal] = useState(false);

    const handleSubCourse = useCallback(() => {
        setShowSubModal(true);
    }, []);

    const handleCloseSubModal = useCallback(() => {
        setShowSubModal(false);
    }, []);

    const handleSubCourseNow = () => {
        const whatsappNumber = "01098583817";
        const message = `مرحبًا، أود الاشتراك في الكورس ${course.name} (كود الكورس: ${course.code}).`;
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.location.href = whatsappLink;
        setShowSubModal(false);
    };

    useEffect(() => {
        dispatch(getCourseById(courseId));
    }, [courseId, dispatch]);

    if (!course) {
        return <div>Loading...</div>;
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
                <div className="col-sm-12 col-md-6 ">
                    <button className="btn border shadow rounded  mt-2 m-3 p-2 fs-2 fw-bold  text-decoration-none" onClick={handleSubCourse}>
                        الدروس
                    </button>
                    <button className="btn  border shadow rounded  mt-2 m-3 p-2 fs-2 fw-bold  text-decoration-none" onClick={handleSubCourse}>
                        الامتحانات
                    </button>
                    <button className="btn  border shadow rounded  mt-2 m-3 p-2 fs-2 fw-bold  text-decoration-none" onClick={handleSubCourse}>
                        الملخصات
                    </button>
                </div>
            </div>
            <div className="row align-items-center justify-content-around ">
                <div className="d-flex justify-content-center mt-5">
                    <button className="btn border shadow rounded  mt-2 m-3 p-2 fs-2 fw-bold btn-warning" onClick={handleSubCourse}>الاشتراك في الكورس</button>
                </div>
            </div>
            <Modal show={showSubModal} onHide={handleCloseSubModal}>
                <Modal.Header closeButton>
                    <Modal.Title>تأكيد الاشتراك</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-center'>هل تريد الاشتراك في هذا الكورس؟</Modal.Body>
                <Modal.Footer className='d-flex justify-content-between'>
                    <Button variant="warning" onClick={handleSubCourseNow}>
                        اشتراك
                    </Button>
                    <Button variant="secondary" onClick={handleCloseSubModal}>
                        إلغاء
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ViewSubCourse;
