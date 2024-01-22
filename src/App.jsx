import axios from "axios";
import { useState, useMemo } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import Register from "./components/Register/Register.jsx";

const App = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const [characters, setCharacters] = useState([]);

  useMemo(() => {
    !access && navigate("/");
  }, [access]);

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const URL =
        "https://rickandmorty-backend-production-4a2c.up.railway.app/rickandmorty/login/";
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    } catch ({ response }) {
      const { data } = response;
      alert(data.message);
    }
  };

  const register = async (userData) => {
    try {
      const URL =
        "https://rickandmorty-backend-production-4a2c.up.railway.app/rickandmorty/login/";
      const { data } = await axios.post(URL, userData);
      alert(`El usuario ${data.email} ha sido registrado correctamente!`);
      navigate("/");
    } catch ({ response }) {
      const { data } = response;
      alert(data.message);
    }
  };

  const logOut = (event) => {
    if (event.target) {
      setAccess(false);
      navigate("/");
    }
  };

  const onSearch = async (id) => {
    try {
      const { data } = await axios.get(
        `https://rickandmorty-backend-production-4a2c.up.railway.app/rickandmorty/character/${id}`
      );
      if (data.name) {
        const characterexists = characters.filter(
          (char) => char.id === data.id
        );

        if (characterexists.length === 0) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("Ya existe un personaje con ese ID!");
        }
      }
    } catch ({ response }) {
      const { data } = response;
      alert("Este personaje no existe");
    }
  };

  const getRandomCharacterId = () => {
    const totalCharacters = 826; // Reemplaza esto con la cantidad total de personajes que tienes
    const randomId = Math.floor(Math.random() * totalCharacters) + 1;
    onSearch(randomId);
  };

  const onClose = (id) => {
    const filteredCharacters = characters.filter(
      (character) => character.id !== id
    );
    setCharacters(filteredCharacters);
  };

  return (
    <div>
      {pathname !== "/" && pathname !== "/register" && (
        <Nav
          onSearch={onSearch}
          getRandomCharacterId={getRandomCharacterId}
          logOut={logOut}
        />
      )}
      <Routes>
        <Route path="/" element={<Form login={login} />} />

        <Route path="/register" element={<Register register={register} />} />

        <Route
          path="/home"
          element={<Cards onClose={onClose} characters={characters} />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/detail/:id" element={<Detail />} />

        <Route path="*" element={<Error />} />

        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
};

export default App;
