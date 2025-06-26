import { Link } from "react-router-dom";

export const Navbar = ({ heading }) => {
  return (
    <div className="w-full px-6 py-4 flex justify-between items-center bg-white shadow-md">
      <h5 className="text-3xl font-semibold text-purple-700">{heading}</h5>
      <div className="flex gap-4">
        <Link
          to={"/Transaction"}
          className={
            window.location.pathname === "/Transaction"
              ? "text-white bg-purple-900 px-4 py-2 rounded transition"
              : "text-white bg-purple-700 hover:bg-purple-900 px-4 py-2 rounded transition"
          }
        >
          {"Transaction"}
        </Link>
        <Link
          to={"/"}
          className={
            window.location.pathname === "/"
              ? "text-white px-4 py-2 rounded bg-purple-900 transition"
              : "bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-900 transition"
          }
        >
          {"Login"}
        </Link>
        <Link
          to={"/signup"}
          className={
            window.location.pathname === "/signup"
              ? "text-white px-4 py-2 rounded bg-purple-900 transition"
              : "bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-900 transition"
          }
        >
          {"Signup"}
        </Link>
      </div>
    </div>
  );
};

export const Sidebar = () => {
  const namepages = [
    { name: "Dashboard", path: "/dashbord" },
    { name: "Income", path: "/income" },
    { name: "Expenses", path: "/expenses" },
    { name: "EMI", path: "/emi" },
    { name: "Savings", path: "/Savings" },
    { name: "Investments", path: "/investments" },
    { name: "Budget Planner", path: "/budget-planner" },
    { name: "Purchase Plans", path: "/purchase-plans" },
    { name: "Reports", path: "/reports" },
  ];

  return (
    <div className="w-full max-w-[254px] bg-white p-6 shadow-xl h-full">
      <h4 className="text-2xl font-bold text-purple-900 mb-2">FinanSync</h4>
      <p className="mb-2 text-gray-600 " style={{ fontSize: "14px" }}>
        Personal Finance Manager
      </p>
      <hr className="text-gray-400" />
      <ul className="space-y-2">
        {namepages.map((page, index) => (
          <li key={index}>
            <Link
              to={page.path}
              className={
                page.path === window.location.pathname
                  ? "text-white bg-purple-800 my-3 px-4 py-2 rounded transition block text-left"
                  : "text-black hover:bg-purple-400 my-3 px-4 py-2 rounded transition block text-left"
              }
            >
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
