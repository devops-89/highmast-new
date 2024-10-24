import React, { useEffect, useRef } from "react";
import "./index.css";

const Partnershipsection = () => {
  return (
    <div className="fw-col-inner">
      <div className="animated-skew-texts --dark-style">
        <div className="animated-skew-texts__container">
          <div className="animated-skew-texts__row-wrap --row-1">
            <div className="animated-skew-texts__row">
              <span className="animated-skew-texts__text">BW Epic Kosan</span>

              <span className="animated-skew-texts__icon">
                <img
                  src="//new.starkshipping.net/wp-content/uploads/2021/07/icn_01.svg"
                  alt="Ship Repair"
                />
              </span>
              <span className="animated-skew-texts__text">Hafnia</span>
              <span className="animated-skew-texts__icon">
                <img
                  src="//new.starkshipping.net/wp-content/uploads/2021/07/icn_02.svg"
                  alt="Full Port Agency"
                />
              </span>
              <span className="animated-skew-texts__text">SHIPS</span>
              <span className="animated-skew-texts__icon">
                <img
                  src="//new.starkshipping.net/wp-content/uploads/2021/07/icn_01.svg"
                  alt="Ship Repair"
                />
              </span>
              <span
                className="animated-skew-texts__text"
                style={{ color: "#FF0000" }}
              >
                OUR CLIENT
              </span>
              <span className="animated-skew-texts__icon">
                <img
                  src="//new.starkshipping.net/wp-content/uploads/2021/07/icn_03.svg"
                  alt="Protecting Agency"
                />
              </span>
              <span className="animated-skew-texts__text">
                ISLAND VIEW SHIPPING SERVICES
              </span>
              <span className="animated-skew-texts__icon">
                <img
                  src="//new.starkshipping.net/wp-content/uploads/2021/07/icn_04.svg"
                  alt="Ship's Supply"
                />
              </span>
              <span className="animated-skew-texts__icon">
                <img
                  src="//new.starkshipping.net/wp-content/uploads/2021/07/icn_04.svg"
                  alt="Ship's Supply"
                />
                Mitsui O.S.K. Lines
              </span>
              {/* Duplicate content for seamless scrolling */}
              <span className="animated-skew-texts__text">BW Epic Kosan</span>
              <span className="animated-skew-texts__icon">
                <img
                  src="//new.starkshipping.net/wp-content/uploads/2021/07/icn_01.svg"
                  alt="Ship Repair"
                />
              </span>
              <span className="animated-skew-texts__text">Hafnia</span>
              <span className="animated-skew-texts__icon">
                <img
                  src="//new.starkshipping.net/wp-content/uploads/2021/07/icn_02.svg"
                  alt="Full Port Agency"
                />
              </span>
              <span className="animated-skew-texts__text">SHIPS</span>
              <span className="animated-skew-texts__icon">
                <img
                  src="//new.starkshipping.net/wp-content/uploads/2021/07/icn_03.svg"
                  alt="Protecting Agency"
                />
              </span>

              <span className="animated-skew-texts__text">
                ISLAND VIEW SHIPPING SERVICES
              </span>
              <span className="animated-skew-texts__icon">
                <img
                  src="//new.starkshipping.net/wp-content/uploads/2021/07/icn_04.svg"
                  alt="Ship's Supply"
                />
              </span>
              <span className="animated-skew-texts__text">
                Mitsui O.S.K. Lines
              </span>
            </div>
            {/* Add more rows as needed */}
          </div>
          <div className="animated-skew-texts__row-wrap --row-1">
            <div className="animated-skew-texts__row">
              <span className="animated-skew-texts__text">Hafnia</span>

              <span className="animated-skew-texts__icon">
                <img
                  src="//new.starkshipping.net/wp-content/uploads/2021/07/icn_01.svg"
                  alt="Ship Repair"
                />
              </span>
              <span className="animated-skew-texts__text">SHIPS</span>
              <span className="animated-skew-texts__icon">
                <img
                  src="//new.starkshipping.net/wp-content/uploads/2021/07/icn_02.svg"
                  alt="Full Port Agency"
                />
              </span>
              <span
                className="animated-skew-texts__text"
                style={{ color: "#FF0000" }}
              >
                OUR CLIENT
              </span>
              <span className="animated-skew-texts__icon">
                <img
                  src="//new.starkshipping.net/wp-content/uploads/2021/07/icn_01.svg"
                  alt="Ship Repair"
                />
              </span>
              <span className="animated-skew-texts__text">
                ISLAND VIEW SHIPPING SERVICES
              </span>
              <span className="animated-skew-texts__icon">
                <img
                  src="//new.starkshipping.net/wp-content/uploads/2021/07/icn_03.svg"
                  alt="Protecting Agency"
                />
              </span>
              <span className="animated-skew-texts__text">BW Epic Kosan</span>
              <span className="animated-skew-texts__icon">
                <img
                  src="//new.starkshipping.net/wp-content/uploads/2021/07/icn_04.svg"
                  alt="Ship's Supply"
                />
              </span>
              <span className="animated-skew-texts__icon">
                <img
                  src="//new.starkshipping.net/wp-content/uploads/2021/07/icn_04.svg"
                  alt="Ship's Supply"
                />
              </span>
              <span className="animated-skew-texts__text">Hafnia</span>

              <span className="animated-skew-texts__icon">
                <img
                  src="//new.starkshipping.net/wp-content/uploads/2021/07/icn_01.svg"
                  alt="Ship Repair"
                />
              </span>
              <span className="animated-skew-texts__text">SHIPS</span>
              <span className="animated-skew-texts__icon">
                <img
                  src="//new.starkshipping.net/wp-content/uploads/2021/07/icn_02.svg"
                  alt="Full Port Agency"
                />
              </span>
              <span className="animated-skew-texts__text">
                ISLAND VIEW SHIPPING SERVICES
              </span>
              <span className="animated-skew-texts__icon">
                <img
                  src="//new.starkshipping.net/wp-content/uploads/2021/07/icn_03.svg"
                  alt="Protecting Agency"
                />
              </span>
              <span className="animated-skew-texts__text">BW Epic Kosan</span>
              <span className="animated-skew-texts__icon">
                <img
                  src="//new.starkshipping.net/wp-content/uploads/2021/07/icn_04.svg"
                  alt="Ship's Supply"
                />
              </span>
              <span className="animated-skew-texts__icon">
                <img
                  src="//new.starkshipping.net/wp-content/uploads/2021/07/icn_04.svg"
                  alt="Ship's Supply"
                />
                Mitsui O.S.K. Lines
              </span>
            </div>
          </div>
          <div className="animated-skew-texts__row-wrap --row-1">
            <div className="animated-skew-texts__row">
              <span className="animated-skew-texts__text">
                ISLAND VIEW SHIPPING SERVICES
              </span>

              <span className="animated-skew-texts__icon">
                <img
                  src="//new.starkshipping.net/wp-content/uploads/2021/07/icn_01.svg"
                  alt="Ship Repair"
                />
              </span>
              <span className="animated-skew-texts__text">
                Mitsui O.S.K. Lines
              </span>
              <span className="animated-skew-texts__icon">
                <img
                  src="//new.starkshipping.net/wp-content/uploads/2021/07/icn_02.svg"
                  alt="Full Port Agency"
                />
              </span>
              <span className="animated-skew-texts__text">SHIPS</span>
              <span className="animated-skew-texts__icon">
                <img
                  src="//new.starkshipping.net/wp-content/uploads/2021/07/icn_03.svg"
                  alt="Protecting Agency"
                />
              </span>
              <span className="animated-skew-texts__text">Hafnia</span>
              <span className="animated-skew-texts__icon">
                <img
                  src="//new.starkshipping.net/wp-content/uploads/2021/07/icn_04.svg"
                  alt="Ship's Supply"
                />
              </span>
              <span className="animated-skew-texts__icon">
                <img
                  src="//new.starkshipping.net/wp-content/uploads/2021/07/icn_04.svg"
                  alt="Ship's Supply"
                />
                BW Epic Kosa
              </span>
              <span className="animated-skew-texts__text">
                ISLAND VIEW SHIPPING SERVICES
              </span>

              <span className="animated-skew-texts__icon">
                <img
                  src="//new.starkshipping.net/wp-content/uploads/2021/07/icn_01.svg"
                  alt="Ship Repair"
                />
              </span>
              <span className="animated-skew-texts__text">
                Mitsui O.S.K. Lines
              </span>
              <span className="animated-skew-texts__icon">
                <img
                  src="//new.starkshipping.net/wp-content/uploads/2021/07/icn_02.svg"
                  alt="Full Port Agency"
                />
              </span>
              <span className="animated-skew-texts__text">SHIPS</span>
              <span className="animated-skew-texts__icon">
                <img
                  src="//new.starkshipping.net/wp-content/uploads/2021/07/icn_03.svg"
                  alt="Protecting Agency"
                />
              </span>
              <span className="animated-skew-texts__text">Hafnia</span>
              <span
                className="animated-skew-texts__text"
                style={{ color: "#FF0000" }}
              >
                OUR CLIENT
              </span>
              <span className="animated-skew-texts__icon">
                <img
                  src="//new.starkshipping.net/wp-content/uploads/2021/07/icn_01.svg"
                  alt="Ship Repair"
                />
              </span>
              <span className="animated-skew-texts__icon">
                <img
                  src="//new.starkshipping.net/wp-content/uploads/2021/07/icn_04.svg"
                  alt="Ship's Supply"
                />
              </span>
              <span className="animated-skew-texts__icon">
                <img
                  src="//new.starkshipping.net/wp-content/uploads/2021/07/icn_04.svg"
                  alt="Ship's Supply"
                />
                BW Epic Kosa
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnershipsection;
