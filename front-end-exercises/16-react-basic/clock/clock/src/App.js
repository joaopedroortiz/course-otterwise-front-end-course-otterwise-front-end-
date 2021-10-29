import { useState, useEffect } from "react";

function App() {
  let date = new Date().toLocaleTimeString();
  const [state, setState] = useState(date);

  useEffect(() => {
    const timer = setInterval(() => {
      setState(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>{state}</h1>
    </div>
  );
}

export default App;
