import { createContext } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/NavBar";

export const CounterContext = createContext(0);

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
