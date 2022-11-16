import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Faq.css";
import free from "../../assets/Group 54.svg";
import best from "../../assets/Group 52.svg";
import eco from "../../assets/Group 62.svg";
const Faq = () => {
  return (
    <section id="faq">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="text-part">
              <h2 className="faq_h2">Häufig gestellte Fragen</h2>
              <p className="faq-p">
                Hier findest Du eine kurze Auswahl an den wichtigsten Fragen.
                Sollte deine Frage unbeantwortet sein besuche einfach unsere FAQ
                Seite oder kontaktiere uns.
              </p>
              <button className="faq_btn">KONTAKTIERE UNS</button>
            </div>
          </div>
          <div className="col-md-7">
            <Accordion>
              <Accordion.Item eventKey="0" className="firstItem">
                <Accordion.Header>
                  Kann Colonpax Blähungen verursachen?
                </Accordion.Header>
                <Accordion.Body>
                  Der Colonpax - Ballaststoffomplex ist gut verträglich und
                  sicher. Wenn du Colonpax zum ersten Mal verwendest, könntest
                  du in den ersten Tagen der Anwendung leichte Blähungen
                  verspüren. Aber bitte keine Sorge, dein Körper muss sich nur
                  auf die erhöhte Ballaststoffzufuhr einstellen.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Warum sind Ballaststoffe so wichtig?
                </Accordion.Header>
                <Accordion.Body>
                  Ballaststoffe sind wichtig für die Gesundheit , deine
                  Verdauung und für einen regelmäßigen Stuhlgang. Der Colonpax -
                  Ballaststoffkomplex sorgt auch für ein längeres
                  Sättigungsgefühl, und aktiviert den Stoffwechsel.
                  Ballaststoffe können auch zur Vorbeugung von Krankheiten wie
                  Diabetes, Herzerkrankungen oder Darmkrebs beitragen.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Wann fängt Colonpax an zu wirken?
                </Accordion.Header>
                <Accordion.Body>
                  Das hängt von deiner individuellen Stoffwechselreaktion und
                  deinem Stoffwechselalter ab und kann bei jedem unterschiedlich
                  variieren; nach ca. 24–72 Stunden solltest du aber eine
                  Veränderung bei deinem Stuhlgang bemerken. Wir raten Dir daher
                  unser kostenfreies Quiz zu machen um zu sehen wie Colonpax bei
                  Dir wirkt.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Kann ich Colonpax während des Intervall-Fastens einnehmen?
                </Accordion.Header>
                <Accordion.Body>
                  Kurz und einfach: Ja, du kannst Colonpax während des
                  Intervall-Fastens zu dir nehmen und wird dein Fasten auch
                  nicht brechen.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Kann ich Colonpax während einer <br />
                  Keto-Diät einnehmen?
                </Accordion.Header>
                <Accordion.Body>
                  Ja, das kannst du gern machen! Colonpax wird im Gegensatz zu
                  anderen Mikronährstoffen wie beispielsweise Proteinen oder
                  Kohlenhydraten, die der Körper abbaut und absorbiert, nicht
                  verdaut. Stattdessen bleibt der Colonpax - Ballaststoffkomplex
                  sie relativ intakt in Magen, Dünndarm und Dickdarm. Du wirst
                  also keine zusätzlichen Kohlenhydrate aufnehmen. Dein Körper
                  wird die Ballaststoffe weder absorbieren noch in Zucker
                  zerlegen.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="row icon-text-part">
          <div className="col-lg-4 col-md-4">
            <div className="service">
              <img src={free} alt="" className="img-fluid" /> Kostenfreier
              Versand
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="service">
              <img src={best} alt="" className="img-fluid" /> Sichere Bezahlung
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="service">
              <img src={eco} alt="" className="img-fluid" /> Bio Qualität
            </div>
          </div>
        </div>
        {/* <div className="d-flex justify-content-around service_div">
          <div className="service">
            <img src={free} alt="" className="img-fluid" /> Kostenfreier Versand
          </div>
          <div className="service">
            <img src={best} alt="" className="img-fluid" /> Sichere Bezahlung
          </div>
          <div className="service">
            <img src={eco} alt="" className="img-fluid" /> Bio Qualität
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Faq;
