import style from "./About.module.scss";

const About = () => {
  return (
    <div className={style.contenedor}>
      <div className={style.contenedor2}>
        <h1>¿Quien soy yo?</h1>
        <p>
          ¡Hola! Soy Lautaro Kaufmann, un apasionado programador web de
          Argentina. Mi objetivo principal es convertir ideas creativas en
          soluciones digitales funcionales y atractivas. Me encanta trabajar en
          proyectos desafiantes y colaborar con equipos diversos para crear
          experiencias en línea excepcionales. Mi conjunto de habilidades para
          este proyecto abarca una amplia gama de tecnologías web, incluyendo
          HTML5, CSS3, JavaScript y la libreria React.
        </p>
      </div>
      <div className={style.imagen}>
        <img src="../assets/miFoto.jpg" alt="Lautaro Kaufmann" />
      </div>
    </div>
  );
};

export default About;
