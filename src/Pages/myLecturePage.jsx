import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CardLecture from "../component/Card/CardLecture";
import Spinner from "../component/loading/Spinner";
import { fetchLecturesByTeacher } from "../redux/actions/lectureAction";

function MyLecturePage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [lectures, setLectures] = useState([]);
  const role = localStorage.getItem('roleStorage');
  const token = localStorage.getItem('token');
  
  const lecturesByTeacher = useSelector((state) => state.lecture.lecturesByTeacher);

  useEffect(() => {
    const fetchLectures = async () => {
      if (!token) {
        console.error("No token found");
        return;
      }

      if (role === 'Teacher') {
        const formData = {
          teacherId: id,
          token,
        };
        const res = await dispatch(fetchLecturesByTeacher(formData));
        if (res) {
          setLectures(res.payload);
        }
      } else if (role === 'Student') {
        // Assuming there's an action to fetch lectures by student
        // const formData = {
        //   studentId: id,
        //   token,
        // };
        // const res = await dispatch(getLecturesByStudent(formData));
        // if (res) {
        //   setLectures(res);
        // }
      }
    };

    fetchLectures();
  }, [dispatch, id, role, token]);

  useEffect(() => {
    if (role === 'Teacher') {
      setLectures(lecturesByTeacher);
    }
    // If you implement lecturesByStudent, include it here as well.
    // if (role === 'Student') {
    //   setLectures(lecturesByStudent);
    // }
  }, [lecturesByTeacher, role]);

  return (
    <div className="container">
      <div className="row">
        <h1>دروسي</h1>
      </div>
      <div className="row mt-5 d-flex justify-content-center">
        {lectures.length > 0 ? (
          <CardLecture lectures={lectures} role={role} />
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}

export default MyLecturePage;
