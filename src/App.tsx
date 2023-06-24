import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro tenetur
        facilis tempore eligendi dolorem saepe repellendus, perspiciatis ducimus
        blanditiis assumenda, officia dolor totam. Veritatis veniam nobis unde
        iusto est tempore!
      </p>
    </>
  );
}

export default App;
