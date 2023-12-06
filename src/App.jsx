import Background from "./component/Background";
import Cards from "./component/Cards";
import Foreground from "./component/Foreground";
function App() {
  return (
    <div className="overflow-hidden">
      <Cards />
      <Foreground />
      <Background />
    </div>
  );
}

export default App;
