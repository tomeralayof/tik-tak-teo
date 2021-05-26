import React from "react";
import { UseTable } from "../hooks/tableHook";
import { useClick } from "../hooks/clickHook";

const Table = () => {
  const { table, setTable } = UseTable();
  const { isClicked, setIsClicked } = useClick();

  const play = (val) => {
    const newTable = [...table];
    for (let i = 0; i < newTable.length; i++) {
      if (newTable[i].id === val && !isClicked) {
        newTable[i].value = "X";
        setIsClicked(true);
      }

      if (newTable[i].id === val && isClicked) {
        newTable[i].value = "O";
        setIsClicked(false);
      }
    }

    if (
      newTable[0].value === "X" &&
      newTable[3].value === "X" &&
      newTable[6].value === "X"
    ) {
      console.log("X win...");
    }

    if (
      newTable[0].value === "O" &&
      newTable[3].value === "O" &&
      newTable[6].value === "O"
    ) {
      console.log("O win");
    }

    //same condition for indexes 0 , 4 , 8... etc
    setTable(newTable);
  };

  return (
    <div className="table-container">
      <table className="parent">
        {table.map((val) => {
          return (
            <td
              key={val.id}
              onClick={() => play(val.id)}
              style={{
                borderBottom: "3px solid black",
                width: "50px",
                height: "50px",
              }}
            >
              {val.value}
            </td>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
