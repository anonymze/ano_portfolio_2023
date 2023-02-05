import "./Card.css";

const Card = ({
  img,
  title,
  description,
  technologies,
  ...props
}: Record<string, string>) => {
  return (
    <article {...props} className="card transition-transform hover:scale-[1.01]">
      <img src="" alt="Redirection application mobile Gemme" />
      <h2>Gemme</h2>
      <p>
        Application mobile de parcours de randonnée, la crouse est accompagnée
        de points de controle et d'un temps de marche classé parmis les autres
        participants
        <br />
        <span className="italic text-sm">
          App : Ionic Angular + Mapbox
          <br />
          Back : Symfony + React
        </span>
      </p>
    </article>
  );
};

export default Card;
