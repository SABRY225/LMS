import ImgtopLeft from '../../assets/topleft.png'
import ImgtopReigth from '../../assets/topReigth.png'
function Landing() {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-6 shape">
          <img src={ImgtopLeft} alt="" />
        </div>
        <div className="col-md-6 shape" >
        <img src={ImgtopLeft} alt="" />
        </div>

      </div>
      <div className="row"></div>
      <div className="row"></div>
    </div>
    </>
  )
}

export default Landing