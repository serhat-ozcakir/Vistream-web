import React,{useEffect} from "react";
import "../App.css";

import vistream from "../assets/Group 1478.svg";



const Home = () => {

  
  const d = new Date();
  console.log(d.getTime())
  const webinarDate = new Date(2022, 4, 25, 13);
  console.log(webinarDate);
  const timeDiffer = Math.abs(webinarDate.getTime() - d.getTime());
  const dayDiffer = Math.floor(timeDiffer / (1000 * 3600 * 24));
  const hourDiffer = Math.floor(
    (timeDiffer / (1000 * 3600 * 24) - dayDiffer) * 24
  );
  const minuteDiffer = Math.floor(
    ((timeDiffer / (1000 * 3600 * 24) - dayDiffer) * 24 - hourDiffer) * 60
  );
  const miliSecondDiffer = Math.floor(
    (((timeDiffer / (1000 * 3600 * 24) - dayDiffer) * 24 - hourDiffer) * 60 -
      minuteDiffer) *
      60
  );

 
  return (
    <>
      <nav class="navbar navbar-expand-lg back navbar-light bg-light  fixed-top">
        <div class="container-fluid mx-5">
          <a class="navbar-brand" href="#">
            <img src={vistream} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse mx-5 " id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item ">
                <a class="nav-link link-text" aria-current="page" href="#home">
                  HOME
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link link-text" href="#">
                  SESSION
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link-text" href="#">
                  OVERVIEW
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link-text" href="#">
                  SCHEDULE
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link-text" href="#">
                  TEASER
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link-text" href="#upcoming">
                  UPCOMING EVENTS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="section-1" id="home">
        <div className="container">
          <div className="row py-5">
            <div className="col-xl-8 col-sm-12">
              <p className="mt-5 next">
                <b>NEXT WEBINAR</b>
              </p>
              <div className="">
                <b>
                  <em>
                    <p className="text-1">
                      EVENT NAME it amet, consetetur sadipscing elitr, sed diam
                      nonumy eirmod tempor
                    </p>
                  </em>
                </b>
              </div>

              <div className="w-100">
                <p className="text-2">
                  <b>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod
                  </b>{" "}
                </p>
              </div>

              <div>
                <p className="text-3">Wednesday, 25 May 2022</p>
              </div>
              <div className="d-flex">
                <div class="date d-flex align-item-center">
                  <div class="card-body">
                    <p className="fs-4 text-center">{dayDiffer}</p>
                    <p class="date-detail text-center">Days</p>
                  </div>
                </div>
                <div class="date d-flex align-item-center mx-2">
                  <div class="card-body">
                    <p className="fs-4 text-center">{hourDiffer}</p>
                    <p class="date-detail">Hours</p>
                  </div>
                </div>
                <div class="date d-flex align-item-center">
                  <div class="card-body">
                    <p className="fs-4 text-center">{minuteDiffer}</p>
          

                    <p class="date-detail text-center">Minutes</p>
            
                  </div>
                </div>
                <div class="date d-flex align-item-center mx-2">
                  <div class="card-body">
                    <p className="fs-4">{miliSecondDiffer}</p>
                    <p class="date-detail">Seconds</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-sm-12 d-flex flex-column align-items-center bet">
              <div class="d-grid gap-3 buton-group info">
                <button class="btn btn-warning buton login" type="button">
                  LOGIN
                </button>
                <button class="btn btn-primary btn-light buton register_but" type="button">
                  REGISTER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
