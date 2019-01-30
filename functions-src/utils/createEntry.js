/**
 * createEntry
 * @author ipiedra 2019-01-29
 * @param data object
 */

import admin from 'firebase-admin'

function createEntry(data) {

  return new Promise((resolve, reject) => {
    let db = admin.firestore();
    db.collection('Entry')
      .add(data)
      .then(ref => {
        resolve(ref.id);
      }).catch (err => reject(err) );
  })

}

export default createEntry;