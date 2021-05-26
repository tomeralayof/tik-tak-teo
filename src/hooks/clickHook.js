import React, { useEffect, useState } from 'react';

const initialState = false;
const clickProvider = React.createContext({isClicked: initialState, setIsClicked: ()=>{}});
export const useClick = () => React.useContext(clickProvider);

const ClickProvider = (props) => {

  const [isClicked,setIsClicked] = useState(initialState);

    useEffect(()=>{
     setIsClicked(isClicked===!isClicked)
   },[]);

  return ( 
    <clickProvider.Provider value={{isClicked,setIsClicked}}>
      {props.children}
    </clickProvider.Provider>
   );
}
 
export default ClickProvider;