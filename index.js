const app = require("./app");
const port = process.env.PORT || 3000;

app.listen(port, () => console.debug("app listening at port " + port));