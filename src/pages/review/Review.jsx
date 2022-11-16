import React, { Component } from "react";
import "./Review.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import man1 from "../../assets/man1.png";
import man2 from "../../assets/man2.png";
import man3 from "../../assets/men3.png";

export default class Review extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1366,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <section id="review">
        <div className="container">
          <div>
            <div className="row">
              <div className="col-lg-12 text-center header-text">
                <h2> Tausende von glücklichen Kunden</h2>
                <p>
                  Und sie mögen 99 Probleme haben, aber der Darm ist keines
                  davon.
                </p>
              </div>
            </div>
            <Slider {...settings}>
              <div className="box">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="img-box">
                      <img src={man1} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="name-box">
                      <h4 className="name">Verstopfung ist weg</h4>
                      <p className="designation">Verifizierter Kunde</p>
                    </div>
                  </div>
                </div>
                <div className="star">
                  <ul>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                  </ul>
                </div>
                <div className="text">
                  <p>
                    Bin ueber Instagram drauf gestossen und nehme es jetzt seit
                    2 Monaten und muss sagen, dass es bei mir besser
                    funktioniert als zum Beispiel Dulocolax. Colonpax ist zwar
                    kein Abführmittel im klassischen Sinn aber es kann
                    wesentlich mehr, da der Ansatz ganzheitlich ist. Auch
                    Nebenwirkungen wie Kopfschmerzen oder Blähungen habe ich
                    keine gehabt bei Colonpax.
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="img-box">
                      <img src={man2} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="name-box">
                      <h4 className="name">Perfekt zum Abnehmen</h4>
                      <p className="designation">Verifizierter Kunde</p>
                    </div>
                  </div>
                </div>
                <div className="star">
                  <ul>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                  </ul>
                </div>
                <div className="text">
                  <p>
                    Einen Freundin von mir hat es genommen und zum Sommer super
                    abgenommen. Also habe ich es auch ausprobiert und auch bei
                    mir hat es geholfen. Ich bin von Colonpax begeistert und
                    eben gerne 5 Sterne.
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="img-box">
                      <img src={man3} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="name-box">
                      <h4 className="name">Empfehlenswert</h4>
                      <p className="designation">Verifizierter Kunde</p>
                    </div>
                  </div>
                </div>
                <div className="star">
                  <ul>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                  </ul>
                </div>
                <div className="text">
                  <p>
                    Ich kann mich nur anschliessen und hier 5 Sterne geben.
                    Meine Darmbeschwerden sind weg und der Geschmack ist
                    wirklich lecker. Klar zu empfehlen
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="img-box">
                      <img src={man1} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="name-box">
                      <h4 className="name">Gutes Produkt</h4>
                      <p className="designation">Verifizierter Kunde</p>
                    </div>
                  </div>
                </div>
                <div className="star">
                  <ul>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                  </ul>
                </div>
                <div className="text">
                  <p>
                    Ich bin mit diesem Colonpax sehr zufrieden. Es habe meine
                    Darmbeschwerden und Gewichtsprobleme sehr gut in den Griff
                    bekommen. Auch meine Heisshunger Attacken sind weg.
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="img-box">
                      <img src={man2} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="name-box">
                      <h4 className="name">
                        Nach der Schwangerschaft zugenommen
                      </h4>
                      <p className="designation">Verifizierter Kunde</p>
                    </div>
                  </div>
                </div>
                <div className="star">
                  <ul>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                  </ul>
                </div>
                <div className="text">
                  <p>
                    Ich habe nach der Schwangerschaft und dem Abstillen massiv
                    an Gewicht zugenommen und habe nach einem Produkt ohne
                    Nebenwirkungen gesucht mit natürlichen Inhaltsstoffen. Dann
                    habe ich von Colonpax gelesen und es nachdem ich doch
                    skeptisch war doch gekauft. Nach sieben tagen fing dann an
                    meine Verdauung wieder in Schwung zu kommen. Das gute finde
                    ich, dass die Einnahme von Colonpax personalisiert wird. Ich
                    kann es nur empfehlen.
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="img-box">
                      <img src={man3} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="name-box">
                      <h4 className="name">Gutes Produkt lange Lieferzeit</h4>
                      <p className="designation">Verifizierter Kunde</p>
                    </div>
                  </div>
                </div>
                <div className="star">
                  <ul>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                  </ul>
                </div>
                <div className="text">
                  <p>
                    Habe es mir Colonpax nach einigen Überlegungen gekauft. Das
                    Geld ist gut angelegt, da das Produkt wirklich hilft bei
                    Verdauungsbeschwerden und Gewichtsproblemen. Allerdings hat
                    die Lieferung etwas lange gedauert. Muss aber nicht am
                    Anbieter liegen.
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="img-box">
                      <img src={man1} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="name-box">
                      <h4 className="name">Colonpax wirkt.</h4>
                      <p className="designation">Verifizierter Kunde</p>
                    </div>
                  </div>
                </div>
                <div className="star">
                  <ul>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                  </ul>
                </div>
                <div className="text">
                  <p>
                    Das Zeug ist super. Kann mich hier den anderen nur
                    anschliessen. Haben in 4 Wochen jetzt 6 Kilogramm abgenommen
                    ohne dabei meine Ernährung umzustellen. Daumen hoch.
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="img-box">
                      <img src={man2} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="name-box">
                      <h4 className="name">Hilft bei Reizdarm</h4>
                      <p className="designation">Verifizierter Kunde</p>
                    </div>
                  </div>
                </div>
                <div className="star">
                  <ul>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                  </ul>
                </div>
                <div className="text">
                  <p>
                    {" "}
                    Seitdem bei mir Reizdarm mit den Symptomen Blähungen,
                    Bauchschmerzen und Verstopfung festgestellt wurde habe ich
                    alles ausprobiert was der Markt zu bieten hat. Besonders
                    Probiotika haben bei mir eher das Gegenteil bewirkt. Also
                    nur noch mehr Bauchschmerzen. Dann hat meine Mutter mir von
                    Colonpax erzählt und ich habe es ausprobiert. Es wirkt und
                    hat bei mir ersthaft geholfen.
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="img-box">
                      <img src={man3} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="name-box">
                      <h4 className="name">Darmbeschwerden sind weg.</h4>
                      <p className="designation">Verifizierter Kunde</p>
                    </div>
                  </div>
                </div>
                <div className="star">
                  <ul>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                  </ul>
                </div>
                <div className="text">
                  <p>
                    Ich hatte immer wieder Darmbechwerden bis hin zu chronischem
                    Durchfall. Dieses Präbiotikum hilft wirklich und mir geht es
                    besser.
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}

// const Review = () => {
//   return (
//    <section id="review">
//     <div className="container">

//     </div>
//    </section>
//   )
// };

// export default Review;
