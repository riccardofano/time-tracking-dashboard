import "./Card.scss";

import { Categories, Timeframes } from "../App";
import IconEllipsis from "../assets/icon-ellipsis.svg";

interface CardProps {
  category: Categories;
  timeframe: Timeframes;
  previous: number;
  current: number;
}

const dictonary: { [key in Timeframes]: string } = {
  daily: "Day",
  weekly: "Week",
  monthly: "Month",
};

const categoryIcon: { [key in Categories]: string } = {
  Work: "work",
  Play: "play",
  Study: "study",
  Exercise: "exercise",
  Social: "social",
  "Self Care": "self-care",
};

function Card({ category, timeframe, previous, current }: CardProps) {
  return (
    <article>
      <div className="card-lip | backdrop | br-md" data-backdrop="after" data-lip={category}>
        <img src={`/icon-${categoryIcon[category]}.svg`} alt="" />
      </div>
      <div className="p-400 bg-blue-dark br-md">
        <div className="flex flex-sb">
          <h2 className="fs-h2">{category}</h2>
          <button>
            <span className="visually-hidden">Open menu</span>
            <IconEllipsis />
          </button>
        </div>
        <div className="card-info | flex">
          <h3 className="fs-h3 fw-light">{current}hrs</h3>
          <p className="text-neutral-300">
            Last {dictonary[timeframe]} - {previous}hrs
          </p>
        </div>
      </div>
    </article>
  );
}

export default Card;
