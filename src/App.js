import "./App.css";
import { TopHeader } from "./components/TopHeader/TopHeader";
import TopPresentation from "./components/TopPresentation/TopPresentation";
import Introduction from "./components/Introduction/Introduction";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopHeader />
        <TopPresentation />
        <Introduction />
      </header>
    </div>
  );
}

export default App;
