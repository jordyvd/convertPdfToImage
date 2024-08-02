// import { PDFImage } from 'pdf-image';
// import fs from 'fs';
// import path from 'path';
// import { time } from 'console';

// const __filename = new URL(import.meta.url).pathname;
// const __dirname = path.dirname(__filename);
// //const __dirname = './'

// // const pdfBuffer = Buffer.from(pdfBase64, 'base64');
// const pathInput = __dirname + 'input';

// const pdfPath = pathInput + 'input.pdf';

// if (!fs.existsSync(pathInput)) {
//     fs.mkdirSync(pathInput);
// }

// // fs.writeFileSync(pdfPath, pdfBuffer);

// const pdfImage = new PDFImage(pdfPath, {
//     combinedImage: false,
//     convertOptions: {
//         "-quality": "1050"
//     }
// });

// const outDir = __dirname + '/output';

// if (!fs.existsSync(outDir)) {
//     fs.mkdirSync(outDir);
// }

// pdfImage.convertFile()
//     .then(function (imagePaths) {
//         imagePaths.forEach(function (imagePath, index) {
//             const outputPath = `${outDir}/page${'s5'}-${index + 1}.jpg`;
//             fs.copyFileSync(imagePath, outputPath);
//             console.log(`${outputPath}`); // path
//         });
//     })
//     .catch(function (error) {
//         console.error('Error al convertir PDF:', error);
//     });


import { fromPath } from "pdf2pic";

const options = {
  density: 100,
  saveFilename: "immaage",
  savePath: "./output",
  format: "png",
  width: 600,
  height: 600
};
const storeAsImage = fromPath("./input/input.pdf", options);
const pageToConvertAsImage = 1;

storeAsImage(pageToConvertAsImage).then((resolve) => {
  console.log("Page 1 is now converted as image");

 console.log(resolve); // send resolve to user
});

// // Convierte la primera página
// pdfToPic(0).then((resolve) => {
//     console.log('Página convertida:', resolve);
// }).catch((error) => {
//     console.error('Error al convertir la página:', error);
// });

// process.on('uncaughtException', (err) => {
//     console.error('Excepción no capturada:', err);
// });
