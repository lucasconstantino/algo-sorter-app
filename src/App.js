import "./App.css";

import Header from "./components/Header";
import DisplayAlgo from "./components/DisplayAlgo";
import DisplayAlgoLine from "./components/DisplayAlgoLine";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  const width = window.innerWidth;
  const numRow = Math.floor(width / 10);

  const [rows, setRows] = useState([]);
  let copy = [];

  const sort = () => {
    const tempArr = [];
    for (var i = 0; i < numRow; i++) {
      tempArr.push({
        height: Math.floor(Math.random() * 500),
        id: i,
      });
    }

    setRows((rows) => tempArr);
  };

  const bubbleSort = () => {
    let tempArr = [...rows];
    let i = 0;

    var innerLoop = () => {
      for (let y = 1; y < numRow; y++) {
        //inner loop
        if (tempArr[y].height < tempArr[y - 1].height) {
          //swap if height is bigger
          copy = [...tempArr];
          [copy[y - 1], copy[y]] = [copy[y], copy[y - 1]];
          tempArr = copy;
        }
      }
      setRows(tempArr); //add to State
    };

    //outer loop
    for (i = 0; i < numRow; i++) {
      setTimeout(innerLoop, 50 * i);
    }
  };
  /*useEffect(() => {
    //console.log("changed");
  }, [rows]);*/

  return (
    <div className='App'>
      <Header />
      <DisplayAlgo rows={rows} />
      <Footer sort={sort} bubbleSort={bubbleSort} />
    </div>
  );
}

export default App;
