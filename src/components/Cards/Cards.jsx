import Card from "../Card/Card";
import style from "./Cards.module.scss";

const Cards = (props) => {
  return (
    <>
      <div className={style.titulo}>
        <h1 className={style.neon}>characters</h1>
      </div>
      <div className={style.contenedor}>
        {props.characters.map((character) => {
          return (
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              origin={character.origin.name}
              image={character.image}
              onClose={props.onClose}
            />
          );
        })}
      </div>
    </>
  );
};

export default Cards;
