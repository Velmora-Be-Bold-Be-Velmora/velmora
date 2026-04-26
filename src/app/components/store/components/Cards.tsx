import classes from './Style.module.css';
export default function Cards({ title, description, image, offer }: { title: string; description: string; image: string; offer?: string }) {
  return (
    <div className={classes.cards}>
      <img src={image} alt={title} className={classes.cardImage} />
      <div className={classes.cardContent}>
        <h3 className={classes.cardTitle}>{title}</h3>
        {offer ? <h2 className={classes.cardOffer}>{offer}</h2> : null}
        <p className={classes.cardDescription}>{description}</p>
      </div>
    </div>
  );
}