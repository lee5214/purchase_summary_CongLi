const FETCH_ORDER_SUMMARY = "fetchOrderSummary";
const fetchOrderSummary = () => {
  return { type: FETCH_ORDER_SUMMARY, payload: { subtotal: 1 } };
};
export { FETCH_ORDER_SUMMARY, fetchOrderSummary };
