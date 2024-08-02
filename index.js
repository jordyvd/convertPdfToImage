var PDFImage = require("pdf-image").PDFImage;
var fs = require("fs");

var pdfImage = new PDFImage("./input/input.pdf", {
  combinedImage: true
});

if (fs.existsSync("./input/input.pdf")) {
    console.log('El archivo existe');
} else {
    console.log('El archivo no existe');
}

pdfImage.convertFile().then(function (imagePaths) {
   // /tmp/slide.png 
   console.log("then");
});