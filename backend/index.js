const express = require("express");
const dotenv = require("dotenv");
const path = require('path');
const errorMiddleware = require('./middleware/errors')
var cors = require('cors');

// Handling uncaught error
process.on("uncaughtException", (err) => {
    console.log(`Error message: ${err.message}`);
    console.log("\n\n\n\nError: ", err);
    console.log("\n\n\n\n", "Shutting Down because of uncaught error")
    process.exit(1)
})

var currentPath = process.cwd();
dotenv.config({ path: path.join(currentPath, 'config/config.env') })

const app = express();
app.use(cors());
app.use(express.json())

// Show Frontend
app.use(express.static(path.join(__dirname, "frontend")));
// app.use(express.static("public"));

//Routes
app.use('/api/v1', require('./routes/userRoute'))

app.get('/*', (req, res) => {
    res.redirect('/');
});

// Middleware for error
app.use(errorMiddleware);

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is working on ${process.env.PORT}`)
})


// Unhandled Promise Rejection error
process.on("unhandledRejection", (err) => {
    console.log(`error: ${err.message}`);
    console.log("Shutting Down because of unhandled Rejection error")

    server.close(() => {
        process.exit(1)
    });
})