import IconEllipsis from "../assets/icon-ellipsis.svg";
import IconWork from "../assets/icon-work.svg";

export type Categories = "Work" | "Play" | "Study" | "Exercise" | "Social" | "Self Care";
export type TimeFrames = "daily" | "weekly" | "monthly";

interface CardProps {
  category: Categories;
  timeFrame: TimeFrames;
  current: number;
  previous: number;
}

function Card() {
  return (
    <article>
      <div>
        <IconWork />
      </div>
      <div>
        <h2>Work</h2>
        <button>
          <span>Open menu</span>
          <IconEllipsis />
        </button>
      </div>
      <div>
        <h3>32hrs</h3>
        <p>Last Week - 36hrs</p>
      </div>
    </article>
  );
}

export default Card;
