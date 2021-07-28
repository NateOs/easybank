import Button from "./Button";

export default function Hero() {
  return (
    <>
      <div className="hero__image"></div>
      <div className=" hero hero__text ">
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
    </>
  );
}
