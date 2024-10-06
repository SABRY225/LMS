import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { deleteExamAction } from '../../redux/actions/examAction';

function CardExam({ exams, role }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newExams, setNewExams] = useState(exams);
  
  const handleEditExam = (examId) => {
    navigate(`/Teacher/${examId}/editexam`);
  };

  const handleDeleteExam = async (examId) => {
    try {
      await dispatch(deleteExamAction(examId));
      setNewExams((prevExams) =>
        prevExams.map((courseData) => ({
          ...courseData,
          exams: courseData.exams.filter((exam) => exam._id !== examId),
        }))
      );
    } catch (error) {
      console.error('Failed to delete the Exam', error);
    }
  };
  console.log(exams);
  
  return (
    <div className="row mt-5 d-flex justify-content-center">
      {role==='Teacher'?(
        newExams.map((courseData) => (
          <div key={courseData.course._id} className="col-md-12 mt-3">
            <div className="fs-2 text-warning fw-bold mb-2">
              {courseData.course.name}
            </div>
            {courseData.exams.length > 0 ? (
              <div className="row d-flex justify-content-center">
                {courseData.exams.map((exam) => (
                  <div
                    key={exam._id}
                    className="d-flex justify-content-between col-sm-12 col-md-3 lecture-item border shadow m-2 rounded p-2"
                  >
                    <div className="p-2 text-muted fs-5">{exam.name}</div>
                    {role === 'Teacher' && (
                      <div className="d-flex gap-3">
                        <button
                          className="btn btn-warning text-light"
                          onClick={() => handleEditExam(exam._id)}
                        >
                          <i className="fa-solid fa-pen"></i>
                        </button>
                        <button
                          className="btn btn-danger text-light ms-1"
                          onClick={() => handleDeleteExam(exam._id)}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p>لا توجد امتحانات.</p>
            )}
          </div>
        ))
      ):(
        exams.map((exam) => (
          <div key={exam._id} className="col-md-12 mt-3">
              <div className="row d-flex justify-content-center">
                  <div
                    key={exam._id}
                    className="d-flex justify-content-between col-sm-12 col-md-3 lecture-item border shadow m-2 rounded p-2"
                  >
                    <div className="p-2 text-muted fs-5">{exam.name}</div>
                    <button
                  className='btn btn-primary text-light'
                  onClick={() => navigate(`/Student/${exam._id}/viewlecture`)}
                >
                  <i className="fa-solid fa-eye"></i>
                </button>
                  </div>
              </div>
            
          </div>
      )))}
    </div>
  );
}

export default CardExam;
