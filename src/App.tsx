import "./App.scss";
import json from "./data.json";

import Card from "./components/Card";
import { useEffect, useState } from "react";

export type Timeframes = "daily" | "weekly" | "monthly";
export type Categories = "Work" | "Play" | "Study" | "Exercise" | "Social" | "Self Care";

interface CardData {
  title: Categories;
  timeframes: {
    [key in Timeframes]: {
      current: number;
      previous: number;
    };
  };
}

function App() {
  const [data, setData] = useState<CardData[]>();
  const [timeframe, setTimeframe] = useState<Timeframes>("daily");

  useEffect(() => {
    setData(json as CardData[]);
  }, []);

  const isActive = (t: Timeframes): boolean => {
    return timeframe === t;
  };

  return (
    <main className="container grid">
      <div>
        <div className="flex p-400 bg-blue-light br-md">
          <img src="/image-jeremy.png" alt="" />
          <h1 className="fs-h1 fw-light">
            <span className="block text-neutral-300 fs-regular">Report for</span>
            Jeremy Robson
          </h1>
        </div>

        <div className="backdrop | p-400 flex flex-sb bg-blue-dark text-neutral-300 br-md" data-backdrop="before">
          <button onClick={() => setTimeframe("daily")} data-active={isActive("daily")}>
            Daily
          </button>
          <button onClick={() => setTimeframe("weekly")} data-active={isActive("weekly")}>
            Weekly
          </button>
          <button onClick={() => setTimeframe("monthly")} data-active={isActive("monthly")}>
            Monthly
          </button>
        </div>
      </div>

      {data?.map(({ title, timeframes }) => (
        <Card
          key={title}
          category={title}
          timeframe={timeframe}
          previous={timeframes[timeframe].previous}
          current={timeframes[timeframe].current}
        />
      ))}
    </main>
  );
}

export default App;
