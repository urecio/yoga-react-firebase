import { SEQUENCE_ADD_ASHANA,
  SEQUENCE_SAVED,
  SEQUENCE_GET_ALL,
  SEQUENCE_ERROR_SAVING,
} from '../common/types';

const initialState = { sequenceBuilding: {}, sequences: {}, saved: false };

export default function sequenceReducer(state = initialState, action) {
  switch (action.type) {
    case SEQUENCE_ADD_ASHANA:
      return {
        ...state,
        sequenceBuilding: [ ...state.sequenceBuilding, action.ashana ],
      };
    case SEQUENCE_SAVED:
      return {
        ...state,
        saved: true,
        errorSaving: false,
      };
    case SEQUENCE_ERROR_SAVING:
      return { ...state, errorSaving: true, saved: false, };
    case SEQUENCE_GET_ALL:
      return { ...state, sequences: action.sequences };
    default: return state;
  }
};
