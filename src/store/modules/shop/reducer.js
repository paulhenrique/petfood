import produce from 'immer';
import types from './types';
const INITIAL_STATE = {
  customer: {

  },
  petshops: []
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
    default: {
      return state;
    }
  }
}

export default shop;