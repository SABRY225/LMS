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
       // Update lectures state to remove the deleted lecture
       setNewLectures((prevLectures) =>
        prevLectures.filter((lecture) => lecture._id !== lectureId)
      );
    } catch (error) {
      console.error('Failed to delete the lecture', error);
    }
  }, [token, dispatch]);

  const groupedLectures = newlectures.reduce((acc, lecture) => {
    const { courseName } = lecture;
    if (!acc[courseName]) {
      acc[courseName] = [];
    }
    acc[courseName].push(lecture);
    return acc;
  }, {});

  return (
    <div className="container">
      {Object.keys(groupedLectures).map((courseName) => (
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
                {role === "Teacher" && (
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
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardLecture;
