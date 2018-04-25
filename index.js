var fs = require("fs");
var request = require("request");

var FACEPLUSPLUS_API_KEY = "84uDCYbmz1LnMcpuE1TUfsXpFjtX07zY";
var FACEPLUSPLUS_API_SECRET = "qKbD1jfzT6iK_t3iryMZJ4JF2KpM87Zh";

//Parameter list

var api_key = FACEPLUSPLUS_API_KEY;
var api_secret = FACEPLUSPLUS_API_SECRET;

var formData = {
  "api_key": FACEPLUSPLUS_API_KEY,
  "api_secret": FACEPLUSPLUS_API_SECRET,
  "image_file1": fs.createReadStream("./image1.JPG"),
  "image_file2": fs.createReadStream("./image2.JPG"),
  };

request.post(
  {
    url: "https://api-us.faceplusplus.com/facepp/v3/compare",
    formData: formData,
  },
  function(err, httpResponse, body) {
    if (err) {
      return console.error("upload failed:", err);
    }
    console.log(body);
  }
);
