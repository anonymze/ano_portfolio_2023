import "./Card.css";

interface Card {
  title: string;
  description: string;
  img?: string;
  technologies?: string;
  link?: string;
  svgName?: string;
  littleHeightCard?: boolean;  
  box?: boolean;
}

const Card = ({
  title,
  description,
  img,
  technologies,
  link,
  svgName,
  littleHeightCard,
  box = true,
  ...props
}: Card) => {
  return (
    <article
      onClick={() => link && open(link)}
      className={`card transition-transform ${!box ? 'no-box' : ''} ${littleHeightCard ? 'little-height' : ''} ${
        link ? "cursor-pointer hover:scale-[1.01]" : ""
      }`}
    >
      <img
        src={img ? `src/imgs/${img}` : svgName ? `/icons/${svgName}.svg` : ""}
        alt={`Icône ${title}`}
        className={`${svgName && 'icon'}`}
      />
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
