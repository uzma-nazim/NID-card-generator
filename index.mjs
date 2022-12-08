import { createRequire } from "module";
const require = createRequire(import.meta.url);

const express = require("express")
import route from "./routes/routes.mjs"
const app = express();
const cors = require("cors")


const Port = 5000 || process.env.Port;

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())



app.use(route);
app.use(express.static("./View/NIC"))

app.listen(Port, console.log("Server is runing"));
