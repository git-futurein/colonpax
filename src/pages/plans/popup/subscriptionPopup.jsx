import React, { useEffect, useState, useRef } from "react";
import "./popup.css";
import { useSelector, useDispatch } from "react-redux";
import { subscriptionPopupClose } from "../../../counterSlice";
import { json, Link } from "react-router-dom";

const paySources = ["CREDITCARD", "PAYPAL"];
const countries = {
  AT: "Austria",
  DE: "Germany",
};

const SubscriptionPopup = () => {
  const { subscriptionPopup, selectedSubscription } = useSelector(
    (state) => state.counter
  );

  const dispatch = useDispatch();
  const [showContactConditions, setShowContactConditions] = useState(false);
  const [popupNumber, setPopupNumber] = useState(1);
  const [formData, setFormData] = useState({
    loginId: "colonpax-api",
    password: "ColonPaxAPI71React",
    firstName: "",
    lastName: "",
    address1: "",
    country: "AT",
    city: "",
    postalCode: "",
    emailAddress: "",
    paySource: paySources[0],
    cardNumber: "",
    cardMonth: "",
    cardYear: "",
    cardSecurityCode: "",
    product1_id: selectedSubscription.id,
    product1_price: parseFloat(selectedSubscription.price).toFixed(2),
    product1_qty: selectedSubscription.qty,
    campaignId: 2,
    billShipSame: 1,
  });
  let paypalRef = useRef();

  useEffect(() => {
    if (window.paypal && paySources.includes("PAYPAL") && popupNumber == 2) {
      const fundingSources = [window.paypal.FUNDING.PAYPAL];

      fundingSources.map((fundingSource) => {
        const paypalButton = window.paypal.Buttons({
          fundingSource: fundingSource,
          style: {
            layout: "vertical",
            size: "large",
          },
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: "Payment to ColonPax",
                  amount: {
                    currency_code: "EUR",
                    value: parseFloat(
                      (
                        selectedSubscription.price * selectedSubscription.qty
                      ).toString()
                    ).toFixed(2),
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            await actions.order.capture();
            setFormData((prevData) => ({
              ...prevData,
              paySource: paySources[1],
            }));
            submitOrder();
          },
        });

        if (paypalButton.isEligible()) {
          paypalButton.render(paypalRef.current);
        }
      });
    }
  }, [popupNumber]);

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      product1_id: selectedSubscription.id,
      product1_price: parseFloat(selectedSubscription.price).toFixed(2),
      product1_qty: selectedSubscription.qty,
    }));
  }, [selectedSubscription]);

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleContactConditions = (e) => {
    if (e.target.checked) {
      setShowContactConditions(true);
    } else {
      setShowContactConditions(false);
    }
  };

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    setPopupNumber(popupNumber + 1);
  };

  const submitOrder = () => {
    let formBody = [];
    for (let property in formData) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(formData[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    const requestOptions = {
      method: "POST",
      body: "",
      redirect: "follow",
    };

    fetch(
      `https://api.konnektive.com/order/import/?${formBody}`,
      requestOptions
    ).then((response) => {
      const data = response.json();
      if (data.result === "SUCCESS") setPopupNumber(popupNumber + 1);
      else {
        alert(
          "Entschuldigung, es gab ein Problem bei der Bearbeitung der Bestellung. Bitte versuche es erneut."
        );
        dispatch(subscriptionPopupClose());
      }
    });
  };

  useEffect(() => {
    if (!subscriptionPopup) {
      setPopupNumber(1);
    }
  }, [subscriptionPopup]);

  return (
    <div className={subscriptionPopup ? "popup popup-active" : "popup"}>
      <div
        className="overlay"
        onClick={() => dispatch(subscriptionPopupClose())}
      ></div>
      <div className="popup-wrapper">
        <button
          className="close-btn"
          onClick={() => dispatch(subscriptionPopupClose())}
        >
          <i className="bi bi-x"></i>
        </button>

        {/* shipping */}
        {popupNumber === 1 && (
          <div className={popupNumber === 1 ? "shipping" : "shipping d-none"}>
            <div className="popup-header">
              <div className="popup-range d-flex justify-content-between align-items-center">
                <div className="range">
                  <div className="range-1"></div>
                  <div className="range-2"></div>
                </div>
                <div className="popup-range-item active">
                  <div className="popup-range-circle mb-2"></div>
                  <p className="text">Versand</p>
                </div>
                <div className="popup-range-item">
                  <div className="popup-range-circle mb-2"></div>
                  <p className="text">Zahlung</p>
                </div>
                <div className="popup-range-item">
                  <div className="popup-range-circle mb-2"></div>
                  <p className="text">KASSENBON</p>
                </div>
              </div>
              <h2 className="heading-2 mb-4">
                Geben Sie Ihre Versanddaten ein
              </h2>
            </div>
            <form className="shipping-form mb-5">
              <input
                required
                type="text"
                placeholder="Vorname"
                name="firstName"
                onChange={handleChange}
                value={formData["firstName"]}
              />
              <input
                required
                type="text"
                placeholder="Nachname"
                name="lastName"
                onChange={handleChange}
                value={formData["lastName"]}
              />
              <input
                required
                type="text"
                name="address1"
                placeholder="Adresse"
                onChange={handleChange}
                value={formData["address1"]}
              />
              <select name="country" onChange={handleChange}>
                {Object.entries(countries).map((country, index) => (
                  <option
                    value={country[0]}
                    selected={formData["country"] === country[0]}
                    key={index}
                  >
                    {country[1]}
                  </option>
                ))}
              </select>
              <input
                required
                type="text"
                name="city"
                placeholder="Ort/Stadt"
                onChange={handleChange}
                value={formData["city"]}
              />
              <input
                required
                type="text"
                name="postalCode"
                placeholder="Postleitzahl"
                onChange={handleChange}
                value={formData["postalCode"]}
              />
              <input
                required
                type="email"
                name="emailAddress"
                placeholder="E-Mail-Addresse"
                onChange={handleChange}
                value={formData["emailAddress"]}
              />

              <div className="d-flex align-items-start gap-2">
                <input
                  required
                  type="checkbox"
                  name="contact-checkbox"
                  id="contact-checkbox"
                  onChange={(e) => handleContactConditions(e)}
                />
                <label htmlFor="contact-checkbox" className="contact-label">
                  Ich möchte Sonderangebote und Rabatte von ColonBroom by
                  erhalten SMS
                </label>
              </div>
              {showContactConditions && (
                <div className="desc">
                  Durch Aktivieren des Kontrollkästchens stimmen Sie zu,
                  Marketingtexte zu erhalten Nachrichten von ColonBroom unter
                  der angegebenen Nummer, einschließlich Nachrichten, die von
                  Autodialer gesendet werden. Die Zustimmung ist keine Bedingung
                  kaufen. Msg&Data-Gebühren können anfallen. Die
                  Nachrichtenhäufigkeit variiert. Antworten Sie mit HELP, um
                  Hilfe zu erhalten, oder mit STOP, um den Vorgang abzubrechen.
                  Prüfen Sie unsere Privatsphäre Richtlinien und
                  Geschäftsbedingungen.
                </div>
              )}

              <button
                className="btn btn-submit mt-4"
                onClick={(e) => handleShippingSubmit(e)}
              >
                Fortsetzen
              </button>
            </form>
            <div className="shipping-icons d-flex justify-content-between align-items-center">
              <div className="shipping-icon">
                <svg className="icon icon-shipping-1">
                  <use xlinkHref="./images/icons.svg#icon-shipping-1"></use>
                </svg>
                <span className="text">Kostenloser Versand</span>
              </div>
              <div className="shipping-icon">
                <svg className="icon icon-shipping-1">
                  <use xlinkHref="./images/icons.svg#icon-shipping-2"></use>
                </svg>
                <span className="text">Produkte hergestellt in den USA</span>
              </div>
              <div className="shipping-icon">
                <svg className="icon icon-shipping-1">
                  <use xlinkHref="./images/icons.svg#icon-shipping-3"></use>
                </svg>
                <span className="text">Zufriedenheitsgarantie</span>
              </div>
            </div>
          </div>
        )}

        {popupNumber === 2 && (
          <div
            className={
              popupNumber === 2 ? "shipping payment" : "shipping d-none"
            }
          >
            <div className="popup-header">
              <div className="popup-range d-flex justify-content-between align-items-center">
                <div className="range">
                  <div className="range-1 complated"></div>
                  <div className="range-2"></div>
                </div>
                <div className="popup-range-item active">
                  <div className="popup-range-circle mb-2"></div>
                  <p className="text">Versand</p>
                </div>
                <div className="popup-range-item active">
                  <div className="popup-range-circle mb-2"></div>
                  <p className="text">Zahlung</p>
                </div>
                <div className="popup-range-item">
                  <div className="popup-range-circle mb-2"></div>
                  <p className="text">KASSENBON</p>
                </div>
              </div>
              <h2 className="heading-2 mb-4">
                Senden Sie eine sichere Zahlung
              </h2>
            </div>
            <div className="payment_wrapper">
              <div className="payment_item">
                <div className="gift d-flex justify-content-between flex-wrap">
                  <p className="text mb-0">{selectedSubscription.plan}</p>
                  <div className="amount">
                    €
                    {parseFloat(
                      selectedSubscription.price * selectedSubscription.qty +
                        (selectedSubscription.price *
                          selectedSubscription.discount *
                          selectedSubscription.qty) /
                          100
                    ).toFixed(2)}
                  </div>
                </div>
                <div className="discount d-flex justify-content-between flex-wrap">
                  <p className="text mb-0 text-danger">
                    Der Sonderrabatt (-{selectedSubscription.discount}%):
                  </p>
                  <div className="amount">
                    - €
                    {parseFloat(
                      (selectedSubscription.price *
                        selectedSubscription.qty *
                        selectedSubscription.discount) /
                        100
                    ).toFixed(2)}
                  </div>
                </div>
              </div>

              <div className="payment_item">
                <div className="gift d-flex justify-content-between flex-wrap">
                  <p className="text mb-0">
                    Versand nach {countries[formData["country"]]}
                  </p>
                  <div className="amount">€15.00</div>
                </div>
                <div className="discount d-flex justify-content-between flex-wrap">
                  <p className="text mb-0 text-danger">Rabatt (-100%)</p>
                  <div className="amount">- €15.00</div>
                </div>
              </div>

              <div className="payment_item">
                <div className="gift d-flex justify-content-between flex-wrap">
                  <p className="text mb-0">Abgerechneter Gesamtbetrag</p>
                  <div className="amount amount_total">
                    €
                    {parseFloat(
                      (
                        selectedSubscription.price * selectedSubscription.qty
                      ).toString()
                    ).toFixed(2)}
                  </div>
                </div>
                <div className="coupon d-flex justify-content-between flex-wrap">
                  <Link to="#">Gutschein erhalten?</Link>
                </div>
              </div>
              <div className="dieloge">
                Mit der Auswahl einer Zahlungsmethode stimmen Sie der zu{" "}
                <Link to="/tarms">Nutzungsbedingungen</Link> and
                <Link to="#"> Datenschutz</Link>.
              </div>
            </div>
            <form className="shipping-form payment-form mb-5">
              <h4 className="heading4 mb-3">
                Wählen Sie eine Zahlungsmethode aus
              </h4>
              <div className="w-full mb-4" ref={paypalRef} />

              <label htmlFor="card-number">Card Number</label>
              <div className="card-number mb-3 d-flex">
                <img src="/images/card-number.svg" alt="" />
                <input
                  required
                  type="text"
                  placeholder="1234 1234 1234 1234"
                  id="card-number"
                  name="cardNumber"
                  onChange={handleChange}
                  value={formData["cardNumber"]}
                />
              </div>

              <label htmlFor="Expiry">Expiry Month (MM)</label>
              <input
                required
                type="text"
                id="ExpiryMonth"
                placeholder="MM"
                className="mb-3"
                name="cardMonth"
                onChange={handleChange}
                value={formData["cardMonth"]}
              />

              <label htmlFor="Expiry">Expiry Year (YYYY)</label>
              <input
                required
                type="text"
                id="ExpiryYear"
                placeholder="YYYY"
                className="mb-3"
                name="cardYear"
                onChange={handleChange}
                value={formData["cardYear"]}
              />

              <label htmlFor="cvv">CVV</label>
              <input
                required
                type="text"
                id="cvv"
                name="cardSecurityCode"
                placeholder="..."
                onChange={handleChange}
                value={formData["cardSecurityCode"]}
              />

              <button
                className="btn btn-submit mt-4"
                onClick={(e) => {
                  e.preventDefault();
                  submitOrder();
                }}
              >
                Fortsetzen
              </button>
            </form>
            <div className="shipping-icons d-flex justify-content-between align-items-center">
              <div className="shipping-icon">
                <svg className="icon icon-shipping-1">
                  <use xlinkHref="./images/icons.svg#icon-shipping-1"></use>
                </svg>
                <span className="text">Kostenloser Versand</span>
              </div>
              <div className="shipping-icon">
                <svg className="icon icon-shipping-1">
                  <use xlinkHref="./images/icons.svg#icon-shipping-2"></use>
                </svg>
                <span className="text">Produkte hergestellt in den USA</span>
              </div>
              <div className="shipping-icon">
                <svg className="icon icon-shipping-1">
                  <use xlinkHref="./images/icons.svg#icon-shipping-3"></use>
                </svg>
                <span className="text">Zufriedenheitsgarantie</span>
              </div>
            </div>
          </div>
        )}

        {popupNumber === 3 && (
          <div
            className={
              popupNumber === 3 ? "shipping payment" : "shipping payment d-none"
            }
          >
            <div className="popup-header">
              <div className="popup-range d-flex justify-content-between align-items-center">
                <div className="range">
                  <div className="range-1 complated"></div>
                  <div className="range-2 complated"></div>
                </div>
                <div className="popup-range-item active">
                  <div className="popup-range-circle mb-2"></div>
                  <p className="text">Versand</p>
                </div>
                <div className="popup-range-item active">
                  <div className="popup-range-circle mb-2"></div>
                  <p className="text">Zahlung</p>
                </div>
                <div className="popup-range-item active">
                  <div className="popup-range-circle mb-2"></div>
                  <p className="text">KASSENBON</p>
                </div>
              </div>
              <h2 className="heading-2 mb-4">Erfolgreich</h2>
            </div>
            <div>
              <p style="font-size: 20px">
                Ihre Bestellung wurde erfolgreich empfangen. Sie erhalten die
                Lieferung in 7 Tagen
              </p>
            </div>
            <div className="shipping-icons d-flex justify-content-between align-items-center">
              <div className="shipping-icon">
                <svg className="icon icon-shipping-1">
                  <use xlinkHref="./images/icons.svg#icon-shipping-1"></use>
                </svg>
                <span className="text">Kostenloser Versand</span>
              </div>
              <div className="shipping-icon">
                <svg className="icon icon-shipping-1">
                  <use xlinkHref="./images/icons.svg#icon-shipping-2"></use>
                </svg>
                <span className="text">Produkte hergestellt in den USA</span>
              </div>
              <div className="shipping-icon">
                <svg className="icon icon-shipping-1">
                  <use xlinkHref="./images/icons.svg#icon-shipping-3"></use>
                </svg>
                <span className="text">Zufriedenheitsgarantie</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscriptionPopup;
