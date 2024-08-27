import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editLectureAction, getLectureById } from "../../../redux/actions/lectureAction";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function EditLecture() {
  const dispatch = useDispatch();
  const { lectureId } = useParams();

  const lecture = useSelector(state => state.lecture.lectureDetails);

  const [formData, setFormData] = useState({
    name: "",
    videoUrl: ""
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getLectureById(lectureId));
  }, [dispatch, lectureId]);

  useEffect(() => {
    if (lecture) {
      setFormData({
        name: lecture.name || "",
        videoUrl: lecture.videoUrl || ""
      });
    }
  }, [lecture]);
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: files ? files[0] : value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const dataToSend = {
      name: formData.name,
      videoUrl: formData.videoUrl,
    };

    dispatch(editLectureAction({ formData: JSON.stringify(dataToSend), lectureId }));
    toast.success("لقد نجحت عملية تعديل الدرس");
    setLoading(false);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="fs-3 text-warning fw-bold">تعديل درس </div>
      </div>
      {!loading ?
        <form className="row d-flex text-center shadow border p-1 m-5" onSubmit={handleSubmit}>
          <div className="col-md-12">
            <label htmlFor="name" className="m-3 fs-5 text-warning fw-bold">اسم الدرس</label>
            <input type="text" name="name" id="name"
              value={formData.name}
              onChange={handleChange}
              className="inptBox" />
          </div>
          <div className="col-md-12">
            <label htmlFor="name" className="m-3 fs-5 text-warning fw-bold">رابط الدرس</label>
            <input type="text" name="videoUrl" id="videoUrl"
              value={formData.videoUrl}
              onChange={handleChange}
              className="inptBox" />
          </div>
          <div className="col-md-12 d-flex justify-content-center">
            <div className="col-md-6">
              <input type="submit" value="تعديل" className="inptBtn m-3 mb-5" />
            </div>
          </div>
        </form>
        : <>
          <div>جاري تعديل الكورس</div>
          </>}
      <ToastContainer />
    </div>
  )
}

export default EditLecture