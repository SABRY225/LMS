import { useSelector } from "react-redux"
import "../Style/Profile.css"

function Prfile() {
    const UserImg=useSelector((state) => state.auth.userImg)
    const firstName=useSelector((state) => state.auth.firstName)
    const lastName=useSelector((state) => state.auth.lastName)
    const phone=useSelector((state) => state.auth.phone)
    const address=useSelector((state) => state.auth.address)
    console.log(firstName);
    
  return (
    <>
    <div className="container profile " dir="rtl">
      <div className="row d-flex text-center m-5">
          <div className="col-md-12">
            <img src={UserImg} alt="" width={150} />
          </div>
          <div className=" d-sm-block col-md-12 d-md-flex mt-5">
            <div className="col-sm-12  col-md-6">
              <div className="fw-bold text-end text-warning">الاسم الاخير</div>
            <div className=" box">{lastName}</div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="fw-bold text-end text-warning">الاسم الاول</div>
            <div className=" box">{firstName}</div>
            </div>
          </div>
          <div className=" d-sm-block col-md-12 d-md-flex">
          <div className="col-sm-12 col-md-6">
              <div className="fw-bold text-end text-warning"> العنوان</div>
            <div className=" box">{address}</div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="fw-bold text-end text-warning"> رقم الهاتف</div>
            <div className=" box">{phone}</div>
            </div>
          </div>
      </div>
      <div className="row d-flex justify-content-center text-center m-5">
        <div className="col-md-5 btnProfile btnEdit  ">تعديل البيانات</div>
        <div className="col-md-5  btnProfile btnDelete ">حذف الحساب</div>
      </div>
    </div>
    </>
  )
}

export default Prfile