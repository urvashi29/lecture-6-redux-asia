import React from "react";
import Counter from "./Counter";
import CounterDec from "./CounterDec";
import PostData from "./PostData";
import UsersData from "./UsersData";

const App = () => {

  return (
    <>
      <Counter />
      <CounterDec />
      <PostData />
      <UsersData />
    </>

  );
}

export default App;



// task
// Create a array of object (employee data) in store. 
// Display its data in a componnet. Update any array element property on click of a button
// do api call and display data in UI

