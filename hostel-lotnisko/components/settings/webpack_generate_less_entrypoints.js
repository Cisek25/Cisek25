/**
 * create less files for each page 
 * and each scheme color.
 */

const path = require('path');
const fs = require('fs');

// OPTIONS
const PATH_OUTPUT = path.resolve(__dirname, "scheme/entries");
const PATH_SCHEME = path.resolve(__dirname, "scheme");
const _PAGES_NAMES = [
  "index",
  "contact",
  "facebook",
  "news",
  "offer",
  "offers",
  "promotions",
  "opinions",
  "special-offer",
  "txt",
];

/**
 * Create files with imports.
 */
function createLessFile(fileName, pageName, baseName) {

  // create file for page.less
  fs.writeFile(
    PATH_OUTPUT + `${path.sep}${pageName}_${baseName}.less`,
    `@import "..${path.sep}..${path.sep}..${path.sep}..${path.sep}pages${path.sep}${pageName}${path.sep}${pageName}.less";
@import "..${path.sep}${fileName}";`,

    function (err) {
      if (err) {
        console.error('file error: ' + fileName);
        throw err;
      };
      console.log('file created successfully: ' + `/${pageName}_${baseName}.less`);
    });

  // create file for app.less
  fs.writeFile(
    PATH_OUTPUT + `${path.sep}app_${baseName}.less`,
    `@import "..${path.sep}..${path.sep}..${path.sep}..${path.sep}components_standard${path.sep}core-head${path.sep}core-head.less";
@import "..${path.sep}${fileName}";`,
    function (err) {
      if (err) {
        console.log('File error: ' + fileName);
        throw err
      };
      console.log('File created successfully: ' + `/app_${baseName}.less`);
    });
}
 
/**
 * create less files for each page 
 * and each scheme color
 */
async function createEntryPointsForWebpack() {

  // create folder
  console.log("directory: " + PATH_OUTPUT);
  if (!fs.existsSync(PATH_OUTPUT)) {
    await fs.mkdirSync(PATH_OUTPUT);
  }

  // read scheme folder and create file for each less 
  await fs.readdir(PATH_SCHEME, (err, files) => {
    if (!files) {
      return false;
    }
    // foreach sheme file create pages files
    files.forEach(fileName => {

      const extencion = path.extname(fileName);
      const baseName = fileName.replace(extencion, "");

      // read only less files
      if (extencion !== ".less" && extencion !== ".css") {
        return false;
      }

      console.log("scheme file: " + fileName);

      // foreach sheme file create pages files
      for (let index = 0; index < _PAGES_NAMES.length; index++) {
        const pageName = _PAGES_NAMES[index];
        createLessFile(fileName, pageName, baseName);
      }

    });
  });
}

createEntryPointsForWebpack();
