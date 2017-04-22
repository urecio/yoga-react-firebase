import { SEQUENCE_ADD_ASHANA } from '../common/types';

export default function sequenceReducer(state = { sequenceBuilding: [] }, action) {
  switch (action.type) {
    case SEQUENCE_ADD_ASHANA:
      return { ...state, sequenceBuilding: [ ...state.sequenceBuilding, action.ashana ]};
    default: return state;
  }
};
