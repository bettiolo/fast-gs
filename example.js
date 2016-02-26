var gs = require('./');

const spreadsheetKey = 'YOUR_WORKSHEET_KEY';
const worksheetId = 1;

gs.toArray(spreadsheetKey, worksheetId, function (err, data) {
  if (err) {
    console.error('ERROR:', err);
    return;
  }

  console.log('DATA:', data);
});

gs.toObject(spreadsheetKey, worksheetId, function (err, data) {
  if (err) {
    console.error('ERROR:', err);
    return;
  }

  console.log('DATA:', data);
});
