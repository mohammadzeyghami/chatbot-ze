import "./App.css";
import { Chatbot } from "./components";

function App() {
  return (
    <div className="flex flex-col">
      <Chatbot status="received" />
    </div>
  );
}

export default App;
