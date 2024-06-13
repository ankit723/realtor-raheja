import Home from "./components/home";
import Navbar from "./components/navbar";
import './App.css'

function App() {
  return (
    <div className="App">
      <main className="px-5 xl:px-96">
        <Navbar />
        <Home />
      </main>
    </div>
  );
}

export default App;
