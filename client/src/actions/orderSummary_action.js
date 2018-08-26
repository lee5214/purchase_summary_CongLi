import axios from "axios";

const FETCH_ORDER_SUMMARY = "fetchOrderSummary";
const fetchOrderSummary = () => async dispatch => {
  await axios
    .get("/order")
    .then(res => {
      dispatch({ type: FETCH_ORDER_SUMMARY, payload: res.data });
    })
    .catch(e => console.log(e));
};
export { FETCH_ORDER_SUMMARY, fetchOrderSummary };
