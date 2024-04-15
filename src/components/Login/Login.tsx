import React, { useState } from "react";
import "./styles.css";

const Login: React.FC = () => {
  // Estados para el nombre de usuario y la contraseña
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Función para manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para autenticar al usuario
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="Login">
        <div className="container" id="container">
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Crear una cuenta</h1>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Registrarse</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Iniciar sesión</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">¿Olvidaste tu contraseña?</a>
          <button>Ingresar</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Bienvenido de vuelta</h1>
            <p>
                Para seguir conectado con nosotros, por favor inicie sesión con su información personal
            </p>
            <button className="ghost" id="signIn">
            Iniciar sesión
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hola!</h1>
            <p>Ingresa tus datos personales y comienza tu viaje con nosotros</p>
            <button className="ghost" id="signUp">
            Registrarse
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Login;
