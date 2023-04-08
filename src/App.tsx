import React from 'react';
import Answers from "./components/answers/answers";
import Questions from "./components/questions/questions";

function App() {
  return (
    <div dir="rtl" className="container">
      <Answers/>
        <Questions/>
    </div>
  );
}

export default App;
