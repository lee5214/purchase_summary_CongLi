import axios from "axios";

const APPLE_PROMO = "applyPromo";
const PROMO_ERROR = "promoError";
const applyPromo = str => async dispatch => {
  await axios
    .post("/promo", { promoCode: str })
    .then(res => {
      console.log("promoCode", res.data);
      dispatch({ type: APPLE_PROMO, payload: res.data });
    })
    .catch(e => {
      console.log(e);
      //dispatch({ type: PROMO_ERROR, payload: e.message });
    });
};
export { APPLE_PROMO, PROMO_ERROR, applyPromo };
