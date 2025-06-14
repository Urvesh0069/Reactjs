import React from 'react' 

export const Navbar = ({ heading }) => {
  return (
    <div className="w-full px-6 py-4 flex justify-between items-center bg-white shadow">
      <h5 className="text-xl font-semibold text-gray-800">{heading}</h5>
      <div className="flex gap-4">
        <a href="/HTML/Transaction.html" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Transaction</a>
        <a href="/HTML/Login.html" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Login</a>
        <a href="/HTML/Sign-In.html" className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition">Sign In</a>
      </div>
    </div>
  )
}


export const Sidebar = ({ activePage }) => {
  const links = [
    { name: 'Dashboard', path: '/index.html' },
    { name: 'Income', path: '/HTML/Income.html' },
    { name: 'Expenses', path: '/HTML/Expenses.html' },
    { name: 'EMI / Loans', path: '/HTML/EMI-Loan.html' },
    { name: 'Savings', path: '/HTML/Savings.html' },
    { name: 'Investments', path: '/HTML/Investments.html' },
    { name: 'Budget Planner', path: '/HTML/Budget-Planner.html' },
    { name: 'Purchase Plans', path: '/HTML/Purchase-Plans.html' },
    { name: 'Reports', path: '/HTML/Reports.html' },
  ]

  return (
    <div className="w-full max-w-[254px] bg-white p-6 shadow h-full">
      <h4 className="text-2xl font-bold text-blue-600 mb-6">FinanSync</h4>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.path}
              className={`block px-3 py-2 rounded text-sm font-medium ${
                activePage === link.name
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
