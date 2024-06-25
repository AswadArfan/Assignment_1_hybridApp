const https = require('https');
const fs = require('fs');

const canadaUrl = 'https://health-infobase.canada.ca/src/data/covidLive/covid19.json';
const ontarioUrl = 'https://data.ontario.ca/api/3/action/datastore_search?resource_id=ed270bb8-340b-41f9-a7c6-e8ef587e6d11&limit=1000';

function downloadFile(url, filename) {
  https.get(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
      data += chunk;
    });
    response.on('end', () => {
      fs.writeFile(`src/assets/${filename}`, data, (err) => {
        if (err) throw err;
        console.log(`${filename} has been saved!`);
      });
    });
  }).on('error', (err) => {
    console.error(`Error: ${err.message}`);
  });
}

downloadFile(canadaUrl, 'covid19-download.json');
downloadFile(ontarioUrl, 'covidtesting.json');