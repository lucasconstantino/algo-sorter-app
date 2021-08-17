import DisplayAlgoLine from "./DisplayAlgoLine";
import React from "react";

const DisplayAlgo = ({ rows }) => {
  //console.log(rows);

  return (
    <div className='DisplayAlgo'>
      {rows.map((row) => (
        <DisplayAlgoLine key={row.id} height={row.height}>
          {row.height}
        </DisplayAlgoLine>
      ))}
    </div>
  );
};
export default DisplayAlgo;
