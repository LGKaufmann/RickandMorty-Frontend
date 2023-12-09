import {
  ADD_FAV,
  CLEAN_DETAIL,
  FILTER,
  GET_CHARACTER_DETAIL,
  GET_FAV,
  ORDER,
  REMOVE_FAV,
} from "./action-types";

const initialState = {
  myFavorites: [],
  characterDetail: {},
  allCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return { ...state, myFavorites: payload, allCharacters: payload };

    case GET_FAV:
      return { ...state, myFavorites: payload, allCharacters: payload };

    case REMOVE_FAV:
      return { ...state, myFavorites: payload };

    case GET_CHARACTER_DETAIL:
      return {
        ...state,
        characterDetail: payload,
      };

    case CLEAN_DETAIL:
      return {
        ...state,
        characterDetail: {},
      };

    case FILTER:
      let estado = [...state.allCharacters];
      if (payload === "All") {
        return {
          ...state,
          myFavorites: estado,
        };
      }
      let filtered = estado.filter((character) => {
        return character.gender === payload;
      });
      return {
        ...state,
        myFavorites: filtered,
      };

    case ORDER:
      const orderedCharacters = [...state.allCharacters];
      return {
        ...state,
        myFavorites: orderedCharacters.sort((a, b) => {
          if (payload === "A") {
            return a.id - b.id;
          } else if (payload === "D") {
            return b.id - a.id;
          } else {
            return 0;
          }
        }),
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
