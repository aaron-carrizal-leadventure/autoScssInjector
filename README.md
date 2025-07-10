# autoScssInjector

**autoScssInjector** is an automated tool designed to facilitate SCSS file injection in web projects. Its primary purpose is to optimize the development workflow by dynamically managing style dependencies, eliminating the need to manually upload every SCSS file.

## Features

- **Automatic SCSS Injection**: Detects and automatically adds imports for SCSS files into the main SCSS file.
- **Flexible Configuration**: Allows customization of paths and behavior via environment variables.
- **Simple Integration**: Easily integrates with existing projects without significant modifications.

## Prerequisites

- Node.js version 14 or higher
- npm

Both can be installed from the leadventure App store

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/aaron-carrizal-leadventure/autoScssInjector.git
   cd autoScssInjector
   npm i
   ```

## Configuration
Before running the tool, you need to set up the environment variables. To do so:

1. Create a .env file in the root directory.

2. Copy the contents of the .env.example file and adjust the values as needed.

### Environment Variables
Below are the variables available in the .env file:

- URL (this controls the web direction the app will load into the browser)
- SCSS_SOURCE_FOLDER (this controls the folder that will be used to load the files from)

## Usage
Once the .env file is configured, you can run the tool with the following command:

``` bash
npm run dev
```
This will open a new instance of the google chrome browser and load the URL provided on the ENV file, then it will compile and inject the scss styling sheets onto the web page.

To use the scraper you will need to install python and its dependencies, the run this command:
``` bash
python scraper.py <URL> "<classes that contain all the images>"
```
This will create a new folder named /logos, convert all images to .png and rename them as logo-x.

**You can add, remove or edit .scss files on the fly**