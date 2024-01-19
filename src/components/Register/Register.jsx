import { useState } from "react";
import validation from "../../utils/validation";
import style from "./Register.module.scss";
import imagen from "../../../public/assets/pngegg.png";

const Register = ({ register }) => {
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
    register(userData);
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
          <button type="submit" className={style.submit}>
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
