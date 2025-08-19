import Header from "./components/Header";
import AllRoutes from "./routes/AllRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div  className="min-h-screen bg-gray-900 px-4 sm:px-6 lg:px-26">
          <Header />

          <AllRoutes />

        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
