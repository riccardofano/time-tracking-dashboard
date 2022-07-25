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
      <div>
        <img src={`/icon-${categoryIcon[category]}.svg`} alt="" />
      </div>
      <div>
        <h2>{category}</h2>
        <button>
          <span>Open menu</span>
          <IconEllipsis />
        </button>
      </div>
      <div>
        <h3>{current}hrs</h3>
        <p>
          Last {dictonary[timeframe]} - {previous}hrs
        </p>
      </div>
    </article>
  );
}

export default Card;
