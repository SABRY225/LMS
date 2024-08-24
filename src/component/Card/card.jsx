import { useParams } from 'react-router-dom';
import '../Style/Card.css'

function Card({ courseImg, name, price, onDelete, level, semester,id }) {
    const { role } = useParams();
    console.log(id);
    
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
                <div className="d-flex justify-content-center mt-3">
                    <button
                        className='btn btn-danger text-light'
                        onClick={onDelete}
                    >
                        حذف الكورس
                    </button>
                </div>
            )}

        </div>
    );
}

export default Card;
