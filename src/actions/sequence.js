import { SEQUENCE_ADD_ASHANA } from '../common/types';

export const addAshanaToSequence = ashana => ({
  type: SEQUENCE_ADD_ASHANA,
  ashana,
});
