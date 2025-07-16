import { ADD_CAKE, ADD_ICECREAM } from "./Constant";

// Pass target like "case1" or "case2"
export const add_cake = (target) => {
  return {
    type: ADD_CAKE,
    target,
  };
};

export const add_ice_cream = (target) => {
  return {
    type: ADD_ICECREAM,
    target,
  };
};
