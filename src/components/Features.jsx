import { feature } from "../data";

export default function Features() {
  return (
    <div className="features">
      <div className="features__text">
        <h1 className="text__title">Why choose Easybank?</h1>
        <p className="features__subtitle text__subtitle">
          {" "}
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      {feature.map((featureItem) => {
        const { id, iconSrc, title, text } = featureItem;
        return (
          <div key={id}>
            <img src={iconSrc} alt="" />
            <h2 className="fw-light">{title}</h2>
            <p className="text__subtitle">{text}</p>
          </div>
        );
      })}
    </div>
  );
}
