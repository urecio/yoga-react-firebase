import { SEQUENCE_ADD_ASHANA, SEQUENCE_SAVE, SEQUENCE_GET_ALL } from '../common/types';

export const addAshanaToSequence = ashana => ({
  type: SEQUENCE_ADD_ASHANA,
  ashana,
});

export const saveSequence = (name, sequence) => ({
  type: SEQUENCE_SAVE,
  name,
  sequence,
});

export const getSequences = () => ({
  type: SEQUENCE_GET_ALL,
});
