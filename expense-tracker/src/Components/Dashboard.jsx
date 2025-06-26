import Navbar, { Sidebar } from "./Navbar";

const Chart = () => {
  return (
    <div className="mt-6">
      <h5 className="text-xl font-semibold mb-3">Income vs Expenses</h5>
      <div className="h-80 bg-white border rounded flex items-center justify-center shadow-2xl text-gray-500">
        Chart Area (Static)
      </div>
    </div>
  );
};

const SummaryCard = () => {
  return (
    <div className="w-full p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* Total Income */}
        <div className="border border-green-600 bg-green-100 p-4 rounded shadow">
          <h6 className="text-lg font-medium text-gray-700">Total Income</h6>
          <h4 className="text-2xl font-bold text-gray-800">₹0</h4>
          <small className="text-green-600 text-sm">↑ 0% vs last month</small>
        </div>

        {/* Total Expenses */}
        <div className="border border-red-500 bg-red-100 p-4 rounded shadow">
          <h6 className="text-lg font-medium text-gray-700">Total Expenses</h6>
          <h4 className="text-2xl font-bold text-gray-800">₹0</h4>
          <small className="text-red-600 text-sm">↑ 0% vs last month</small>
        </div>

        {/* Active EMIs */}
        <div className="border border-purple-500 bg-purple-100 p-4 rounded shadow">
          <h6 className="text-lg font-medium text-gray-700">Active EMIs</h6>
          <h4 className="text-2xl font-bold text-gray-800">₹0</h4>
          <small className="text-purple-600 text-sm">0 active loans</small>
        </div>

        {/* Investments */}
        <div className="border border-pink-500 bg-pink-100 p-4 rounded shadow">
          <h6 className="text-lg font-medium text-gray-700">Investments</h6>
          <h4 className="text-2xl font-bold text-gray-800">₹0</h4>
          <small className="text-gray-500 text-sm">↔ 0.0% ROI</small>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="sticky top-0 z-10 bg-white shadow">
          <Navbar heading="Dashboard" />
        </div>

        <main className="p-6 space-y-6">
          <SummaryCard />
          <Chart />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
