import React from 'react';
import "./PercentageSection.css";
import arrow from "../../assets/arrowsvg.png";
import usvg from "../../assets/usvg.png";

const PercentageSection = () => {
  return (
    <div className='my-5 main_box'>
      <div className='arrowsvg'>
        <img src={arrow} alt="" className='img-fluid'/>
      </div>
       <div className='container percent_bg'>
      <div className=''>
        <h2 className='percent_h4'>Garantiert kein Griff ins Klo</h2>
        <p className='percent_p'>Die Aussagen unserer Kunden sprechen für sich, fast alle Anwender stellen eine Verbesserung der Darm - und allgemeinen Gesundheit fest.</p>
      </div>
      <div className="row text-center">
        <div className="col-md-4 content">
          <h2>96%</h2>
          <p >aller Anwender bestätigen eine verbesserte Verdauung und häufigeren Stuhlgang</p>
        </div>
        <div className="col-md-4 content">
        <h2>87%</h2>
        <p>aller Anwender berichten von Abnehmerfolgen ohne Hungergefühl</p>
        </div>
        <div className="col-md-4 content">
        <h2>91%</h2>
        <p>aller Anwender fühlten sich bereits nach12 Stunden mit Colonpax leichter</p>
        </div>
        <p className='stand_p'>*Stand Oktober 2022 / Kundenumfrage aller Colonpax Anwender (Die Zahlen werden monatlich ausgewertet und erhalten ein Update)</p>
      </div>
       </div>
       <div className='usvg'>
       <img src={usvg} alt="" className='img-fluid'/>
       </div>
    </div>
    
  )
}

export default PercentageSection