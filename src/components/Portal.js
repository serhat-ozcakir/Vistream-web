import React from "react";
import certified from '../assets/001-certificate.svg'
import person from '../assets/002-group.svg'
import world from '../assets/003-world.svg'
import ellipse from '../assets/Ellipse 9.svg'

const Portal = () => {
  return (
    <>
      <div className="portal-main py-3">
        <h1 className="text-center portal-title">WHAT IS VISTREAM WEBINAR PORTAL</h1>
        <div className=" mx-5 d-flex flex-colum justify-content-center py-5">
          <div className="text-center px-5">
            <p className="portal-text portal">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto.
            </p>
            <div className="d-flex justify-content-center">
                <div className="hr"></div>
            </div>
          </div>
        </div>
      </div>


    <div className="container mt-5 mb-5 py-5">
        <div className="row">
            <div className="col-xl-4 col-sm-12 d-flex">
                <div className="mt-2">
                    <img src={certified} alt="" />
                </div>

                <div className="d-flex flex-column mx-3">
                  
                    <h2 className="certify-title certify-img">Certified Speakers</h2>
                    <p className="certify-text mx-2">Eabore etsu dolore magn aliqua enim ad minim veniam quis nostrud exercitas tion ullamco ipsum laboris.</p>
                </div>
            </div>
            <div className="col-xl-4 col-sm-12 d-flex">
                <div className="mt-2">
                    <img src={person} alt="" />
                </div>
                <div className="d-flex flex-column mx-3">
                    <h2 className="certify-title certify-img">Connecting People</h2>
                    <p className="certify-text mx-2">Eabore etsu dolore magn aliqua enim ad minim veniam quis nostrud exercitas tion ullamco ipsum laboris.</p>
                </div>
            </div>
            <div className="col-xl-4 col-sm-12 d-flex">
                <div className="mt-2">
                    <img src={world} alt="" />
                </div>
                <div className="d-flex flex-column mx-3">
                    <h2 className="certify-title certify-img">Latest Updates</h2>
                    <p className="certify-text mx-2">Eabore etsu dolore magn aliqua enim ad minim veniam quis nostrud exercitas tion ullamco ipsum laboris.</p>
                </div>
            </div>
        </div>
    </div>

    </>
  );
};

export default Portal;
