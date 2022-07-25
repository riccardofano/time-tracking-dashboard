import "./App.scss";

import IconEllipses from "./assets/icon-ellipsis.svg";
import IconWork from "./assets/icon-work.svg";

function App() {
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
          <p>Daily</p>
          <p>Weekly</p>
          <p>Monthly</p>
        </div>
      </div>

      <article>
        <div>
          <IconWork />
        </div>
        <div>
          <h2>Work</h2>
          <button>
            <span>Open menu</span>
            <IconEllipses />
          </button>
        </div>
        <div>
          <h3>32hrs</h3>
          <p>Last Week - 36hrs</p>
        </div>
      </article>
    </main>
  );
}

export default App;
