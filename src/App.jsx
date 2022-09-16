import { Outlet } from "react-router-dom";

import Navbar from "./components/NavBar";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />

      <Outlet />
    </div>
  );
}

export default App;
