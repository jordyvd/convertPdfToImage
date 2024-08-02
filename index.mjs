import { PDFImage } from 'pdf-image';
import fs from 'fs';
import path from 'path';

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
        '-quality': '100',
        '-resize': '200%'
    }
});

const outDir = __dirname + '/output';

if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir);
}

pdfImage.convertFile()
    .then(function (imagePaths) {
        imagePaths.forEach(function (imagePath, index) {
            const outputPath = `${outDir}/page-${index + 1}.png`;
            fs.copyFileSync(imagePath, outputPath);
            console.log(`Página ${index + 1} convertida a imagen: ${outputPath}`);
        });
    })
    .catch(function (error) {
        console.error('Error al convertir PDF:', error);
    });