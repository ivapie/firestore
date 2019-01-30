/**
 * Get Sensor Data
 * @author ipiedra 2019-01-29
 * @param data - sensors data
 */

/**
 * Deploy CLI
 * gcloud functions deploy listEntriesSensor --runtime nodejs6 --trigger-http
*/

import listEntries from '../../utils/listEntries'

const listEntriesSensor = (req, res) => {

  listEntries().then(data => {
    res.json({status:"Completed", message: data, active: "yes" });
  }).catch(err => {
    res.json({status:"Error", message: err});
  });

};

export default listEntriesSensor;
