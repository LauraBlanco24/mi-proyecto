import React from "react";
import "./styles.css";

const Header: React.FC = () => {
  return (
    <header>
    <div className="inner">
      <div className="logo"><img src="https://static.vecteezy.com/system/resources/previews/002/521/436/non_2x/growth-plant-soil-nature-drawing-free-vector.jpg"/></div>
      <div className="burger"></div>
      <nav>
        <a className="active"href="#">¿Quienes somos?</a>
        <a href="#">Nuestros productos</a>
        <a href="#">Crear cuenta</a>
      </nav>
      <a href="#" className="donate-link">Iniciar sesión</a>
    </div>
  </header>
  );
};

export default Header;
