import React from 'react';
import "./Carosel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import man from "../../assets/man1.png";
import man2 from "../../assets/man2.png";
import man3 from "../../assets/men3.png";
import star from "../../assets/Group 8.svg";


const Carosel = () => {
  return (
    <div className='caro_div pt-5'>
      <h2 className='caro_h2'>Tausende von glücklichen Kunden</h2>
      <p className='caro_p'>Und sie mögen 99 Probleme haben, aber der Darm ist keines davon.</p>
      <div className='container pt-5'>
        <Swiper
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            400: {
              slidesPerView: 1,
              spaceBetween: 40,
            },

            1024: {
              slidesPerView: 3,

            },
          }}
          slidesPerView={3}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper">
          <SwiperSlide className='border_div'>
            <div className='slider'>
              <div className='d-flex justify-content-center pb-2'>
                <img src={man} alt="" className='review_img' />
              </div>
              <h5 className='caro_h5'>Perfekt zum Abnehmen</h5>
              <p className='inner_p'>Einen Freundin von mir hat es genommen und zum Sommer super abgenommen. Also habe ich es auch ausprobiert und auch bei mir hat es geholfen. Ich bin von Colonpax begeistert und eben gerne 5 Sterne.</p>
              <div className='d-flex justify-content-around'>
                <h4 className='rev_h4'>Bernarr D.</h4>
                <p className='rev_p'>Verifizierter Kunde</p>
              </div>
              <div className='d-flex justify-content-center'>
                <img src={star} alt="ratings" className='img-fluid' />
              </div>

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider'>
              <div className='d-flex justify-content-center'>
                <img src={man2} alt="" className='review_img' />
              </div>
              <h5 className='caro_h5'>Verstopfung ist weg</h5>
              <p className='inner_p'>Bin ueber Instagram drauf gestossen und nehme es jetzt seit 2 Monaten und muss sagen, dass es bei mir besser funktioniert als zum Beispiel Dulocolax. Colonpax ist zwar kein Abführmittel im klassischen Sinn aber es kann wesentlich mehr, da der Ansatz ganzheitlich ist. Auch Nebenwirkungen wie Kopfschmerzen oder Blähungen habe ich keine gehabt bei Colonpax.</p>
              <div className='d-flex justify-content-around'>
                <h4 className='rev_h4'>Jasmin T.</h4>
                <p className='rev_p'>Verifizierter Kunde</p>
              </div>
              <div className='d-flex justify-content-center'>
                <img src={star} alt="ratings" className='img-fluid' />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=''>
            <div className='slider'>
              <div className='d-flex justify-content-center pb-2'>
                <img src={man3} alt="" className='review_img' />
              </div>
              <h5 className='caro_h5'>Empfehlenswert</h5>
              <p className='inner_p'>Ich kann mich nur anschliessen und hier 5 Sterne geben. Meine Darmbeschwerden sind weg und der Geschmack ist wirklich lecker. Klar zu empfehlen</p>

              <div className='d-flex justify-content-around'>
                <h4 className='rev_h4'>Dameon P.</h4>
                <p className='rev_p'>Verifizierter Kunde</p>
              </div>
              <div className='d-flex justify-content-center'>
                <img src={star} alt="ratings" className='img-fluid' />
              </div>

            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  )
}

export default Carosel