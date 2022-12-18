const upload = document.getElementById("upload");
const uploadbtn = document.getElementById("uploadbtn");
const nicwrapper = document.getElementById("nic-wrapper");
const pdfshow = document.getElementById("pdfshow");
const pdfcontainer = document.getElementById("pdf-container");
const uploadContainer = document.getElementById("uploadContainer");

upload.onchange = (e) => {
  fileUpload(e);
};
let str ;
let NameInbangla;
let englishName;
let fatherName;
let motherName;
let dateOfBirth;
let NationalId;
let BloodGroup;
let housnumber;
let villageRoad;
let mahula;
let postOffice;
let psotalCode;
let Municipality;
let District;
let division;
let placebirth; 
const fileUpload = (e) => {
  uploadbtn.innerHTML = "Uploading...";

  let formdata = new FormData();
  formdata.append("NIC", e.target.files[0]);

  fetch("/pdf", {
    method: "POST",
    body: formdata,
  })
    .then((response) => response.json())
    .then((res) => {
      
      
      
      
      uploadbtn.innerHTML = " CHOOSE FILES";
      nicwrapper.style.display = "flex";
      uploadContainer.style.display = "none";
      let newArry = res.data.split("\n");
      
        if(newArry[98]=="Home/Holding"){
          
          NameInbangla = newArry[35];
          englishName = newArry[36];
          dateOfBirth = newArry[37];
          fatherName = newArry[39];
          motherName = newArry[40];
          NationalId = newArry[26];
          housnumber = newArry[115] 
          villageRoad = "";
          mahula = newArry[123];
          postOffice = newArry[65];
          psotalCode = newArry[114];
          District = newArry[117];
          division = newArry[118];
          placebirth= newArry[38]

          
        }
        else{

          if (
            newArry[0] == "7/28/22, 9:52 PM" &&
            newArry[1] == "Verify By Nid" &&
            newArry[2] == "Citizen"
          ) {
            NameInbangla = newArry[37];
            englishName = newArry[38];
            dateOfBirth = newArry[39];
            fatherName = newArry[41];
            motherName = newArry[42];
            NationalId = newArry[28];
            housnumber = "";
            villageRoad = newArry[67];
            mahula = newArry[68];
            postOffice = newArry[67];
            psotalCode = newArry[115];
            District = newArry[116];
            division = newArry[48];
            placebirth= newArry[40]

          }
          if (newArry[0] == "Citizen") {
            NameInbangla = newArry[35];
            englishName = newArry[36];
            dateOfBirth = newArry[37];
            fatherName = newArry[39];
            motherName = newArry[40];
            NationalId = newArry[26];
            housnumber = newArry[110] + newArry[111];
            villageRoad = newArry[66];
            mahula = newArry[113];
            postOffice = newArry[67];
            psotalCode = newArry[116];
            District = newArry[68];
            division = newArry[47];
            placebirth= newArry[38]

          }
          if (newArry[0] == "National ID") {
            NameInbangla = newArry[34];
            englishName = newArry[35];
            dateOfBirth = newArry[36];
            fatherName = newArry[40];
            motherName = newArry[41];
            NationalId = newArry[2];
            villageRoad = newArry[66];
            mahula = newArry[111] + newArry[112];
            postOffice = newArry[67];
            psotalCode = newArry[124];
            District = newArry[47];
            division = newArry[47];
            housnumber = newArry[118] + newArry[119];
            placebirth= newArry[37]

          }
          
        }
      
      dateOfBirth = dateOfBirth.split("-").reverse().join(" ")
      
      nicwrapper.innerHTML = `  <div class="box-container">
      <div class="nice-box box1">
        <div class="nic-header padding">
<img src="./images/topheader.PNG" width="100%" alt="">
  
        </div>
        <div class="nic-body">
<img src="./images/bg-sign.png" class="bg-img" alt="">


          <div class="nic-photo">
            <img src="../pdfimages/img_p0_1.png"  class="man" alt="abc" />
            <img src="../pdfimages/img_p0_2.png" class="signImg" alt="abc" />
          </div>
          <div class="nic-content">
            <p>নাম: <span class="left-spacing bold">${NameInbangla}</span></p>
            <p>Name: <span class="left-spacing bold">${englishName}</span></p>
            <p>পিতা : <span class="left-spacing">${fatherName}</span></p>
            <p>মাতা: <span class="left-spacing">${motherName}</span></p>
            <p>
              Date of Birth: <span class="left-spacing red">${dateOfBirth}</span>
            </p>
            <p>ID NO: <span class="left-spacing red bold">${NationalId}</span></p>
          </div>
        </div>
      </div>
      <div class="nice-box nic-box2">
        <div class="nic-header">
        <img src="./images/topheade2.PNG" width="100%" alt="">

        </div>
        <div class="nic-body-2">
          <p>
  <img  style="margin-top: -5px;" src="./images/house.PNG" alt="">
            
            <span >${housnumber}, ${villageRoad}, ${mahula}, ${postOffice}, ${psotalCode}, ${District}, ${division}</span>
          </p>
          <div class="blood-group-box">
            <div class="placepfbirth" >   
          <img src="./images/bldgroup.png"  width="57%" alt="">
          <span>ইতিবাচক ,</span>
          <span style="margin-left: 16px;">${placebirth}</span>
          </div>

            
            <div>  
          <img src="./images/date.PNG"  width="100%" alt="">
          </div>
          </div>
        </div>
        <div class="nic-body-3">
          <img style="margin-top: 5px; margin-left: 5px;" src="./images/sign.jpg" alt="abc" width="80px" />
          <div class="text-box">
          <div>
    <img src="./images/donor.PNG"  width="80%" alt="">
    </div>
            
            <p><img width="80px" src="./images/paymentofdate.PNG" alt="">
            <span> ২২/০৭/২০২২ </span></p>
          </div>
          <div id="barcode"></div>

        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-4">
      <div class="choosefile" onclick="SaveDiv()">Download</div>
    </div>`;
      const barCode = "<pin>"+ NationalId +"</pin>" +"<name>"+ englishName+"</name>"+"<DOB>"+dateOfBirth+"</DOB>" + "<pin>"+ NationalId +"</pin>" +"<name>"+ englishName+"</name>"+"<DOB>"+dateOfBirth+"</DOB>" + "<pin>"+ NationalId +"</pin>" +"<name>"+ englishName+"</name>"+"<DOB>"+dateOfBirth+"</DOB>" ;
      
      PDF417.init(barCode);
      var barcode = PDF417.getBarcodeArray();

      // block sizes (width and height) in pixels
      var bw = 2;
      var bh = 1;

      // create canvas element based on number of columns and rows in barcode
      var canvas = document.createElement('canvas');
      canvas.width = bw * barcode['num_cols'] ;
      canvas.height = bh * barcode['num_rows'];
      document.getElementById('barcode').appendChild(canvas);

      var ctx = canvas.getContext('2d');                    

      // graph barcode elements
      var y = 0;
      // for each row
      for (var r = 0; r < barcode['num_rows']; ++r) {
          var x = 0;
          // for each column
          for (var c = 0; c < barcode['num_cols']; ++c) {
              if (barcode['bcode'][r][c] == 1) {                        
                  ctx.fillRect(x, y, bw, bh);
              }
              x += bw;
          }
          y += bh;
      }
      // JsBarcode("#barcode", barCode, {
      //   format: "PDF417",

      //   lineColor: "#000",
      //   width: 1,
      //   height: 40,
      //   displayValue: false,

      // });
    })
    .catch((err) => {
      alert("Error ");
      console.log(err);
    });
};


