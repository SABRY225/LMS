import { Link } from "react-router-dom"

function SelectRole() {
  return (
<>
        <div className="col-md-12 " dir="rtl">
        <div className='mt-5'>
        <div className="logo col-md-12 text-center ">
                <i className="fas fa-graduation-cap fs-1"></i>
                <span className='fs-1 fw-bold'>Education</span>
            </div>
            <div className='text-center m-5'>
                <div className='fs-3 fw-bold'>انشاء حساب ك</div>
            </div>
        <div className='d-flex justify-content-center'>
        <div className='text-center'>  
                <div className="col-md-12 form-group mb-4">
                 <Link to='/landing/register/Student' className='linkTextbtn fw-bold fs-4'>معلم</Link>

                </div>
                <div className="col-md-12 form-group mb-4">
                    
                 <Link to='/landing/register/Teacher' className='linkTextbtn fw-bold fs-4'>طالب</Link>
                </div>
            </div>
        </div>
        </div>
        </div>
        </>
  )
}


export default SelectRole