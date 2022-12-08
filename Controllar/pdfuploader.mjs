import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fs = require("fs")
const path = require("path");
const pdfParser = require("pdf-parse")
import { exportImages } from 'pdf-export-images'


const pdfuploader = (req, res) => {



    let databuffer = fs.readFileSync("./uploads/NIC.pdf")
    pdfParser(databuffer).then((data) => {
        exportImages('./uploads/NIC.pdf', 'View/NIC/pdfimages')
            .then(images => {
                res.json({ data })
            })
            .catch(console.error)
    })


}

export default pdfuploader 