import { useState } from "react";
import style from "./SearchBar.module.scss";

const SearchBar = (props) => {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  function handleRandomCharacter() {
    props.getRandomCharacterId();
  }

  return (
    <div className={style.searchbar}>
      <button onClick={handleRandomCharacter} className={style.botones}>
        🎲RDM🎲
      </button>
      <div className={style.busqueda}>
        <input
          type="search"
          value={id}
          placeholder="Ingrese un ID"
          onChange={handleChange}
        />
        <button
          onClick={() => {
            props.onSearch(id);
          }}
          className={style.searchbutton}
        >
          🔍
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
