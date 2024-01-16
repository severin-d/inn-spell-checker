import "./App.css";
import spellCheckerService from "./spellCheckerService";

// spellCheckerService("thiss thiss is intresting").then(console.log);

function App() {
  return (
    <div className="App">
      <form>
        <div>
          <textarea rows={10} cols={50} />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
