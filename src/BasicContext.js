import { createContext, useContext } from 'react';

const createContextTEST = createContext();

function Comp1() {
  const testData = "BasicContextData";
  
  return (
    <>
      <h1>Component 1</h1>
      <createContextTEST.Provider value={testData}>
        <Comp2></Comp2>
      </createContextTEST.Provider>      
    </>
  );
}

function Comp2() {
  return (
    <>
      <h1>Component 2</h1>
      <Comp3></Comp3>
    </>
  );
}

function Comp3() {
  const data = useContext(createContextTEST);
  return (
    <>
      <h1>Component 3 {data}</h1>
    </>
  );
}

export default Comp1;
