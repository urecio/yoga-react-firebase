import { ASHANAS_GET, ASHANAS_FILTER } from '../common/types';

import { ashanasRef, ashanasStorageRef } from '../common/firebase';

import Ashana from '../models/Ashana';

function uploader() {

  const ashanas = [
    // already uploaded:
    // new Ashana({ name: 'Mountain', sanskritName: 'Tadasana', imageUrl: 'ashanas/png/mountain.png' }),
    // new Ashana({ name: 'Upward salute', sanskritName: 'Urdhva Hastasana', imageUrl: 'ashanas/png/upward-salute.png' }),
    // new Ashana({ name: 'Standing forward bend', sanskritName: 'Uttanasana', imageUrl: 'ashanas/png/standing-forward-bend.png' }),
    // new Ashana({ name: 'Half standing forward fold', sanskritName: 'Ardha Uttanasana', imageUrl: 'ashanas/png/half-standing-forward-fold.png' }),
    // new Ashana({ name: 'Four-limbed staff', sanskritName: 'Chaturanga Dandasana', imageUrl: 'ashanas/png/four-limbed-staff.png' }),
    // new Ashana({ name: 'Upward-facing dog', sanskritName: 'Urdhva Mukha Svanasana', imageUrl: 'ashanas/png/upward-facing-dog.png' }),
    // new Ashana({ name: 'Downward-facing dog', sanskritName: 'Adho Mukha Svanasana', imageUrl: 'ashanas/png/downward-facing-dog.png' }),
  ];
  // to upload new ashanas, fillup the array and this will link them in the db
  // it is also necessary to replace the uploaded images in the storage manually after this is run
  ashanas.forEach(ashana => {
    const fileName = ashana.imageUrl.slice(ashana.imageUrl.lastIndexOf('/') + 1);
    const ashanaStorageRef = ashanasStorageRef.child(fileName).put(new File([''], fileName));
    ashanaStorageRef.on('state_changed', function(snapshot) {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + snapshot.progress + '% done');
    }, function(error) {
      // Handle unsuccessful uploads
    }, function() {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      ashana.imageUrl = ashanaStorageRef.snapshot.downloadURL;
      ashanasRef.child(_.camelCase(ashana.name)).set(ashana);
    });
  });
}

// uploader();

export function getAshanas() {
  return dispatch => {
    ashanasRef.once('value').then(snapshot => {
      dispatch({
        type: ASHANAS_GET,
        ashanas: snapshot.val(),
      });
    });
  }
}

export const filterAshanas = (query) => ({
  type: ASHANAS_FILTER,
  query,
});
