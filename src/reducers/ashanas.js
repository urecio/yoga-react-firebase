import _ from 'lodash';
import { ASHANAS_GET, ASHANAS_FILTER } from '../common/types';
import Ashana from '../models/Ashana';

function getAshanas() {
  return [
    new Ashana({ name: 'Mountain', sanskritName: 'Tadasana', imageUrl: 'ashanas/png/mountain.png' }),
    new Ashana({ name: 'Upward salute', sanskritName: 'Urdhva Hastasana', imageUrl: 'ashanas/png/upward-salute.png' }),
    new Ashana({ name: 'Standing forward bend', sanskritName: 'Uttanasana', imageUrl: 'ashanas/png/standing-forward-bend.png' }),
  ];
}

function filterAshanas(query) {
  const queryLower = query.toLowerCase();
  return _.filter(
    getAshanas(), ashana =>
      ashana.name.toLowerCase().includes(queryLower) ||
      ashana.sanskritName.toLowerCase().includes(queryLower)
  );
}

export default function ashanasReducer(state = { ashanas: [] }, action) {
  switch (action.type) {
    case ASHANAS_GET: return { ...state, ashanas: getAshanas() };
    case ASHANAS_FILTER: return { ...state, ashanas: filterAshanas(action.query) };
    default: return state;
  }
}
