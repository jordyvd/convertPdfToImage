import { PDFImage } from 'pdf-image';
import fs from 'fs';
import path from 'path';
import { time } from 'console';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

// const pdfBuffer = Buffer.from(pdfBase64, 'base64');
const pathInput = __dirname + 'input';

const pdfPath = pathInput + 'input.pdf';

if (!fs.existsSync(pathInput)) {
    fs.mkdirSync(pathInput);
}

// fs.writeFileSync(pdfPath, pdfBuffer);

const pdfImage = new PDFImage(pdfPath, {
    combinedImage: false,
    convertOptions: {
        "-resize": "2000x2000",
        "-quality": "75"
    }
});

const outDir = __dirname + '/output';

if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir);
}

pdfImage.convertFile()
    .then(function (imagePaths) {
        imagePaths.forEach(function (imagePath, index) {
            const outputPath = `${outDir}/page${time()}-${index + 1}.jpg`;
            fs.copyFileSync(imagePath, outputPath);
            console.log(`${outputPath}`); // path
        });
    })
    .catch(function (error) {
        console.error('Error al convertir PDF:', error);
    });