import { feature } from "../data";

export default function FeatureItem() {
  return (
    <section className="grid">
      {feature.map((featureItem) => {
        const { id, iconSrc, title, text } = featureItem;
        return (
          <div className="feature-item" key={id}>
            <img src={iconSrc} alt="" />
            <h2 className="fw-light">{title}</h2>
            <p className="feature__subtitle">{text}</p>
          </div>
        );
      })}
    </section>
  );
}
