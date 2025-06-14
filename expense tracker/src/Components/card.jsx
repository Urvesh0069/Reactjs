import React from 'react'

const SummaryCard = () => {
  return (
    <div className="w-full p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* Total Income */}
        <div className="border border-green-500 bg-gray-50 p-4 rounded shadow">
          <h6 className="text-lg font-medium text-gray-700">Total Income</h6>
          <h4 className="text-2xl font-bold text-gray-800">₹0</h4>
          <small className="text-green-600 text-sm">↑ 0% vs last month</small>
        </div>

        {/* Total Expenses */}
        <div className="border border-red-500 bg-gray-50 p-4 rounded shadow">
          <h6 className="text-lg font-medium text-gray-700">Total Expenses</h6>
          <h4 className="text-2xl font-bold text-gray-800">₹0</h4>
          <small className="text-red-600 text-sm">↑ 0% vs last month</small>
        </div>

        {/* Active EMIs */}
        <div className="border border-blue-500 bg-gray-50 p-4 rounded shadow">
          <h6 className="text-lg font-medium text-gray-700">Active EMIs</h6>
          <h4 className="text-2xl font-bold text-gray-800">₹0</h4>
          <small className="text-blue-600 text-sm">0 active loans</small>
        </div>

        {/* Investments */}
        <div className="border border-pink-500 bg-gray-50 p-4 rounded shadow">
          <h6 className="text-lg font-medium text-gray-700">Investments</h6>
          <h4 className="text-2xl font-bold text-gray-800">₹0</h4>
          <small className="text-gray-500 text-sm">↔ 0.0% ROI</small>
        </div>
      </div>
    </div>
  )
}

export default SummaryCard
