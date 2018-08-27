import orderSummary_reducer from "./orderSummary_reducer";
import { FETCH_ORDER_SUMMARY, APPLE_PROMO } from "../actions";

it("handles actions of type FETCH_ORDER_SUMMARY", () => {
  const fake_action = {
    type: FETCH_ORDER_SUMMARY,
    payload: { test: true }
  };
  const newState = orderSummary_reducer({}, fake_action);
  expect(newState).toEqual({ test: true });
});

it("handles actions of type APPLE_PROMO", () => {
  const fake_action = {
    type: APPLE_PROMO,
    payload: { test: true }
  };
  const newState = orderSummary_reducer({}, fake_action);
  expect(newState).toEqual({ test: true });
});

it("handles actions of type unknown", () => {
  const fake_action = {
    type: "Unknown Type",
    payload: null
  };
  const newState = orderSummary_reducer({}, fake_action);
  expect(newState).toEqual({});
});
