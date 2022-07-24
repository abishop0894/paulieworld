const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const https = require("https");
var cors = require("cors");
var globalData;

app.use(express.static(path.resolve(__dirname, "../my-app/build")));
app.use(cors());

https.get(
  "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJ599MlOPCw4kRiafBebLXONc&key=AIzaSyDbIFt9qcNxvfE-S9zreeMWKK0L_3NKvVc",
  (res) => {
    let data = "";
    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      console.log(JSON.parse(data));
      globalData = JSON.parse(data);
    });
  }
);
console.log(globalData);

app.get(
  "/882BB38C3D1F25C5778CAE71346A667F261EEC124488A186F5509F",
  (req, res) => {
    res.send(globalData);
  }
);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../my-app/build", "index.html"));
});

app.listen(port, () =>
  console.log(`listening to port ${port}` + " " + globalData)
);
