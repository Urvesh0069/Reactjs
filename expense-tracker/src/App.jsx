import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Income from "./Components/Income";
import Expenses from "./Components/Expenses";
import Transaction from "./Components/Transaction";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Emi from "./Components/Emi";
import Savings from "./Components/Savings";
import Investments from "./Components/Investments";
import Budget_Planner from "./Components/Budget-Planner";
import Purchase_Plans from "./Components/Purchase-Plans";
import Reports from "./Components/Reports";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Transaction" element={<Transaction />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashbord" element={<Dashboard />} />
        <Route path="/income" element={<Income />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/emi" element={<Emi />} />
        <Route path="/savings" element={<Savings />} />
        <Route path="/investments" element={<Investments />} />
        <Route path="/budget-planner" element={<Budget_Planner />} />
        <Route path="/purchase-plans" element={<Purchase_Plans />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
