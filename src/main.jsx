import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {
  return (
    <main className="container">
      <h1>Global Pi Marketplace</h1>
      <p>Discover products, services and businesses worldwide.</p>
      <p>Powered by Pi Network</p>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
