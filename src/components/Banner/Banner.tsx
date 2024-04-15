import React from "react";
import "./styles.css";

const Banner: React.FC = () => {
  return (
    <div className="responsive-container-block bigContainer">
      <div className="responsive-container-block Container bottomContainer">
        <div className="ultimateImg">
          <img
            className="mainImg"
            src="https://cdn2.excelsior.com.mx/830x623/filters:format(jpg):quality(75)/media/pictures/2024/02/03/3069965.jpg"
          />
          <div className="purpleBox">
            <p className="purpleText">
              Tu planta se comunica contigo a través de Planty, contandote sus necesidades y emociones.
            </p>
            <img
              className="stars"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/mp5.svg"
            />
          </div>
        </div>
        <div className="allText bottomText">
          <p className="text-blk headingText">PLANTY</p>
          <p className="text-blk subHeadingText">
          Transforma tu hogar en un oasis verde con nuestro sistema inteligente de riego, cuidando cada planta con precisión y amor.
          </p>
          <p className="text-blk description">
          Con Planty, no solo estarás cultivando plantas, estarás cultivando una conexión más profunda con la naturaleza. Nuestra tecnología innovadora te permite disfrutar de un jardín exuberante y vibrante, mientras cuidamos cada detalle por ti. Descubre la magia de un espacio verde que florece con vida y energía, todo con la facilidad y comodidad que mereces.
          </p>
          <a className="explore">Ver productos</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
