require("dotenv").config();
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const route = require("./routes");

// Sửa đổi ở đây: nhập toàn bộ module express-handlebars
const { engine } = require("express-handlebars");

const app = express();
const PORT = process.env.NODE_PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

// app.use(morgan("combined"));

// Sử dụng engine từ express-handlebars
app.engine(
    "hbs",
    engine({
        extname: ".hbs",
    })
);
app.set("view engine", "hbs");
app.set("views", "src/resources/views");

route(app);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
