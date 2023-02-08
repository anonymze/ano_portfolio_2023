import "./Card.css";

const Card = ({
  title,
  description,
  img,
  technologies,
  link,
  svgName,
  ...props
}: any) => {
  return (
    <article onClick={() => link && open(link)} className={`card transition-transform ${link ? 'cursor-pointer hover:scale-[1.01]' : ''}`}>
      <img src={img ? img : svgName ? `/icons/${svgName}.svg` : ''} alt="Image projet exterieur" />
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
