import { useDispatch } from 'react-redux';
import '../Style/lecture.css';
import { useCallback, useState } from 'react';
import { deleteLectureAction } from '../../redux/actions/lectureAction';
import { useNavigate } from 'react-router-dom';

function CardLecture({ lectures, role }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const [newlectures, setNewLectures] = useState(lectures);
 console.log(lectures);
 
  const handleEditLecture = useCallback((lectureId) => {
    navigate(`/Teacher/${lectureId}/editlecture`);
  }, [navigate]);

  const handleViewLecture = useCallback((lectureId) => {
    navigate(`/Teacher/${lectureId}/viewlecture`);
  }, [navigate]);

  const handleDeleteLecture = useCallback(async (lectureId) => {
    try {
      const formData = { token, lectureId };
      await dispatch(deleteLectureAction(formData));
      // تحديث حالة المحاضرات لإزالة المحاضرة المحذوفة
      setNewLectures((prevLectures) =>
        prevLectures.filter((lecture) => lecture._id !== lectureId)
      );
    } catch (error) {
      console.error('Failed to delete the lecture', error);
    }
  }, [token, dispatch]);

  const groupedLectures = lectures.reduce((acc, lecture) => {
    const { courseName } = lecture;
    if (!acc[courseName]) {
      acc[courseName] = [];
    }
    acc[courseName].push(lecture);
    return acc;
  }, {});
  console.log(groupedLectures);

  return (
    <div className="container">
      {role === 'Teacher' &&
        Object.keys(groupedLectures).map((courseName) => (
          <div key={courseName} className="course-group mt-3">
            <h2 className="course-name text-warning">{courseName}</h2>
            <div className="row d-flex justify-content-center lecture-list m-2">
              {groupedLectures[courseName].map((lecture) => (
                <div
                  key={lecture._id}
                  className="d-flex justify-content-between col-sm-12 col-md-5 lecture-item border shadow m-2 rounded p-2"
                >
                  <div className="lecture-name p-2 text-muted fs-5">
                    {lecture.name}
                  </div>
                  <div className='d-flex gap-3'>
                    <button
                      className='btn btn-primary text-light'
                      onClick={() => handleViewLecture(lecture._id)}
                    >
                      <i className="fa-solid fa-eye"></i>
                    </button>
                    <button
                      className='btn btn-warning text-light'
                      onClick={() => handleEditLecture(lecture._id)}
                    >
                      <i className="fa-solid fa-pen"></i>
                    </button>
                    <button
                      className='btn btn-danger text-light ms-1'
                      onClick={() => handleDeleteLecture(lecture._id)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      }
      {role === 'Student' ? (
        lectures.length > 0 ? (
          <div className="row d-flex justify-content-center lecture-list m-2">
            {lectures.map((lecture) => (
              <div
                key={lecture._id}
                className="d-flex justify-content-between col-sm-12 col-md-5 lecture-item border shadow m-2 rounded p-2"
              >
                <div className="lecture-name p-2 text-muted fs-5">
                  {lecture.name}
                </div>
                <button
                  className='btn btn-primary text-light'
                  onClick={() => navigate(`/Student/${lecture._id}/viewlecture`)}
                >
                  <i className="fa-solid fa-eye"></i>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="row d-flex justify-content-center lecture-list m-2">
            <div>غير متوفر حاليا دروس</div>
          </div>
        )
      ) : null}
    </div>
  );
}

export default CardLecture;
