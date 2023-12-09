import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import style from "./Favorites.module.scss";
import { filterCards, getFav, orderCards } from "../../redux/actions";
import { useState, useEffect } from "react";

const Favorites = ({ myFavorites, allFavs }) => {
  const [aux, setAux] = useState(false);

  const dispatch = useDispatch();

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(true);
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  useEffect(() => {
    dispatch(getFav());
  }, []);

  return (
    <>
      <div className={style.selects}>
        <label htmlFor="ordenar" className={style.label}>
          Sort by ID:
        </label>
        <select onChange={handleOrder} className={style.select1}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <label htmlFor="ordenar" className={style.label}>
          Filter by gender:
        </label>
        <select onChange={handleFilter} className={style.select1}>
          <option value="All">All Characters</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className={style.titulo}>
        <h1 className={style.neon}>My Favorites</h1>
      </div>
      <div className={style.favoritosContainer}>
        {myFavorites?.map((character) => (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin}
            image={character.image}
          />
        ))}
      </div>
    </>
  );
};

export const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
    allFavs: state.allFavs,
  };
};

export default connect(mapStateToProps, null)(Favorites);
