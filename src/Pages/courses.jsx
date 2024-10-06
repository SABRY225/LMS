import {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../redux/actions/courseAction";
import { useNavigate } from "react-router-dom";

function Courses() {
    const dispatch = useDispatch();
    const courses = useSelector(state => state.course.courses);
  const navigate = useNavigate();

    useEffect(() => {
        dispatch(getCourses());
    }, [dispatch]);
    const handelLinkView=(courseId)=>{
        navigate(`./${courseId}`)
    }
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                {courses.map((course) => (
                    <div key={course._id} className="col-sm-12 col-md-3 text-dark card m-1 p-3" >
                        <img src={course.courseImg} alt={course.name} />
                        <div className="text-center fs-2 fw-bold text-warning">{course.name}</div>
                        <div className="d-flex justify-content-between mt-2">
                            <div className="fs-6 fw-bold ">
                                <div className="text-danger">&pound; {course.price} </div>
                                <div>{course.level}</div>
                            </div>
                            <div className="fs-6 fw-bold ">
                                <div>{course.nameMaterial}</div>
                                <div>{course.semester}</div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mt-2">
                        <button
                    className='btn btn-warning text-light '
                    onClick={()=>handelLinkView(course._id)}
                >
                        <span className=' m-2'>عرض الكورس</span>
                        <i className="fa-solid fa-eye"></i>
                </button>

                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default Courses