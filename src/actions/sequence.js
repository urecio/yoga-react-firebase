import { SEQUENCE_ADD_ASHANA,
  SEQUENCE_SAVED,
  SEQUENCE_GET_ALL,
  SEQUENCE_ERROR_SAVING,
} from '../common/types';
import { sequencesRef } from '../common/firebase';

export const addAshanaToSequence = ashana => ({
  type: SEQUENCE_ADD_ASHANA,
  ashana,
});

export function saveSequence(name, sequence) {
  // TODO: check if author is the one editing, if so, allow to override, otherwise,
  // ask for a name change
  // TODO: handle errors (name is unique)
  return dispatch => {
    let err = false;
    const sequenceToUpdate = sequencesRef.child(name);
    sequence.forEach(ashana => {
      sequenceToUpdate.set({ name, ashanas: sequence })
      .then(() => dispatch({ type: SEQUENCE_SAVED }))
      .catch(() => dispatch({ type: SEQUENCE_ERROR_SAVING }));
    });
  };
}

export function getSequences() {
  return dispatch => {
    return sequencesRef.once('value')
    .then(sequences => {
      console.log(sequences.val());
      dispatch({ type: SEQUENCE_GET_ALL, sequences: sequences.val() })
    });
  }
};
