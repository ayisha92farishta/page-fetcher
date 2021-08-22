const request = require('request');

const fs = require('fs');

//defining the command line arguments
const payload = process.argv.slice(2);


const fetcher = function(){
  //requesting files from the server
  request(payload[0], (error, response, body) => {
    //copying the file in a local path and saving it
    fs.writeFile(payload[1], body , function (err) {
      if (err) throw err;
    
      //finding the size of the file in bytes

      const stats = fs.statSync(payload[1]);
    
      //prints the final message

      console.log(`Downloaded and saved ${stats.size} to ${payload[1]}`)
    });

  })
  
}

fetcher();

