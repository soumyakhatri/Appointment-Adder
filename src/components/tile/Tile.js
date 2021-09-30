import React from "react";

export const Tile = (props) => {

  const { obj, index } = props;
  // Object contains three key value pairs

  const objectValuesArr = Object.values(obj);
  //Array contains values of object
  
  const p = objectValuesArr.map((value, index) => (
    <p key={index} className={index === 0 ? 'title-tile' : 'tile'}>{value}</p>
  ))

  return (
    <div className="tile-container">
      {p}
    </div>
  );
};
