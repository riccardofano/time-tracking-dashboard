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
    <main>
      <div>
        <div>
          <img src="/image-jeremy.png" alt="" />
          <h1>
            <span>Report for</span>
            Jeremy Robson
          </h1>
        </div>
        <div>
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
