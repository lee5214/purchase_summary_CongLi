import { FETCH_ORDER_SUMMARY, APPLE_PROMO } from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ORDER_SUMMARY:
      return action.payload;
    case APPLE_PROMO:
      return action.payload;
    default:
      return {};
  }
};
