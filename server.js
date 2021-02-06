const express = require ("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const htmlRoutes = require("./routes/html-routes");
const apiRoutes = require("./routes/api-routes");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use(express.static("public"));
app.use(htmlRoutes);
app.use(apiRoutes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex:true 
});

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}.`);
})