import "./App.scss";

import Card from "./components/Card";

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

      <Card />
    </main>
  );
}

export default App;
