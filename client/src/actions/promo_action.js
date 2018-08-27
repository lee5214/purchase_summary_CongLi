import axios from "axios";

const APPLE_PROMO = "applyPromo";
const applyPromo = str => async dispatch => {
  await axios
    .post("/promo", { promoCode: str })
    .then(res => {
      console.log("promoCode", res.data);
      dispatch({ type: APPLE_PROMO, payload: res.data });
    })
    .catch(e => {
      console.log(e.response);
    });
};
export { APPLE_PROMO, applyPromo };
