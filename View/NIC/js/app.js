const upload = document.getElementById("upload");
const uploadbtn = document.getElementById("uploadbtn");
const nicwrapper = document.getElementById("nic-wrapper");
const pdfshow = document.getElementById("pdfshow");
const pdfcontainer = document.getElementById("pdf-container");
const uploadContainer = document.getElementById("uploadContainer");

upload.onchange = (e) => {
  fileUpload(e);
};
let NameInbangla;
let englishName;
let fatherName;
let motherName;
let dateOfBirth;
let NationalId;
let BloodGroup;

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
      let newArry = res.data.text.split("\n")

      for (i = 0; i < newArry.length; i++) {
        if (newArry[i].slice(0, 12) == "Name(Bangla)") {

          NameInbangla = newArry[i].slice(12)
        }
        if (newArry[i].slice(0, 13) == "Name(English)") {

          englishName = newArry[i].slice(13)
        }
        if (newArry[i].slice(0, 11) == "Father Name") {

          fatherName = newArry[i].slice(11)
        }
        if (newArry[i].slice(0, 11) == "Mother Name") {

          motherName = newArry[i].slice(11)
        }
        if (newArry[i].slice(0, 13) == "Date of Birth") {

          dateOfBirth = newArry[i].slice(13)
        }
        if (newArry[i].slice(0, 11) == "National ID") {

          NationalId = newArry[i].slice(11)
        }
        if (newArry[i].slice(0, 11) == "Blood Group") {

          BloodGroup = newArry[i].slice(11)
        }

      }

      nicwrapper.innerHTML = `  <div class="box-container">
      <div class="nice-box">
        <div class="nic-header">
          <div class="nic-logo">
            <img src="./images/logo.png"  alt="abc" />
          </div>
          <div>
            <p>গণĴজাতĮী বাংলােদশ সরকার</p>
            <p class="green">
              Government of the People's Republic of Bangladesh
            </p>
            <p>
              <span class="red"> National ID Card </span> / জাতীয় পিরচয় পĔ
            </p>
          </div>
        </div>
        <div class="nic-body">
<img src="./images/bg-sign.png" class="bg-img" alt="">


          <div class="nic-photo">
            <img src="../pdfimages/img_p0_1.png" alt="abc" />
          </div>
          <div class="nic-content">
            <p>নাম: <span class="left-spacing">${NameInbangla}</span></p>
            <p>Name: <span class="left-spacing">${englishName}</span></p>
            <p>িপত: <span class="left-spacing">${fatherName}</span></p>
            <p>মাত: <span class="left-spacing">${motherName}</span></p>
            <p>
              Date of Birth: <span class="left-spacing red">${dateOfBirth}</span>
            </p>
            <p>ID NO: <span class="left-spacing red bold">${NationalId}</span></p>
          </div>
        </div>
      </div>
      <div class="nice-box nic-box2">
        <div class="nic-header">
          <p>
            এই কাডÎিট গণĴজাতĮী বাংলােদশ সরকােরর সłিē। কাডÎিট বËবহারকারী বËতীত
            অį Ïকাথাও পাওয়া Ïগেল িনকটŪ ÏপাŨ অিফেস জমা Ïদবার জį অſেরাধ করা
            হেলা।
          </p>
        </div>
        <div class="nic-body-2">
          <p>
            িঠকানা: বাসা/Ïহািŏং:
            <span class="left-spacing">åাম/রাũা: ডাকঘর: </span>
          </p>
          <div class="blood-group-box">
            <p>
              রেক্তর Ƈপ / Blood Group:
              <span class="left-spacing">জĥŪান: </span>
            </p>
            <span class="blog-group">মূęণ: ০১</span>
          </div>
        </div>
        <div class="nic-body-3">
          <img src="./images/sign.jpg" alt="abc" width="100px" />
          <div class="text-box">
            <p>Ĵদানকারী কতৃÎপেÙর ŮাÙর</p>
            <p>Ĵদােনর তািরখ: <span> ২২/০৭/২০২২ </span></p>
          </div>
          <svg id="barcode"></svg>

        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-4">
      <div class="choosefile" onclick="SaveDiv()">Download</div>
    </div>`
const barCode = englishName +dateOfBirth +NationalId

    JsBarcode("#barcode", barCode, {
      
      lineColor: "#000",
      width: 1,
      height: 45,
      displayValue: false
    });
    console.log(barCode);
    })
    .catch((err) => {
      alert("Error ")
      console.log(err);

    });
};







