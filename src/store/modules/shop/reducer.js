import produce from 'immer';
import types from './types';
const INITIAL_STATE = {
  customer: {},
  petshops: [],
  petshop: {},
  petshopMapSelected: null,
  mapCenter: { lat: -23.561684, lng: -46.625378 },
  cart: []
};

function shop(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SET_CUSTOMER: {
      return produce(state, (draft) => {
        draft.customer = action.customer;
      });
    }
    case types.SET_PETSHOPS: {
      return produce(state, (draft) => {
        draft.petshops = action.petshops;
      });
    }
    case types.SET_PETSHOP: {
      return produce(state, (draft) => {
        draft.petshop = action.petshop;
      });
    }
    case types.SET_PETSHOPS_MAP_SELECTED: {
      return produce(state, (draft) => {
        draft.petshopMapSelected = action.petshop;
      });
    }
    case types.TOGGLE_CART_PRODUCT: {
      return produce(state, (draft) => {
        const index = draft.cart.findIndex((p) => p._id === action.product._id);

        if (index === -1) {
          draft.cart.push(action.product);
        } else {
          draft.cart.splice(index, 1);
        }

      });
    }

    case types.SET_MAP_CENTER: {
      return produce(state, (draft) => {
        draft.mapCenter = action.location;
      });
    }
    default: {
      return state;
    }
  }
}

export default shop;