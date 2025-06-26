import Navbar, { Sidebar } from "./Navbar";

export const Surch = () => {
  return (
        <>
           <input
          type="text"
          placeholder="Search income entries..."
          className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        </>
  )
}

export const Filter = () => {
  return (
    <>
          <select
          className="w-full md:w-52 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          // onChange={}
        >
          <option>All Types</option>
          <option value="salary">Salary</option>
          <option value="freelance">Freelance</option>
          <option value="investment">Investment</option>
        </select>
    </>
  )
};

export const IncomeTableUI = () => {
  return (
    <div className="p-6 bg-white rounded shadow-2xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-semibold">Income Entries</h2>
          <p className="text-sm text-gray-500">
            Manage your income sources and view your earnings history
          </p>
        </div>
        <button className="flex items-center gap-2 bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800">
          <span className="text-lg">＋</span> Add Income
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-4">
      {/* Filter Section */}
      <Surch />
      <Filter />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-green-100">
            <tr className="text-gray-700">
              <th className="p-3">Date</th>
              <th className="p-3">Description</th>
              <th className="p-3">Type</th>
              <th className="p-3">Recurring</th>
              <th className="p-3">Amount</th>
              <th className="p-3 text-right">...</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3">Apr 28, 2025</td>
              <td className="p-3">salary</td>
              <td className="p-3">
                <span className="bg-gray-200 text-sm px-3 py-1 rounded-full">
                  Salary
                </span>
              </td>
              <td className="p-3">
                <span className="bg-gray-200 text-sm px-3 py-1 rounded-full">
                  Recurring
                </span>
              </td>
              <td className="p-3 font-semibold">₹10,00,000</td>
              <td className="p-3 text-right">...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const IncomeSummaryCard = () => {
  return (
    <div className="w-full px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {/* Total Income */}
        <div className="border border-green-600 bg-green-100 p-5 rounded shadow summary-card">
          <h6 className="text-lg font-semibold text-gray-700">Total Income</h6>
          <h4 className="text-2xl font-bold text-gray-800">₹0</h4>
          <small className="text-green-600">This Month</small>
        </div>

        {/* Sources Count */}
        <div className="border border-red-500 bg-red-100 p-5 rounded shadow summary-card">
          <h6 className="text-lg font-semibold text-gray-700">Sources Count</h6>
          <h4 className="text-2xl font-bold text-gray-800">0</h4>
          <small className="text-red-600">Updated Weekly</small>
        </div>

        {/* Income By Type */}
        <div className="border border-purple-500 bg-purple-100 p-5 rounded shadow summary-card">
          <h6 className="text-lg font-semibold text-gray-700">
            Income By Type
          </h6>
          <h4 className="text-2xl font-bold text-gray-800">Salary</h4>
          <small className="text-purple-600 text-2xl">₹0</small>
        </div>
      </div>
    </div>
  );
};

const Income = () => {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="sticky top-0 z-10 bg-white shadow">
          <Navbar heading="Income Page" />
        </div>

        <main className="p-6 space-y-6">
          <IncomeSummaryCard />
          <IncomeTableUI />
        </main>
      </div>
    </div>
  );
};

export default Income;
