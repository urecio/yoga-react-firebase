import _ from 'lodash';
import { ASHANAS_GET, ASHANAS_FILTER } from '../common/types';
import Ashana from '../models/Ashana';

function filterAshanas(ashanas, query) {
  const queryLower = query.toLowerCase();
  return _.filter(
    ashanas, ashana =>
      ashana.name.toLowerCase().includes(queryLower) ||
      ashana.sanskritName.toLowerCase().includes(queryLower)
  );
}

export default function ashanasReducer(state = { ashanasFullList: {} }, action) {
  switch (action.type) {
    case ASHANAS_GET: return { ...state, ashanasFullList: action.ashanas };
    case ASHANAS_FILTER: return { ...state, filteredAshanas: filterAshanas(state.ashanas, action.query) };
    default: return state;
  }
}
