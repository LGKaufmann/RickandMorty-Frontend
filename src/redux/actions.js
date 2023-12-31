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
const endpoint = "rickandmorty-_backend.railway.internal/fav";

export const addFav = (character) => {
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
  const endpoint = "rickandmorty-_backend.railway.internal/fav";
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
  const endpoint = "rickandmorty-_backend.railway.internal/fav/" + id;
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
    fetch(`rickandmorty-_backend.railway.internal/rickandmorty/character/${id}`)
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
