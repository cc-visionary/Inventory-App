const app = require("./app");
const db = require('./models/database');
const port = process.env.PORT;

db.connect(process.env.MONGODB_URL);

app.listen(port, () => console.debug("app listening at port " + port));