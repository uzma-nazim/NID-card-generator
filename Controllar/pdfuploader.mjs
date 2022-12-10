import { createRequire } from "module";
const require = createRequire(import.meta.url);

const fs = require("fs")
const path = require("path");
const pdfParser = require("pdf-parse")
import { exportImages } from 'pdf-export-images'


const { PDFNet } = require("@pdftron/pdfnet-node");

const pdfuploader = (req, res) => {

const pdfPath = "./uploads/NIC.pdf"

    // let databuffer = fs.readFileSync("uploads/NIC.pdf")
    // pdfParser(databuffer).then((data) => {
    //     exportImages('uploads/NIC.pdf', 'View/NIC/pdfimages')
    //         .then(images => {
    //             res.json({ data })
    //         })
    //         .catch(console.error)
    // })
    try {
        const textExtractor = async () => {
          const doc = await PDFNet.PDFDoc.createFromFilePath(pdfPath);
          await doc.initSecurityHandler();
          const page = await doc.getPage(1);
          const txt = await PDFNet.TextExtractor.create();
          const rect = new PDFNet.Rect(0, 0, 612, 794);
          txt.begin(page);
          const text = await txt.getAsText();
          console.log(text);
          exportImages('uploads/NIC.pdf', 'View/NIC/pdfimages')
          .then(images => {
              res.json({ data:text })
          })
        };
        
      PDFNet.runWithCleanup(
        textExtractor,
        "demo:1670629385725:7a989bb403000000005f358dc03f6bf9dc3406d882a3a22031911949d2"
      ).then((test)=>{
        console.log(test);
    
      })
      .catch((err)=>{
        console.log(err);
    
      })
      } catch (err) {
        console.log(err);
      }

}

export default pdfuploader 