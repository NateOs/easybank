import { articles } from "../data";

export default function ArticleItem() {
  return (
    <section className="grid">
      {articles.map((articleItem) => {
        const { id, imgSrc, author, title, text, alt } = articleItem;
        return (
          <div key={id} className="card">
            <div className="card__head">
              <img className="card__image" src={imgSrc} alt={alt} />
            </div>
            <div className="card__body">
              <small>{author}</small>
              <h5 className="card__text-title">{title}</h5>
              <p className="card__text-subitle">{text}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
