import { Outlet } from 'react-router-dom';
import image from '../../assets/image.png';
import '../Style/landingStyle.css';

function Landing() {
  return (
    <>
      <div className="container-fluid m-0">
        <div className="row">
          <div className="col-md-6 d-none d-md-block">
            <img src={image} alt="Landing Image" className="position-fixed img-fluid" />
          </div>
          <div className="col-md-6">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
