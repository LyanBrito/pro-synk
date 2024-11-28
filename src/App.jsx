import styles from "./App.module.css";
import { Header } from "./components";
import { Home } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  )
}