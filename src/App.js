import "./App.css";
import Dictionary from "./components/Dictionary";
function App() {
  return (
    <div className="container app">
      <header>
        <h1> Dictionary </h1>
      </header>
      <Dictionary />

      <footer className="text-center">Created by Aleksandra Sawczyszyn</footer>
    </div>
  );
}

export default App;
