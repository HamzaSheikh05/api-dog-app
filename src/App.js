import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Latest } from "./pages/Latest";
import { Contact } from "./pages/Contact";
import { InvalidRoute } from "./components/InvalidRoute";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<InvalidRoute />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
