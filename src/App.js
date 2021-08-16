import "./App.css";

import Header from "./components/Header";
import DisplayAlgo from "./components/DisplayAlgo";
import DisplayAlgoLine from "./components/DisplayAlgoLine";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  const numRow = Math.floor(window.innerWidth / 11);
  const [runningAlgorithm, setRunningAlgorithm] = useState(false);
  const [rows, setRows] = useState([]);
  const [arrayAccessCounter, setArrayAccessCounter] = useState(0);
  const [comparisonCounter, setComparisonCounter] = useState(0);
  //_____________________Functions________________________________________

  //randomize graph
  const randomize = () => {
    const tempArr = [];
    for (var i = 0; i < numRow; i++) {
      tempArr.push({
        height: Math.floor(Math.random() * 500),
        id: i,
      });
    }
    setRows((rows) => tempArr);
  };

  //setStates running program
  const changeRunningAlgorithm = (running) => {
    if (running) {
      setRunningAlgorithm(true);
    } else {
      setRunningAlgorithm(false);
    }
  };

  //____________________Sorters_start___________________________________

  const bubbleSort = () => {
    let tempArr = [...rows];
    let tempNum = 0;
    let tempArrCount = 0;

    changeRunningAlgorithm(true);

    var innerLoop = () => {
      //inner loop
      for (let y = 1; y < numRow; y++) {
        if (tempArr[y].height < tempArr[y - 1].height) {
          //swap if height is bigger
          let copy = [...tempArr];
          [copy[y - 1], copy[y]] = [copy[y], copy[y - 1]];
          tempArr = copy;
          tempArrCount++;
        }
        tempNum++;
        tempArrCount = tempArrCount + 2;
      }
      //add to States
      setRows(tempArr);
      setComparisonCounter(tempNum);
      setArrayAccessCounter(tempArrCount);
    };

    //outer loop
    for (let i = 0; i < numRow; i++) {
      setTimeout(innerLoop, 50 * i);
      setTimeout(() => {
        changeRunningAlgorithm(false);
      }, 50 * numRow);
    }
  };

  const selectionSort = () => {
    let tempNumCount = 0;
    let tempArrCount = 0;
    let tempArr = [...rows];
    let minVal = 0;
    let x = 0;

    changeRunningAlgorithm(true); //disable button

    var innerLoop = () => {
      minVal = x;

      for (let i = 1 + x; i < numRow; i++) {
        if (tempArr[i].height < tempArr[minVal].height) {
          minVal = i;
        }
        tempArrCount = tempArrCount + 2;
        tempNumCount++;
      }

      //swapping array positions
      let data = [...tempArr];
      let temp = [data[x]];
      [data[x]] = [data[minVal]];
      [data[minVal]] = temp;
      tempArr = data;

      //adding new states to DOM
      tempArrCount = tempArrCount + 3;
      setRows(tempArr);
      setArrayAccessCounter(tempArrCount);
      setComparisonCounter(tempNumCount);
      x++;
    };

    //outerloop
    for (let y = 0; y < numRow; y++) {
      setTimeout(innerLoop, 50 * y);
      setTimeout(() => {
        changeRunningAlgorithm(false);
      }, 50 * numRow);
    }
  };
  //______________________Sorters_End______________________________

  return (
    <div className='App'>
      <Header />
      <DisplayAlgo rows={rows} />
      <Footer
        sort={runningAlgorithm ? undefined : randomize}
        bubbleSort={runningAlgorithm ? undefined : bubbleSort}
        selectionSort={runningAlgorithm ? undefined : selectionSort}
        displayNum={comparisonCounter}
        displayArrayCount={arrayAccessCounter}
      />
    </div>
  );
}

export default App;
