// icon imports
import apilogo from "./images/icon-api.svg";
import budgeting from "./images/icon-budgeting.svg";
import onboarding from "./images/icon-onboarding.svg";
import online from "./images/icon-online.svg";

// img imports
import confetti from "./images/image-confetti.jpg";
import currency from "./images/image-currency.jpg";
import restaurant from "./images/image-restaurant.jpg";
import plane from "./images/image-plane.jpg";

// Features
const features = [
  {
    id: 1,
    iconSrc: online,
    title: "Online Banking",
    text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    id: 2,
    iconSrc: budgeting,
    title: "Simple Budgeting",
    text: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
  },
  {
    id: 3,
    iconSrc: onboarding,
    title: "Fast Onboarding",
    text: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    id: 4,
    iconSrc: apilogo,
    title: "Fast Onboarding",
    text: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
];

// Articles

const articles = [
  {
    id: 1,
    imgSrc: currency,
    author: "By Claire Robinson",
    title: "Online Banking",
    text: "Receive money in any currency with no fees The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
  },
  {
    id: 2,
    imgSrc: restaurant,
    author: "By Wilson Hutton",
    title: "Treat yourself without worrying about money",
    text: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
  },
  {
    id: 3,
    imgSrc: plane,
    author: "By Wilson Hutton",
    title: "Take your Easybank card wherever you go ",
    text: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
  },
  {
    id: 4,
    imgSrc: confetti,
    author: "By Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    text: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ... ",
  },
];
export { features, articles };