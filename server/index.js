const express = require("express");
const path = require("path");
const app = express();

const logRoutes = (req, res, next) => {
    const time = new Date().toLocaleString();
    console.log(`${time} - ${req.method} request for ${req.url}`);
    next();
}

app.use(logRoutes);
const distPath = path.join(__dirname, '../vite-project/dist');
console.log(distPath)
app.use(express.static(distPath));

app.listen(8080, () => {
  console.log("Server is running on port 8080");
}); 