import React, { useEffect, useState } from 'react';
import gameService from "../services/gameService"; 

const initialState = [];

const localContext = React.createContext({table: initialState, setTable: ()=>{}});

export const UseTable = () => React.useContext(localContext);



const TableProvider = (props) => {
  const[table,setTable] = useState([]); 

  useEffect(()=>{
    const getTable = gameService.game();
    setTable(getTable)
  },[])

  return ( 
    <localContext.Provider value={{table,setTable}} >
      {props.children}
    </localContext.Provider>
   );
}
 
export default TableProvider;