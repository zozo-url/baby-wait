const request = require("superagent");
const fs = require("fs");

const DayCareUrl =
  'http://catalogue.data.govt.nz/api/3/action/datastore_search_sql?sql=SELECT * FROM"26f44973-b06d-479d-b697-8d7943c97c57"';

function getDayCareInfo() {
  return request.get(DayCareUrl).then(res => res.body);
}

function saveDataToFile(data) {
  fs.writeFile("./db/dayCareInfo.json", JSON.stringify(data, null, 4), function(
    err
  ) {
    if (err) {
      console.error(err);
    } else {
      console.log("done");
    }
  });
}

getDayCareInfo().then(data => {
  saveDataToFile(data);
});
