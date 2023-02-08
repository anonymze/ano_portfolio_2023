import "./Card.css";

const Card = ({
  title,
  description,
  img,
  technologies,
  link,
  ...props
}: any) => {
  return (
    <article onClick={() => open(link)} className="card transition-transform hover:scale-[1.01]">
      <img src={img} alt="Image projet exterieur" />
      <h2>{title}</h2>
      <p>{description}</p>
      {technologies && (
        <span
          className="italic text-sm"
          dangerouslySetInnerHTML={{ __html: technologies }}
        ></span>
      )}
    </article>
  );
};

export default Card;
