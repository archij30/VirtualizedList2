import VirtualizedList from "./VirtualizedList";
import "./styles.css";

const ITEMS = [...Array(500).keys()];
export default function App() {
  return (
    <div className="App">
      <h1>Virtualized List</h1>
      <VirtualizedList height={400} width={350} itemHeight={35} items={ITEMS} />
    </div>
  );
}
