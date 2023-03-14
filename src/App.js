import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { InvalidRoute } from "./components/InvalidRoute";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <main className="bg-red-300 min-w-full">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="*" element={<InvalidRoute />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
