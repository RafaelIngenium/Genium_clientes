import React, { useState } from "react";
import ImageSrc from "../../../src/build/images/genium-mascot.png";

const ModalMoveFolder = () => {
  const [btnActive, setBtnActive] = useState(false);

  return (
    <div className="content-1">
      <div className="text">Para onde você quer mover?</div>

      <div className="container-select">
        <button
          className={`select-btn ${btnActive ? "active" : ""}`}
          onClick={() => setBtnActive(!btnActive)}
        >
          Fluxo nome <i className="material-icons">chevron_right</i>
        </button>
        <div
          className={`list-drop list-drop--secondary ${
            btnActive ? "active" : ""
          }`}
        >
          <div className="folder">
            <div className="folder__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
              >
                <path
                  fill="#3E3F44"
                  fillRule="evenodd"
                  d="M16.796 9.85c.375.086.61.467.53.823l-.002 5.654a1.468 1.468 0 0 1-1.426 1.173H6.054c-.685 0-1.277-.488-1.427-1.2v-5.614l-.012-.087a.71.71 0 0 1 .542-.748c.377-.086.749.157.834.567l-.003 5.602a.07.07 0 0 0 .066.056h9.844c.031 0 .06-.023.064-.03l.002-5.654a.696.696 0 0 1 .832-.541zM11 8.304c1.65 0 2.987 1.374 2.987 3.067S12.651 14.438 11 14.438c-1.65 0-2.987-1.375-2.987-3.068S9.349 8.303 11 8.303zm0 1.423c-.88 0-1.595.735-1.595 1.644 0 .909.715 1.644 1.595 1.644s1.595-.735 1.595-1.644c0-.909-.715-1.644-1.595-1.644zm.45-7.064l7.63 6.196c.296.25.339.696.096 1a.685.685 0 0 1-.98.099L11 4.125 3.792 9.967a.686.686 0 0 1-.98-.124.723.723 0 0 1 .12-.996l7.648-6.195a.683.683 0 0 1 .87.01z"
                ></path>
              </svg>
            </div>
            <div className="folder__name">Home</div>
          </div>

          <div className="list-drop__item list-drop__item--column">
            <div className="list-drop__item__primary">
              <div className="list-drop__item__img">
                <img src={ImageSrc} alt="img" />
              </div>
              <div className="list-drop__item__name-folder">Toronto</div>
            </div>
          </div>

          <div className="list-drop__item list-drop__item--column">
            <div className="list-drop__item__primary">
              <div className="list-drop__item__img">
                <img src={ImageSrc} alt="img" />
              </div>
              <div className="list-drop__item__name-folder">Toronto</div>
            </div>
            <div className="list-drop__item__secondary">
              <div className="list-drop__item__sub-item">
                <div className="list-drop__item__img">
                  <img src={ImageSrc} alt="img" />
                </div>
                <div className="list-drop__item__name-folder">Brasil</div>
              </div>
            </div>
          </div>

          <div className="list-drop__item list-drop__item--column">
            <div className="list-drop__item__primary">
              <div className="list-drop__item__img">
                <img src={ImageSrc} alt="img" />
              </div>
              <div className="list-drop__item__name-folder">Toronto</div>
            </div>
            <div className="list-drop__item__secondary">
              <div className="list-drop__item__sub-item">
                <div className="list-drop__item__img">
                  <img src={ImageSrc} alt="img" />
                </div>
                <div className="list-drop__item__name-folder">Brasil</div>
              </div>
            </div>
          </div>

          <div className="list-drop__item list-drop__item--column">
            <div className="list-drop__item__primary">
              <div className="list-drop__item__img">
                <img src={ImageSrc} alt="img" />
              </div>
              <div className="list-drop__item__name-folder">Toronto</div>
            </div>
            <div className="list-drop__item__secondary">
              <div className="list-drop__item__sub-item">
                <div className="list-drop__item__img">
                  <img src={ImageSrc} alt="img" />
                </div>
                <div className="list-drop__item__name-folder">Brasil</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMoveFolder;
