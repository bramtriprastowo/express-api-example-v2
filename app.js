const express = require("express");
const app = express();
const productRouter = require("./app/product/routes")
const path = require("path");
const logger = require("morgan");

app.use(logger('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api/v1', productRouter);
app.use((req, res, next) => {
    res.status(404);
    res.send({
        status: "failed",
        message: "Resource " + req.originalUrl + " not found!" 
    })
})

const PORT = 3000;
app.listen(process.env.PORT || PORT, () => console.log('Server: http://localhost:3000'));