import { useNavigate } from 'react-router-dom';
import '../Style/Card.css'

function CardCourse({ courseImg, name, price, onDelete, level, semester,id }) {
    const role  = localStorage.getItem('roleStorage')
    const navigate = useNavigate();

    const handelLink =(courseId)=>{
        navigate(`./${courseId}/editcourse`)
    }
    return (
        <div className="col-md-3 text-dark card m-1 p-3">
            <img src={courseImg} alt="courseImg" />
            <div className="d-flex justify-content-between mt-2">
                <div className="namecourse">{name}</div>
                <div className="pricecourse">{price}$</div>
            </div>
            <div className="d-flex justify-content-between mt-2">
                <div className="levelcourse">{level}</div>
                <div className="semestercourse">{semester}</div>
            </div>
            {role === 'Teacher' && (
                <div className="d-flex justify-content-between mt-3">
                    <button
                        className='btn btn-warning text-light '
                        onClick={()=>handelLink(id)}
                    >
                            <i className="fa-solid fa-pen "></i>
                    </button>
                    <button
                        className='btn btn-danger text-light h-100 ms-1'
                        onClick={onDelete}
                    >
                            <i className="fa-solid fa-trash "></i>
                    </button>
                </div>
            )}

        </div>
    );
}

export default CardCourse;
