
const InfoCard = ({ darkMode }) => {
  return (
    <div
      className={`max-w-md p-6 rounded-lg shadow-xl transition-colors duration-300 ${
        darkMode
          ? "bg-gray-100 text-gray-900"
          : "bg-gray-800 text-gray-100"
      }`}
    >
      <h2 className="text-2xl font-bold mb-2">Reverse Mode Info</h2>
      <p className="text-base">
        This InfoCard uses opposite colors of the current theme. 🌗
      </p>
    </div>
  );
};

export default InfoCard;
