import style from "./Error.module.scss";

const Error = () => {
  return (
    <div className={style.error}>
      <div>
        <img src="../../../assets/error.jpg" alt="error 404" />
      </div>
    </div>
  );
};

export default Error;
