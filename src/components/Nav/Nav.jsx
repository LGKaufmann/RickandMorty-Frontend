import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.scss";

const Nav = (props) => {
  return (
    <div className={style.navContainer}>
      <div className={style.divLogo}>
        <Link to="/home">
          <img src="../assets/pngegg.png" alt="logo" className={style.logo} />
        </Link>
      </div>

      <div className={style.secondSection}>
        <div className={style.wrapperItems}>
          <Link to="/favorites">
            <button className={style.botones}>Favorites</button>
          </Link>
          <button onClick={props.logOut} className={style.botones}>
            LogOut
          </button>
          <Link to="/about" className={style.linknav}>
            <span className={style.itemnav}>About</span>
          </Link>
        </div>
        <SearchBar
          onSearch={props.onSearch}
          getRandomCharacterId={props.getRandomCharacterId}
        />
      </div>
    </div>
  );
};

export default Nav;
