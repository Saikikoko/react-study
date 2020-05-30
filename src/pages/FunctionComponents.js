import React, { useEffect, useState } from "react";

function FunctionComponents(props) {
  
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    console.log("object :>> ");
    const timer = setInterval(() => {
        setDate(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])
  return (
    <div>
      <h3>FunctionComponents</h3>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  );
}

export default FunctionComponents;
