import { useSelector } from "react-redux";
import { useState } from "react";
import "../Style/Profile.css";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const UserImg = useSelector((state) => state.auth.userImg);
  const firstName = useSelector((state) => state.auth.firstName);
  const lastName = useSelector((state) => state.auth.lastName);
  const phone = useSelector((state) => state.auth.phone);
  const address = useSelector((state) => state.auth.address);

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    // هنا يمكنك إضافة الكود لحفظ البيانات المعدلة
    setIsEditing(false);
  };

  return (
    <div className="container profile" dir="rtl">
      <div className="row d-flex text-center m-5">
        <div className="col-md-12">
          <img src={UserImg} alt="" width={150} />
        </div>
        {isEditing ? (
          <div className="col-md-12">
            {/* نموذج تعديل البيانات */}
            <input type="text" defaultValue={firstName} className="inptBox m-2 " />
            <input type="text" defaultValue={lastName} className="inptBox m-2 inptBox" />
            <input type="text" defaultValue={phone} className="inptBox m-2 inptBox" />
            <input type="text" defaultValue={address} className="inptBox m-2 inptBox" /><br />
            <button onClick={handleSaveProfile} className="btn btn-success m-3">حفظ</button>
            <button onClick={handleSaveProfile} className="btn btn-success m-3">الغاء</button>
          </div>
        ) : (
          <>
            <div className="d-sm-block col-md-12 d-md-flex mt-5">
              <div className="col-sm-12 col-md-6">
                <div className="fw-bold text-end text-warning">الاسم الاخير</div>
                <div className="box">{lastName}</div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="fw-bold text-end text-warning">الاسم الاول</div>
                <div className="box">{firstName}</div>
              </div>
            </div>
            <div className="d-sm-block col-md-12 d-md-flex">
              <div className="col-sm-12 col-md-6">
                <div className="fw-bold text-end text-warning">العنوان</div>
                <div className="box">{address}</div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="fw-bold text-end text-warning">رقم الهاتف</div>
                <div className="box">{phone}</div>
              </div>
            </div>
          </>
        )}
      </div>
      {!isEditing && (
        <div className="row d-flex justify-content-center text-center m-5">
          <div className="col-md-5 btnProfile btnEdit" onClick={handleEditProfile}>
            تعديل البيانات
          </div>
          
        </div>
      )}
    </div>
  );
}

export default Profile;
