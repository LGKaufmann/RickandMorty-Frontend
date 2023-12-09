import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./Detail.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCharacterDetail, cleanDetail } from "../../redux/actions";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const character = useSelector((state) => state.characterDetail);

  useEffect(() => {
    dispatch(getCharacterDetail(id));
    return () => {
      dispatch(cleanDetail());
    };
  }, [id]);

  return (
    <div className={style.detail}>
      {character.name ? (
        <>
          <div className={style.detail2}>
            <img src={character.image} alt={character.name} />
          </div>
          <div className={style.nombres}>
            <h1>{character.name}</h1>
            <h2>STATUS | {character.status}</h2>
            <h2>SPECIES | {character.species}</h2>
            <h2>GENDER | {character.gender}</h2>
            <h2>ORIGIN | {character.origin.name}</h2>
          </div>
        </>
      ) : (
        <h1 className={style.loading}>Aguarde un momento...</h1>
      )}
    </div>
  );
};

export default Detail;
