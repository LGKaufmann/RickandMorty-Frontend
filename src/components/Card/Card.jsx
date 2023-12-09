import { Link } from "react-router-dom";
import style from "./Card.module.scss";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

const Card = ({
  onClose,
  name,
  status,
  species,
  gender,
  origin,
  image,
  id,
  addFav,
  removeFav,
  myFavorites,
}) => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === parseInt(id)) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  function handleFavorite() {
    const character = {
      id,
      name,
      status,
      species,
      gender,
      origin,
      image,
    };
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav(character);
    }
  }

  return (
    <div className={style.contenedor}>
      <div className={style.favButton}>
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
      </div>
      <h2 className={style.name}>
        {id} | {name}
      </h2>

      <button onClick={() => onClose(id)}>X</button>
      <Link to={`/detail/${id}`}>
        <img src={image} alt={name} className={style.imagen} />
      </Link>
      <div className={style.contenedor2}>
        <h2>{species}</h2>
        <h2>{gender}</h2>
      </div>
    </div>
  );
};

export const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
