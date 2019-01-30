/**
 * listEntries
 * @author ipiedra 2019-01-29
 */

import admin from 'firebase-admin'

function listEntries() {
  return new Promise((resolve, reject) => {
    let db = admin.firestore();
    let arr = []
    db.collection('Entry').get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        arr.push( {id: doc.id, data: doc.data() })
      });
      return arr
    }).then((data) => {
      resolve(data)
    })
    .catch((err) => {
      console.log('Error getting documents', err);
      reject(err)
    });    
  })
}

export default listEntries;