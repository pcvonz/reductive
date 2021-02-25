const path = require("path")

module.exports = {
  mode: "development",
  output: {
    path: path.join(__dirname, "bundledOutputs"),
    filename: "[name].js"
  }
}
