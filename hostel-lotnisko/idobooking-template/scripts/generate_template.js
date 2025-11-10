// bundle LESS files
const path = require('path');
const fs = require('fs');
// eslint-disable-next-line import/no-extraneous-dependencies
const archiver = require('archiver');


// Create packages for languages:
const LANGS = ['pl', 'de', 'en', 'fr', 'ru', 'es'];

/**
 * @param {String} source
 * @param {String} out
 * @returns {Promise}
 */
async function zipDirectory(out) {
  const archive = archiver('zip', { zlib: { level: 9 } });
  const stream = fs.createWriteStream(out);

  return new Promise((resolve, reject) => {
    archive
      .on('error', (err) => reject(err))
      .pipe(stream);

    const dirTemplateRoot = path.resolve(__dirname, '..');

    archive.glob(`components${path.sep}**${path.sep}*.tpl`, { cwd: dirTemplateRoot }, { prefix: path.sep });
    archive.glob(`components_standard${path.sep}**${path.sep}*.tpl`, { cwd: dirTemplateRoot }, { prefix: path.sep });
    archive.glob(`pages${path.sep}**${path.sep}*.tpl`, { cwd: dirTemplateRoot }, { prefix: path.sep });

    archive.glob(`files${path.sep}**`, { cwd: dirTemplateRoot }, { prefix: path.sep });
    archive.glob('dist', { cwd: dirTemplateRoot }, { prefix: path.sep });
    archive.glob(`dist${path.sep}fonts${path.sep}**`, { cwd: dirTemplateRoot }, { prefix: path.sep });
    archive.glob(`dist${path.sep}scheme${path.sep}**`, { cwd: dirTemplateRoot }, { prefix: path.sep });
    archive.glob(`dist${path.sep}!(*.less.bundle.js).gz`, { cwd: dirTemplateRoot }, { prefix: path.sep });
    archive.glob(`dist${path.sep}modernizer.js`, { cwd: dirTemplateRoot }, { prefix: path.sep });
    archive.glob(`dist${path.sep}widget-temp.js`, { cwd: dirTemplateRoot }, { prefix: path.sep });


    // TODO - no need cancel after alidator hot fixes
    archive.glob(`images${path.sep}**`, { cwd: dirTemplateRoot }, { prefix: path.sep });
    archive.glob(`scripts${path.sep}**`, { cwd: dirTemplateRoot }, { prefix: path.sep });
    archive.glob(`styles${path.sep}**`, { cwd: dirTemplateRoot }, { prefix: path.sep });

    archive.glob('*.tpl', { cwd: dirTemplateRoot }, { prefix: path.sep });
    archive.glob('*.ico', { cwd: dirTemplateRoot }, { prefix: path.sep });

    stream.on('close', () => resolve());
    archive.finalize();
  });
}

async function generateZIPFiles() {

  const thempalteName = path.resolve(__dirname, `..${path.sep}`).split(path.sep).pop();
  function getPathForLang(lang) {
    return `${path.resolve(__dirname, `..${path.sep}..${path.sep}`)}${path.sep}${lang}_${thempalteName}_smarty_template.zip`;
  }

  const pathLang = getPathForLang(LANGS[0]);

  await zipDirectory(pathLang).then(() => {
    console.log(`zip done:${pathLang}`);
  });

  // copyZIPFilesForEachLanguage
  // * starts from 1, because we already have pl file
  for (let index = 1; index < LANGS.length; index++) {
    const lang = LANGS[index];

    // created files will be overwritten by default
    /* await */ fs.copyFile(pathLang, getPathForLang(lang), (err) => {
      if (err) {
        console.error(`ZIP file for:${lang} was not createrd`);
        throw new Error(err);
      }
      console.log(`ZIP file created. Lang:${lang} T:${new Date()}`);
    });
  }
}

generateZIPFiles();
