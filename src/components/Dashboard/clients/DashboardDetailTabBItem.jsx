import React from "react";

const DashboardDetailTabBItem = () => {
  return (
    <a href="?page=dashboard-client-details" className="table-card__body__row">
      <div className="table-card__item table-card__item-1">
        <div className="user-info">
          <div className="user-info__photo">
            <img
              className="user-info__photo__img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh7MB3vS-7uVvMEqlf-ExEJgJ64b0ozAA0Un8GQrbwOnZG6dZqjQ"
              alt=""
            />
          </div>
          <span className="socials-icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56.872"
              height="56.877"
              viewBox="0 0 56.872 56.877"
            >
              <g transform="translate(0 0)">
                <path
                  fill="#2196f3"
                  d="M28.461.006A27.893,27.893,0,0,0,.025,27.257,26.737,26.737,0,0,0,9.5,47.541v8.152a1.185,1.185,0,0,0,1.813,1l6.6-4.126a29.34,29.34,0,0,0,10.54,1.936A27.893,27.893,0,0,0,56.9,27.257,27.893,27.893,0,0,0,28.461.006Z"
                  transform="translate(-0.025 0)"
                ></path>
                <path
                  fill="#fafafa"
                  d="M123.049,171.171a1.185,1.185,0,0,0-1.517-.332l-12.322,6.718-7.666-6.574a1.185,1.185,0,0,0-1.609.062L85.717,185.263a1.185,1.185,0,0,0,1.405,1.877l12.322-6.718L107.117,187a1.185,1.185,0,0,0,1.609-.062l14.218-14.218A1.185,1.185,0,0,0,123.049,171.171Z"
                  transform="translate(-75.892 -151.734)"
                ></path>
              </g>
            </svg>
          </span>
          <div className="user-info__text">
            <div className="user-info__text__title">Mateus Souza</div>
            <div className="user-info__text__subtitle">
              mateus.souza@mail.com
            </div>
          </div>
        </div>
      </div>
      <div className="table-card__item table-card__item-2">
        08:28 PM
        {/* <!-- <div className="table-card__item__media">
                            <div className="table-card__item__media__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="56.783" height="56.783" viewBox="0 0 56.783 56.783"><g transform="translate(0)"><path fill="#4caf50" d="M28.4,56.783a28.141,28.141,0,0,1-15.628-4.7l-10.911,3.5L5.4,45.029A28.065,28.065,0,0,1,0,28.394,28.391,28.391,0,1,1,28.4,56.783ZM17.7,12.976A4.139,4.139,0,0,0,14.795,14l-.082.084a9.083,9.083,0,0,0-2.826,6.826c0,2.533,1.18,5.549,3.323,8.492l.05.069c.03.039.084.117.162.23l.016.024c4.029,5.827,8.988,10.173,13.962,12.236,3.836,1.586,6.483,2.325,8.33,2.325a7.648,7.648,0,0,0,1.62-.184c2.206-.475,4.891-2.1,5.565-4.006a7.118,7.118,0,0,0,.491-3.961c-.156-.268-.524-.445-1.082-.713l-.041-.019c-.144-.069-.3-.144-.467-.228-.614-.307-4.864-2.408-5.652-2.688a2.087,2.087,0,0,0-.715-.139,1.6,1.6,0,0,0-1.329.762l-.262.369a28.611,28.611,0,0,1-1.956,2.57,1.578,1.578,0,0,1-1.176.479,2.134,2.134,0,0,1-.817-.167l-.211-.085a20.856,20.856,0,0,1-6.448-4.019,25.438,25.438,0,0,1-4.6-5.724c-.479-.813-.08-1.28.305-1.732l.027-.031c.265-.338.52-.61.791-.9.15-.159.294-.312.441-.477l.046-.052a4.6,4.6,0,0,0,.874-1.246,1.74,1.74,0,0,0-.123-1.544c-.138-.289-.974-2.32-1.712-4.112l-.013-.032-.125-.3c-.271-.658-.519-1.261-.7-1.695-.552-1.3-.953-1.364-1.809-1.4-.094,0-.191-.008-.291-.014C18.157,12.987,17.939,12.976,17.7,12.976Z"/></g></svg>
                            </div>
                            <div className="table-card__item__media__text">
                                Whatsapp
                            </div>
                        </div> --> */}
      </div>
      <div className="table-card__item table-card__item-3">Vendas</div>
      <div className="table-card__item table-card__item-4">01:43:52</div>

      <div className="table-card__item table-card__item-5">Vendas</div>
      <div className="table-card__item table-card__item-6">01:43:52</div>
      <div className="table-card__item table-card__item-7">Fila</div>
      <div className="table-card__item table-card__item-8">01:43:52</div>
    </a>
  );
};

export default DashboardDetailTabBItem;
