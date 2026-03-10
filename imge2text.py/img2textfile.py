import easyocr
import os
import warnings

# Suppress warnings
warnings.filterwarnings("ignore")

# Folders
images_folder = "images"
output_folder = "output"
os.makedirs(output_folder, exist_ok=True)
output_file = os.path.join(output_folder, "extracted.txt")

# Clear previous output
with open(output_file, "w", encoding="utf-8") as f:
    pass

# Initialize reader (Bengali)
reader = easyocr.Reader(['bn'], gpu=False) 

# Get sorted list of image files
image_files = sorted(
    [f for f in os.listdir(images_folder) if f.lower().endswith((".png", ".jpg", ".jpeg", ".bmp", ".webp", ".tiff"))]
)

for file in image_files:
    file_path = os.path.join(images_folder, file)
    try:
        results = reader.readtext(file_path, detail=0) 
        text = " ".join(results).strip()
        with open(output_file, "a", encoding="utf-8") as f:
            f.write(f"{file}: {text}\n\n")
    except Exception as e:
        print(f"Error processing {file}: {e}")

print("Completed processing all images in order.")