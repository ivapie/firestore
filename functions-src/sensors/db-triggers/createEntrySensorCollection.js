/**
 * Get Sensor Data
 * @author ipiedra 2019-01-29
 * @param data - sensors data
 */

/**
 * Deploy CLI
 * gcloud functions deploy createEntrySensorCollection --runtime nodejs6 --trigger-http
*/

 import createEntry from '../../utils/createEntry'

 const createEntrySensorCollection = (req, res) => {
 
   let { entry } = req.body
 
   createEntry(entry).then(data => {
     res.json({status:"Completed", message: "Entry created successfully.",  reference: data});
   }).catch(err => {
     res.json({status:"Error", message: err});
   });
 
 };
 
 export default createEntrySensorCollection;