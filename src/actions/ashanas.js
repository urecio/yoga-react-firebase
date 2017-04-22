import { ASHANAS_GET, ASHANAS_FILTER } from '../common/types';

export const getAshanas = () => ({
  type: ASHANAS_GET,
});

export const filterAshanas = (query) => ({
  type: ASHANAS_FILTER,
  query,
});
