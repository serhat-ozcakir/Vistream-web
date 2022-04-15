import React, {useState} from 'react'
import speak_1 from '../assets/spk-1.png'
import speak_2 from '../assets/spk-2.png'
import speak_3 from '../assets/spk-3.png'
import speak_4 from '../assets/spk-4.png'
import speak_5 from '../assets/spk-5.png'
import speak_6 from '../assets/spk-6.png'
import speak_7 from '../assets/spk-7.png'
import speak_8 from '../assets/spk-8.png'

const Speakers = () => {

  const [card, setCard] = useState(true)


  const cardChange = () =>{
    setCard(true)
  }
  
  const cardChange2 = () =>{
    setCard(false)
  }

  return (
      <>
    <div className="mt-5">
    <h1 className="text-center speaker">SPEAKERS</h1>
  </div>

  <div className="text-center d-flex justify-content-center mt-4">
    <div>
      <button onClick={cardChange} className="btn btn-light spekaer-button buton">
        Wednesday, 25 February 20021
      </button>
    </div>
    <div className="mx-3">
      <button onClick={cardChange2} className="btn btn-light spekaer-button buton">
        Wednesday, 25 February 20021
      </button>
    </div>
  </div>

{card ? (

  <section className="container">
    <div className="row px-5 mb-5 d-flex flex-wrap">
      
      <div className="col-xl-3 col-sm-12 mt-5">
        <div class="card border-0">
          <div className='text-center mt-2'>

          <img src={speak_1} class="card-img-top w-50" alt="..." />
          </div>
          <div class="card-body">
            <h5 class="card-title text-center card-title-color">Dr. Name Surname</h5>
            <p class="card-text text-center card-speak-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
            </p>
            <div className="text-center">

            <a href="#" class="btn px-4 card-button-color">
              See Bio
            </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-12 mt-5">
        <div class="card border-0">
          <div className='text-center mt-2'>

          <img src={speak_2} class="card-img-top w-50" alt="..." />
          </div>
          <div class="card-body">
            <h5 class="card-title text-center card-title-color">Dr. Name Surname</h5>
            <p class="card-text text-center">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
            </p>
            <div className="text-center">

            <a href="#" class="btn px-4 card-button-color">
              See Bio
            </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-12 mt-5">
        <div class="card border-0">
          <div className='text-center mt-2'>

          <img src={speak_3} class="card-img-top w-50" alt="..." />
          </div>
          <div class="card-body">
            <h5 class="card-title text-center card-title-color">Dr. Name Surname</h5>
            <p class="card-text text-center">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
            </p>
            <div className="text-center">

            <a href="#" class="btn px-4 card-button-color">
              See Bio
            </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-12 mt-5">
        <div class="card border-0">
          <div className='text-center mt-2'>

          <img src={speak_4} class="card-img-top w-50" alt="..." />
          </div>
          <div class="card-body">
            <h5 class="card-title text-center card-title-color">Dr. Name Surname</h5>
            <p class="card-text text-center">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
            </p>
            <div className="text-center">

            <a href="#" class="btn px-4 card-button-color">
              See Bio
            </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-12 mt-5">
        <div class="card border-0">
          <div className='text-center mt-2'>

          <img src={speak_5} class="card-img-top w-50" alt="..." />
          </div>
          <div class="card-body">
            <h5 class="card-title text-center card-title-color">Dr. Name Surname</h5>
            <p class="card-text text-center">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
            </p>
            <div className="text-center">

            <a href="#" class="btn px-4 card-button-color">
              See Bio
            </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-12 mt-5">
        <div class="card border-0">
          <div className='text-center mt-2'>

          <img src={speak_6} class="card-img-top w-50" alt="..." />
          </div>
          <div class="card-body">
            <h5 class="card-title text-center card-title-color">Dr. Name Surname</h5>
            <p class="card-text text-center">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
            </p>
            <div className="text-center">

            <a href="#" class="btn px-4 card-button-color">
              See Bio
            </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-12 mt-5">
        <div class="card border-0">
          <div className='text-center mt-2'>

          <img src={speak_7} class="card-img-top w-50" alt="..." />
          </div>
          <div class="card-body">
            <h5 class="card-title text-center card-title-color">Dr. Name Surname</h5>
            <p class="card-text text-center">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
            </p>
            <div className="text-center">

            <a href="#" class="btn px-4 card-button-color">
              See Bio
            </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-12 mt-5">
        <div class="card border-0">
          <div className='text-center mt-2'>

          <img src={speak_8} class="card-img-top w-50" alt="..." />
          </div>
          <div class="card-body">
            <h5 class="card-title text-center card-title-color">Dr. Name Surname</h5>
            <p class="card-text text-center">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
            </p>
            <div className="text-center">

            <a href="#" class="btn px-4 card-button-color">
              See Bio
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
) : (
  <>
  <section className="container">
    <div className="row px-5 d-flex mb-5 flex-wrap">
      
      <div className="col-xl-3 col-sm-12 mt-5">
        <div class="card border-0">
          <div className='text-center mt-2'>

          <img src={speak_8} class="card-img-top w-50" alt="..." />
          </div>
          <div class="card-body">
            <h5 class="card-title text-center card-title-color">Dr. Name Surname</h5>
            <p class="card-text text-center">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
            </p>
            <div className="text-center">

            <a href="#" class="btn px-4 card-button-color">
              See Bio
            </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-12 mt-5">
        <div class="card border-0">
          <div className='text-center mt-2'>

          <img src={speak_7} class="card-img-top w-50" alt="..." />
          </div>
          <div class="card-body">
            <h5 class="card-title text-center card-title-color">Dr. Name Surname</h5>
            <p class="card-text text-center">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
            </p>
            <div className="text-center">

            <a href="#" class="btn px-4 card-button-color">
              See Bio
            </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-12 mt-5">
        <div class="card border-0">
          <div className='text-center mt-2'>

          <img src={speak_6} class="card-img-top w-50" alt="..." />
          </div>
          <div class="card-body">
            <h5 class="card-title text-center card-title-color">Dr. Name Surname</h5>
            <p class="card-text text-center">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
            </p>
            <div className="text-center">

            <a href="#" class="btn px-4 card-button-color">
              See Bio
            </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-12 mt-5">
        <div class="card border-0">
          <div className='text-center mt-2'>

          <img src={speak_5} class="card-img-top w-50" alt="..." />
          </div>
          <div class="card-body">
            <h5 class="card-title text-center card-title-color">Dr. Name Surname</h5>
            <p class="card-text text-center">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
            </p>
            <div className="text-center">

            <a href="#" class="btn px-4 card-button-color">
              See Bio
            </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-12 mt-5">
        <div class="card border-0">
          <div className='text-center mt-2'>

          <img src={speak_4} class="card-img-top w-50" alt="..." />
          </div>
          <div class="card-body">
            <h5 class="card-title text-center card-title-color">Dr. Name Surname</h5>
            <p class="card-text text-center">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
            </p>
            <div className="text-center">

            <a href="#" class="btn px-4 card-button-color">
              See Bio
            </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-12 mt-5">
        <div class="card border-0">
          <div className='text-center mt-2'>

          <img src={speak_3} class="card-img-top w-50" alt="..." />
          </div>
          <div class="card-body">
            <h5 class="card-title text-center card-title-color">Dr. Name Surname</h5>
            <p class="card-text text-center">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
            </p>
            <div className="text-center">

            <a href="#" class="btn px-4 card-button-color">
              See Bio
            </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-12 mt-5">
        <div class="card border-0">
          <div className='text-center mt-2'>

          <img src={speak_2} class="card-img-top w-50" alt="..." />
          </div>
          <div class="card-body">
            <h5 class="card-title text-center card-title-color">Dr. Name Surname</h5>
            <p class="card-text text-center">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
            </p>
            <div className="text-center">

            <a href="#" class="btn px-4 card-button-color">
              See Bio
            </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-12 mt-5">
        <div class="card border-0">
          <div className='text-center mt-2'>

          <img src={speak_1} class="card-img-top w-50" alt="..." />
          </div>
          <div class="card-body">
            <h5 class="card-title text-center card-title-color">Dr. Name Surname</h5>
            <p class="card-text text-center">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
            </p>
            <div className="text-center">

            <a href="#" class="btn px-4 card-button-color">
              See Bio
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
            </>
)}
 
  </>
  
  )
}

export default Speakers