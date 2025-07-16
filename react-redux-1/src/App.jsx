import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { add_cake, add_ice_cream } from "./redux/Action";

const App = () => {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <div className="head">App</div>
      <div className="btn">{count.case1.cake1}</div>
      <div className="btn">{count.case1.ice_cream1}</div>
      <div className="btn">{count.case2.cake2}</div>
      <div className="btn">{count.case2.ice_cream2}</div>

      <button className="btn" onClick={() => dispatch(add_cake("case1"))}>
        add cake to case1
      </button>
      <button className="btn" onClick={() => dispatch(add_cake("case2"))}>
        add cake to case2
      </button>
      <button className="btn" onClick={() => dispatch(add_ice_cream("case1"))}>
        add ice cream to case1
      </button>
      <button className="btn" onClick={() => dispatch(add_ice_cream("case2"))}>
        add ice cream to case2
      </button>
    </>
  );
};

export default App;
