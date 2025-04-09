const express = require("express");
const request = require("request");
const app = express();

app.use("/", (req, res) => {
  const target = req.query.url;
  if (!target) return res.status(400).send("Missing URL parameter");
  console.log(`Proxying: ${target}`);
  req.pipe(request(target)).pipe(res);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
