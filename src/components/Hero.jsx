import Button from "./Button";
import mockups from "../images/image-mockups.png"

export default function Hero() {
  return (
    <div className="hero">
      {/* bg image */}
      <div className="hero__image">
<img className="desktop-image" src={mockups} alt="" />
      </div>
      <div className="hero__text">
        <h1 className="hero__title">Next generation digital banking</h1>
        <p className="hero__subtitle">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <div className="hero__cta">
          <Button />
        </div>
      </div>
    </div>
  );
}
