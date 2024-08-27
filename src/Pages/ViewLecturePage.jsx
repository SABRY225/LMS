import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getLectureById } from "../redux/actions/lectureAction";
import Spinner from "../component/loading/Spinner"; // لاستعراض مؤقت تحميل إذا كان الدرس قيد التحميل

const getYoutubeVideoId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|\/u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

function ViewLecturePage() {
  const dispatch = useDispatch();
  const { lectureId } = useParams();
  
  useEffect(() => {
    dispatch(getLectureById(lectureId));
  }, [dispatch, lectureId]);

  const { lectureDetails: lecture, loading, error } = useSelector(state => state.lecture);

  if (loading) return <div className="text-center m-5 fs-5"><Spinner /></div>;
  if (!lecture) return <div>الدرس غير موجود</div>;

  const videoId = getYoutubeVideoId(lecture.videoUrl);
  if (!videoId) return <div>رابط الفيديو غير صالح</div>;

  return (
    <div className="container">
      <div className="row">
        <div className="text-warning mb-3 mt-1 fs-3 fw-bold border shadow text-center p-2">{lecture.name}</div>
      </div>
      <div>
        <iframe className='video'
          title='Youtube player'
          width="100%"
          height="600"
          sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
          src={`https://youtube.com/embed/${videoId}?autoplay=0`}>
        </iframe>
      </div>
    </div>
  );
}

export default ViewLecturePage;
