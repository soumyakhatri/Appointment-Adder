import React from "react";
import {Tile} from '../tile/Tile'

export const TileList = (props) => {
  
  const{arr} = props;
  const arrOfObjects = arr;

  return (
    <div>
      {/* Array contains three objects there for there will be three 'Tiles' */}
      {arrOfObjects.map((item, index) => <Tile key={index} obj={item}/>)}   
    </div>
  );
};
