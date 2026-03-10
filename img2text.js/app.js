const Tesseract = require("tesseract.js");
const fs = require("fs");
const path = require("path");

// Folders
const imagesFolder = path.join(__dirname, "images");
const outputFolder = path.join(__dirname, "output");
const outputFile = path.join(outputFolder, "extracted.txt");

// check if output folder exists, if not create it
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}
// Clear previous output
fs.writeFileSync(outputFile, "", "utf8");

const files = fs.readdirSync(imagesFolder);

// Filter image files
const imageFiles = files.filter((file) =>
  /\.(png|jpe?g|bmp|webp|tiff?)$/i.test(file),
);

(async () => {
  for (const file of imageFiles) {
    const filePath = path.join(imagesFolder, file);
    try {
      //running OCR on the image
      const result = await Tesseract.recognize(filePath, "ben");
      const text = result.data.text.trim();

      //file name and the text
      const formatted = `${file}: ${text}\n\n`;

      // Append to single file
      fs.appendFileSync(outputFile, formatted, "utf8");
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }
  console.log("Completed processing all images.");
})();
