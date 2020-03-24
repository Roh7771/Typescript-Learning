import { ACTIONS, StoreData, StoreAction } from "./types";
import { Order } from "./entities";
import { Reducer } from "redux";

const initialState: StoreData = {
  products: [],
  order: new Order()
}

export const StoreReducer: Reducer<StoreData, StoreAction> = (
  data: StoreData = initialState,
  action
) => {
  switch (action.type) {
    case ACTIONS.ADD_PRODUCTS:
      return {
        ...data,
        products: [...data.products, ...action.payload]
      };
    case ACTIONS.MODIFY_ORDER:
      data.order.addProduct(action.payload.product, action.payload.quantity);
      return { ...data };
    case ACTIONS.RESET_ORDER:
      return {
        ...data,
        order: new Order()
      };
    default:
      return data;
  }
};
