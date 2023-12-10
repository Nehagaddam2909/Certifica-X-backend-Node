const express = require("express");
const app = express();
const path = require("path");

// routes
const uploadRoutes = require("./routes/upload");
const utilityRoutes = require("./routes/utility");
const verifyRoutes = require("./routes/verify");

// logger
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

app.use(express.static(path.join(__dirname, 'media')));

// routes
app.use("/upload", uploadRoutes);
app.use("/utility", utilityRoutes);
app.use("/verify", verifyRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// conncet db


// 404 route
app.use((req, res) => {
    res.status(404).send("Page not found");
}
);
app.listen(5000, () => {
    console.log("Server running on port 5000");
}
);