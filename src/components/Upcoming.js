import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar, A11y,EffectCoverflow,EffectFlip } from "swiper";

const Upcoming = () => {
  return (
    <div className="upcoming py-4">
      <div className="mt-5" id="upcoming">
        <h1 className="text-center portal mb-5"><b>UPCOMING EVENTS</b> </h1>
      </div>
<Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <section class="card w-100 border-0">
          <div className="d-flex  justify-content-center align-items-center p-3 card-top">
              <div>
                Monday, 15 February 2020
              </div>
            </div>
            <div class="card-body">
              <p class="card-text2 text-center">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              </p>
              <hr />
              <h5 class="card-title text-center speaker-name p-2 fs-6">Speaker Name</h5>
              <div className="d-flex justify-content-center">
                <div className="">

              <a href="#" class="btn register">
                Register
              </a>
                </div>
                <div className="px-2">

              <a href="#" class="btn btn-primary card-button-color">
                Add to Calendar
              </a>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
        <section class="card w-100 border-0">
          <div className="d-flex justify-content-center align-items-center p-3 card-top">
              <div>
                Friday, 19 March 2020
              </div>
            </div>
            <div class="card-body">
              <p class="card-text2 text-center">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              </p>
              <hr />
              <h5 class="card-title text-center speaker-name p-2 fs-6">Speaker Name</h5>
              <div className="d-flex justify-content-center">
                <div className="">

              <a href="#" class="btn register">
                Register
              </a>
                </div>
                <div className="px-2">

              <a href="#" class="btn btn-primary card-button-color">
                Add to Calendar
              </a>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
        <section class="card w-100 border-0">
          <div className="d-flex justify-content-center align-items-center p-3 card-top">
              <div>
              Tuesday, 11 May 2020
              </div>
            </div>
            <div class="card-body">
              <p class="card-text2 text-center">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              </p>
              <hr />
              <h5 class="card-title text-center speaker-name p-2 fs-6">Speaker Name</h5>
              <div className="d-flex justify-content-center">
                <div className="">

              <a href="#" class="btn register">
                Register
              </a>
                </div>
                <div className="px-2">

              <a href="#" class="btn btn-primary card-button-color">
                Add to Calendar
              </a>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
        <section class="card w-100 border-0">
          <div className="d-flex justify-content-center align-items-center p-3 card-top">
              <div>
                Wednesday, 5 August 2020
              </div>
            </div>
            <div class="card-body">
              <p class="card-text2 text-center">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              </p>
              <hr />
              <h5 class="card-title text-center speaker-name p-2 fs-6">Speaker Name</h5>
              <div className="d-flex justify-content-center">
                <div className="">

              <a href="#" class="btn register">
                Register
              </a>
                </div>
                <div className="px-2">

              <a href="#" class="btn btn-primary card-button-color">
                Add to Calendar
              </a>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card w-100  border-0">
          <div className="d-flex justify-content-center align-items-center p-3 card-top">
              <div>
                Tuesday, 21 September 2020
              </div>
            </div>
            <div class="card-body">
              <p class="card-text2 text-center">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              </p>
              <hr />
              <h5 class="card-title text-center speaker-name p-2 ">Speaker Name</h5>
              <div className="d-flex justify-content-center">
              <div className=" text-center">

<a href="#" class="btn more-detail">
MORE DETAILS COMING SOON
</a>
</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <section class="card w-100 border-0 ">
          <div className="d-flex justify-content-center align-items-center p-3 card-top">
              <div>
                Sunday, 15 December 2020
              </div>
            </div>
            <div class="card-body">
              <p class="card-text2 text-center">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              </p>
              <hr />
              <h5 class="card-title text-center speaker-name p-2 ">Speaker Name</h5>
              <div className="d-flex justify-content-center">
  
                <div className=" text-center">

                <a href="#" class="btn more-detail">
                MORE DETAILS COMING SOON
              </a>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>


    

    </div>
  );
};

export default Upcoming;
