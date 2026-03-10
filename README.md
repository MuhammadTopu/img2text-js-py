# img2TextFile

A simple tool to extract text from images and save it to a file.

## Features

- Converts images to text using OCR
- Supports multiple image formats (JPEG, PNG, etc.)
- Saves extracted text to a plain text file


## For Js


    ```bash
    node app.js <image-file> <output-text-file>
    ```

### The extracted text will be saved to the specified output file.

## Requirements

- Node.js
- [Tesseract.js](https://github.com/naptha/tesseract.js) (for OCR functionality)

## Installation

```bash
npm install tesseract.js express path
```


## For Python

## Installation

```bash
pip install .
```

## Commnads 

### Virtual Environment Setup

```bash
# 1. Create a virtual environment called 'venv'
python3 -m venv venv

# 2. Activate it
source venv/bin/activate
# (On Windows, use: venv\Scripts\activate)

# 3. Upgrade pip inside the venv
pip install --upgrade pip

# 4. Deactivate the virtual environment
deactivate
```

### PyTorch and EasyOCR Installation (CPU Only)

```bash
pip uninstall torch torchvision -y
pip install torch --index-url https://download.pytorch.org/whl/cpu
pip install torchvision --index-url https://download.pytorch.org/whl/cpu
pip install easyocr
```