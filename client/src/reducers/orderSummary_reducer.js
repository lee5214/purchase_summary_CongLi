import { FETCH_ORDER_SUMMARY } from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ORDER_SUMMARY:
      console.log("reducer", action.payload);
      return action.payload;
    default:
      return {};
  }
};
