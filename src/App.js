import "./App.css";
import Header from "./components/Header";
import Data from "./components/Data";
import Body from "./components/Body";

function App() {
  console.log(Data);
  const dataList = Data.map((items) => {
    return (
      <Body
       {...items}
      />
    );
  });
  return (
    <div className="App">
      <Header />
      {dataList}
    </div>
  );
}

export default App;
