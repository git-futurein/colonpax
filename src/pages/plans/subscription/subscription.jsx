import React, { useState, useEffect } from "react";
import "../plans.css";
import SubscriptionPopup from "../popup/subscriptionPopup";
import { subscriptionPopupOpen } from "../../../counterSlice";
import { useDispatch } from "react-redux";

const Subscription = ({ marginTop }) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState({
    0: [],
    1: [],
  });
  const [campaignIds, setCampaignIds] = useState([]);

  useEffect(() => {
    fetchPrices();
  }, []);

  const fetchPrices = () => {
    fetch(`https://colonpax.com/api/products.php`)
      .then((response) => response.json())
      .then((res) => {
        const option1Products = Object.entries(res.message.data)[0][1].products;
        const option2Products = Object.entries(res.message.data)[1][1].products;
        setProducts({
          0: option2Products,
          1: option1Products,
        });
        setCampaignIds(Object.keys(res.message.data));
        // console.log(Object.keys(res.message.data));
      });
  };

  const subscriptionData = [
    {
      id: 1,
      img: "/images/plans-img-2.png",
      angebot: false,
      active: false,
      dose: 1,
      option1: "Einmaliger Kauf",
      option2: "Abonnieren & Sparen",
      btns: ["Jetzt abonnieren", "Jetzt Kaufen"],
      prices: [49, 58],
      formulas: [
        ["60 Portionen", "0,91 Cent pro Drink", "1 Dose jeden Monat"],
        ["60 Portionen", "0,99 Cent pro Drink", "1 Dose wird geliefert"],
      ],
      value: 0,
      sparan: "Sie sparen",
      sparanNum: 15,
      showSparan: 0,
    },
    {
      id: 2,
      img: "/images/plans-img-3.png",
      angebot: true,
      active: true,
      dose: 3,
      option1: "Einmaliger Kauf",
      option2: "Abonnieren & Sparen",
      btns: ["Jetzt abonnieren", "Jetzt Kaufen"],
      prices: [34, 44],
      formulas: [
        ["60 Portionen", "0,59 Cent pro Drink", "3 Dosen jeden Monat"],
        ["60 Portionen", "0,67 Cent pro Drink", "3 Dosen werden geliefert"],
      ],
      value: 0,
      sparan: "Sie Sparen bis zu",
      sparanNum: 40,
      showSparan: -1,
    },
    {
      id: 3,
      img: "/images/plans-img-4.png",
      angebot: true,
      active: false,
      dose: 6,
      prices: [24, 34],
      formulas: [
        ["60 Portionen", "6 Dosen werden alle Monate geliefert"],
        ["60 Portionen", "6 Dosen werden einmalig geliefert"],
      ],
      option1: "Einmaliger Kauf",
      option2: "Abonnieren & Sparen",
      btns: ["Jetzt abonnieren", "Jetzt Kaufen"],
      value: 0,
      sparan: "Sie sparen",
      sparanNum: 55,
      showSparan: 0,
    },
  ];

  const [data, setData] = useState(subscriptionData);

  const handleOption1 = (e, id) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        item.value = 1;
      }
      return item;
    });
    // console.log(newData);
    setData(newData);
  };
  const handleOption2 = (e, id) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        item.value = 0;
      }
      return item;
    });
    setData(newData);
  };

  return (
    <div style={marginTop && { marginTop }}>
      <SubscriptionPopup />
      <div className="container">
        <div className="subscription row g-5">
          {data.map((item, index) => {
            const {
              id,
              img,
              dose,
              angebot,
              active,
              btns,
              option1,
              option2,
              formulas,
              value,
              sparan,
              sparanNum,
              showSparan,
              prices,
            } = item;

            const price = products[value][index]
              ? parseFloat(products[value][index].price)
              : 0;

            return (
              <div className="col-12 col-lg-4" key={id}>
                <div
                  className={
                    active ? "subscription-item active" : "subscription-item"
                  }
                >
                  {angebot && (
                    <div className="subscription-head">
                      Beliebtestes Angebot
                    </div>
                  )}

                  <h4 className="heading-4 mb-2">
                    {dose} Dose / <br /> {dose} Monatsvorrat
                  </h4>
                  <img src={img} className="mb-2" alt="" />
                  <div className="price-box d-flex align-items-start">
                    <span className="currency">&#8364;</span>
                    <span className="price">{prices[value]}.</span>
                    <span className="price-small">99</span>
                    <span className="based">/ Monat</span>
                  </div>
                  <h5 className="heading-5 mb-4">pro Dose</h5>
                  <ul className="subscription__list mb-5">
                    {formulas[value].map((item, i) => {
                      return (
                        <li className="subscription__item" key={i}>
                          <span className="icon">
                            <i className="bi bi-check2"></i>
                          </span>
                          <span className="text">{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name={`flexRadioDefault1${id}`}
                      id={`flexRadioDefault1${id}`}
                      onChange={(e) => handleOption1(e, id)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`flexRadioDefault1${id}`}
                    >
                      {option1}
                    </label>
                  </div>
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name={`flexRadioDefault1${id}`}
                      id={`flexRadioDefault2${id}`}
                      onChange={(e) => handleOption2(e, id)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`flexRadioDefault2${id}`}
                    >
                      {option2}
                    </label>
                  </div>
                  {showSparan === -1 || value === showSparan ? (
                    <div className="discount mb-4">
                      <div className="sparan">{`${sparan} ${sparanNum}%`}</div>
                    </div>
                  ) : null}
                  <button
                    className="btn btn-subscription"
                    onClick={() =>
                      dispatch(
                        subscriptionPopupOpen({
                          id: id,
                          plan: `${dose} Dose / ${dose} Monatsvorrat`,
                          qty: dose,
                          type:
                            value === 1
                              ? "Einmaliger Kauf"
                              : "Abonnieren & Sparen",
                          price,
                          subtotal: price + price * 0.07,
                          campaignId:
                            campaignIds.length > 0 ? campaignIds[value] : "2",
                          discount:
                            showSparan === -1 || value === showSparan
                              ? sparanNum
                              : 0,
                        })
                      )
                    }
                  >
                    {btns[value]}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Subscription;
