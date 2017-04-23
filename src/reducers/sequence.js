import { SEQUENCE_ADD_ASHANA, SEQUENCE_SAVE, SEQUENCE_GET_ALL } from '../common/types';

export default function sequenceReducer(state = { sequenceBuilding: [], sequences: [] }, action) {
  switch (action.type) {
    case SEQUENCE_ADD_ASHANA:
      return { ...state, sequenceBuilding: [ ...state.sequenceBuilding, action.ashana ]};
    case SEQUENCE_SAVE:
      return {
        ...state,
        sequences: [ ...state.sequences, { name: action.name, sequence: action.sequence } ],
      };
    case SEQUENCE_GET_ALL:
      return { ...state, sequences: state.sequences };
    default: return state;
  }
};
