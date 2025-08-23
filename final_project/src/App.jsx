import Footer from "./components/Footer";
import Header from "./components/Header";
import AllRoutes from "./routes/AllRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className=" bg-gray-100 px-4 sm:px-6 lg:px-26 m-0 p-0">
          <Header />
        </div>

        <AllRoutes />

        <div className=" bg-white px-4 sm:px-6 lg:px-26 m-0 p-0">
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
