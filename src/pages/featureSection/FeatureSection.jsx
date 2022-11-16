import React from 'react';
import "./FeatureSection.css";
import man from "../../assets/3.png";
import cross from "../../assets/Union 1.svg"
import right from "../../assets/Path 16.svg"

const FeatureSection = () => {
  return (
    <section id="feature">
      <div className='container'>
      <div className="row">
        <div className="col-md-8 m-auto text-center">
          <h2 className='features_h2'>Alarm im Darm und auf den Hüften?</h2>
          <p className='features_p'>Keiner spricht gern darüber: Dabei leiden alleine in Deutschland 20 Millionen Menschen an wiederkehrenden Darmbeschwerden wie Blähungen und Bauchschmerzen. Mit Colonpax konnten wir bereits über tausenden Menschen helfen. Trau dich und entgifte deinen Körper, verbessere deine Verdauung und nimm sicher ab .</p>
        </div>
        <div className="col-md-8">
     
        </div>
      </div>
      <div className="row">
        <div className="col-lg-1 none"></div>
        <div className="col-lg-4 col-md-6 white_div">
        <h4 className='title_one'>Das Leben vor Colonpax</h4>
              <p><img src={cross} alt="cross" className='img-fluid pe-2' /> Völlegefühl im Bauch  </p><hr />
              <p><img src={cross} alt="cross" className='img-fluid pe-2' />Verstopfung </p><hr /> 
              <p> <img src={cross} alt="cross" className='img-fluid pe-2' />Darmbeschwerden</p><hr />
              <p><img src={cross} alt="cross" className='img-fluid pe-2' /> Keine Erfolge beim Abnehmen </p><hr />
              <p> <img src={cross} alt="cross" className='img-fluid pe-2' />Zu wenig Energie</p><hr />
              <p> <img src={cross} alt="cross" className='img-fluid pe-2' />Unangenehme Blähungen</p>
        </div>
        <div className="col-lg-2 none">

        </div>
        <div className="col-lg-4 col-md-6 green_div">
        <h4 className='title_two'>Das Leben nach Colonpax</h4>
              <p><i class="fa-solid fa-check"></i> Ein flacher Bauch </p><hr />
              <p><i class="fa-solid fa-check"></i>regelmässiger Stuhlgang</p><hr /> 
              <p><i class="fa-solid fa-check"></i>regelmässige Vardauung</p><hr />
              <p><i class="fa-solid fa-check"></i> Kein Völlegefühl </p><hr />
              <p><i class="fa-solid fa-check"></i> Effektive und nachhaltige Abnehmerfoge </p><hr />
              <p><i class="fa-solid fa-check"></i> Das Zielgewicht halten</p> <hr />
              <p><i class="fa-solid fa-check"></i> mehr Energie und Leistungsfähigkeit</p>
        </div>
        <div className="col-lg-1 none"></div>
      </div>
      {/* <div className="row">
        
        <div className="col-md-4">
          <img src={man} alt="a man" className='img-fluid' />
        </div>
        <div className="col-md-8">
          <div className='row'>
            <div className='col-md-6 white_div'>
              <h4 className='title_one'>Das Leben vor Colonpax</h4>
              <p><img src={cross} alt="cross" className='img-fluid pe-2' /> Völlegefühl im Bauch  </p><hr />
              <p><img src={cross} alt="cross" className='img-fluid pe-2' />Verstopfung </p><hr /> 
              <p> <img src={cross} alt="cross" className='img-fluid pe-2' />Darmbeschwerden</p><hr />
              <p><img src={cross} alt="cross" className='img-fluid pe-2' /> Keine Erfolge beim Abnehmen </p><hr />
              <p> <img src={cross} alt="cross" className='img-fluid pe-2' />Zu wenig Energie</p><hr />
              <p> <img src={cross} alt="cross" className='img-fluid pe-2' />Unangenehme Blähungen</p>


            </div>
            <div className='col-md-6 green_div'>
              <h4 className='title_two'>Das Leben nach Colonpax</h4>
              <p><img src={right} alt="right" className='img-fluid pe-2' /> Ein flacher Bauch</p><hr />
              <p> <img src={right} alt="right" className='img-fluid pe-2' />regelmässiger Stuhlgang</p><hr />
              <p> <img src={right} alt="right" className='img-fluid pe-2' />regelmässige Vardauung</p><hr />
              <p> <img src={right} alt="right" className='img-fluid pe-2' />Kein Völlegefühl </p><hr />
              <p> <img src={right} alt="right" className='img-fluid pe-2' />Effektive und nachhaltige Abnehmerfoge</p><hr />
              <p><img src={right} alt="right" className='img-fluid pe-2' /> Das Zielgewicht halten</p><hr />
              <p> <img src={right} alt="right" className='img-fluid pe-2' />mehr Energie und Leistungsfähigkeit</p>

            </div>
          </div>
        </div>
      </div> */}
    </div>
    </section>
  )
}

export default FeatureSection