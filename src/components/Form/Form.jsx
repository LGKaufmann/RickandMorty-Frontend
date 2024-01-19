import { useState } from "react";
import validation from "../../utils/validation";
import style from "./Form.module.scss";
import { Link } from "react-router-dom";
import imagen from "../../../public/assets/pngegg.png";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });

    setErrors(validation({ ...userData, [property]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={style.contenedor}>
      <div className={style.login}>
        <img src={imagen} alt="logo rick and morty" className={style.avatar} />
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className={style.label}>
            Email:
          </label>
          <input
            placeholder="Ingrese su email"
            autoComplete="off"
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className={style.inputs}
          />
          <span className={style.error}>{errors.email}</span>
          <label htmlFor="password" className={style.label}>
            Password:
          </label>
          <input
            placeholder="Ingrese su password"
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            className={style.inputs}
          />
          <span className={style.error}>{errors.password}</span>
          <Link to="/register" className={style.linknav}>
            <span className={style.linkRegister}>Registrate!</span>
          </Link>
          <button type="submit" className={style.submit}>
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
