import SummaryCard from "./Components/card"
import Chart from "./Components/chart"
import Navbar, { Sidebar } from "./Components/Nevbar"

function App() {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <Sidebar activePage="Dashboard" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="sticky top-0 z-10 bg-white-100 shadow">
          <Navbar heading="Expense Tracker" />
        </div>

        {/* Content Area */}
        <main className="p-6 space-y-6">
          <SummaryCard />
          <Chart />
        </main>
      </div>
    </div>
  )
}

export default App
