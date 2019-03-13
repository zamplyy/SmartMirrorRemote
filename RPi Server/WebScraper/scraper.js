const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://github.com/MichMich/MagicMirror/wiki/3rd-party-modules';


rp(url)
  .then(function(html){
    //success!
    console.log($('table ', html).length);
    console.log($('table ', html));
  })
  .catch(function(err){
    //handle error
  });
