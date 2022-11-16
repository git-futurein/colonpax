import React from "react";
import "./AdvantageSection.css";
import protein from "../../assets/Protein.png";
import jar from "../../assets/Group 39.svg";
import bord from "../../assets/Group 43.svg";
import watch from "../../assets/Group 41.svg";
import glass from "../../assets/Group 45.svg";

const AdvantageSection = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-9 text-center m-auto">
          <h2 className="advantage_h2">
            Endlich ein neues Darmgefühl, damit Dich nichts mehr aufhält!
          </h2>
          <p className="advantage_p">
            Colonpax ist das Resultat neuster Erkenntnisse der
            Magen-Darm-Forschung: Eine sanfte Lösung für alle, die ihren Körper
            entgiften, ihre Immunabwehr stärken und Stoffwechsel reparieren
            wollen.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="content-box">
            <div className="d-flex justify-content-center">
              <img src={bord} alt="" className="px-2" />
            </div>
            <div>
              <h4 className="adv_h4">Entgiftung für den Körper</h4>
              <p className="adv_p">
                Der einzigartige Komplex aus essenziellen Nährstoffen fördert
                die Entgiftung deines Körpers, indem es den Darm ganzheitlich
                reinigt und exogene und endogene Toxine absorbiert, die das
                Darmnervensystem schädigen können.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="content-box">
            <div className="d-flex justify-content-center">
              <img src={watch} alt="" className="px-2" />
            </div>
            <div>
              <h4 className="adv_h4">nachhaltige Abnehmerfolge</h4>
              <p className="adv_p">
                Colonpax ist ein einzigartiger Ballaststoffkomplex, der die
                Darmflora und das Verdauungssystem verbessert und deinen
                Stoffwechsel wieder in Schwung bringt.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="content-box">
            <div className="d-flex justify-content-center">
              <img src={jar} alt="" className="px-2" />
            </div>
            <div>
              <h4 className="adv_h4">Mehr bessere Verdauung</h4>
              <p className="adv_p">
                Colonpax kann deine Energie steigern und bring die Darmfunktion
                in Schwung. Es löst die Verstofung, reduziert den Blähbauch und
                Blähungen und lindert die Krämpfe.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="content-box">
            <div className="d-flex justify-content-center">
              <img src={glass} alt="" className="px-2" />
            </div>
            <div>
              <h4 className="adv_h4">Der essenzielle Ballaststoff</h4>
              <p className="adv_p">
                Einzigartiger Ballaststoffkomplex Colonpax ist ein einzigartiger
                Ballaststoffkomplex, der Darmbeschwerden wie Durchfall und
                Verstopfung lindert, den Blutzuckerspiegel reguliert und das
                Abnehmen beschleunigt
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-4">
        <p className="link_paragraph">
          LESEN SIE HIER DIE AUSFÜHRLICHE STUDIENLISTE ZU UNSEREN INHALTSSTOFFEN
        </p>
        <button className="nav_btn">MACH DEN TEST</button>
      </div>
    </div>
  );
};

export default AdvantageSection;
