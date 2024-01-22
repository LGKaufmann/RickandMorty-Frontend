import {
  ADD_FAV,
  REMOVE_FAV,
  GET_CHARACTER_DETAIL,
  CLEAN_DETAIL,
  FILTER,
  ORDER,
  GET_FAV,
} from "./action-types";
import axios from "axios";

export const addFav = (character) => {
  const endpoint =
    "https://rickandmorty-backend-production-4a2c.up.railway.app/rickandmorty/fav/";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getFav = () => {
  const endpoint =
    "https://rickandmorty-backend-production-4a2c.up.railway.app/rickandmorty/fav/";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      return dispatch({
        type: GET_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeFav = (id) => {
  const endpoint =
    "https://rickandmorty-backend-production-4a2c.up.railway.app/rickandmorty/fav/" +
    id;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCharacterDetail = (id) => {
  return function (dispatch) {
    fetch(
      `https://rickandmorty-backend-production-4a2c.up.railway.app/rickandmorty/character/${id}`
    )
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_CHARACTER_DETAIL, payload: data }));
  };
};

export const cleanDetail = () => {
  return {
    type: CLEAN_DETAIL,
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (orden) => {
  return {
    type: ORDER,
    payload: orden,
  };
};
