import os
import sys
import requests
from io import BytesIO
from bs4 import BeautifulSoup
from PIL import Image

def main():
    if len(sys.argv) < 3:
        print("Usage: python scraper.py <URL> <CONTAINER_DIV_CLASS>")
        sys.exit(1)

    url = sys.argv[1]
    div_class = sys.argv[2]

    # Download HTML content from the provided URL
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        html = response.text
    except Exception as e:
        print(f"Failed to download site: {e}")
        sys.exit(1)

    soup = BeautifulSoup(html, "html.parser")

    # Handle multiple class names in the container
    class_list = div_class.split()
    container = soup.find("div", class_=lambda x: x and all(c in x.split() for c in class_list))

    if not container:
        print(f"No div found with class: '{div_class}'")
        sys.exit(1)

    images = container.find_all("img")
    if not images:
        print("No <img> tags found inside the container.")
        sys.exit(1)

    output_folder = "logos"
    os.makedirs(output_folder, exist_ok=True)

    for i, img in enumerate(images, start=1):
        img_url = img.get("src")
        if not img_url:
            continue

        # Clean up duplicate ?sv= parameters in URLs
        if img_url.count("?sv=") > 1:
            img_url = img_url.split("?sv=")[0] + "?sv=" + img_url.split("?sv=")[-1]

        try:
            img_response = requests.get(img_url, timeout=10)
            img_response.raise_for_status()

            # Open image from memory and convert to PNG
            image = Image.open(BytesIO(img_response.content)).convert("RGBA")

            filename = f"logo-{i}.png"
            filepath = os.path.join(output_folder, filename)

            image.save(filepath, format="PNG")
            print(f"Downloaded and converted: {filename}")

        except Exception as e:
            print(f"Failed to process image {img_url}: {e}")

if __name__ == "__main__":
    main()
