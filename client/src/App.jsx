import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex flex-col justify-between min-h-[100vh]">
        <AppRouter />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
