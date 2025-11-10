// bundle LESS files
const path = require('path');
// const fs = require('fs');
const fs = require('fs-extra');


function changeSourcesPath(html) {
  const canonical = html.match(/<link(.*)rel="canonical" (.*)href="(https:\/\/.*?)\/(.*)"(.*)>/)[3];
  console.log('www:', canonical);
  // change canonical
  html = html.replace(/<link(.*)rel="canonical" (.*)>/g, '<link rel="canonical" href="/"/>');
  // change all css

  // new line between and after tag
  html = html.replace(/<(img)/g, '\n<img');
  html = html.replace(/\/>/g, '\n/>');

  // CSS scheme link
  let schemeCss = html.match(/<link(.*)href="(.*)\/((scheme)?\/.*).css(.*)>/g)[0];
  if (schemeCss) {
    schemeCss = schemeCss.replace(/<link(.*)href="(.*)\/(scheme)\/(.*).css(.*)>/g, '<link $1 href="./$3/$4.css" />');
  } else {
    console.log('NO SCHEME CSS FILE IN SCENARIO - probably client has old version of template');
  }

  html = html.replace(/<link(.*)href="(.*)\/(scheme)\/(.*).css(.*)>/g, '<shemetag>');
  html = html.replace(/<link(.*)href="(.*)\/(.*).css(.*)>/g, '<link $1 href="./$3.css" />');
  html = html.replace('<shemetag>', schemeCss);
  // change js scripts
  html = html.replace(/<script(.*)src="(.*)\/(.*).js(.*)<\/script>/g, '<script $1 src="./$3.js"></script>');

  // photo paths
  html = html.replace(/<source(.*)src="(.*)"/g, `<source $1 src="${canonical}$2"`);
  html = html.replace(/<img(.*)src="((?!https).*)"/g, `<img $1 src="${canonical}$2"`);
  html = html.replace(/data-src="(.*)"/g, `data-src="${canonical}$1"`);

  return html;
}

async function generateScenario(inputDir, outputDir) {
  let htmlIndex = await fs.readFile(inputDir, 'utf8');
  htmlIndex = changeSourcesPath(htmlIndex);
  await fs.writeFile(outputDir, htmlIndex);
}

async function generate() {
  const SCENARIO_ID = process.argv[2];
  if (SCENARIO_ID === undefined) {
    console.log('STOPED: no scenario ID was passed!');
    return;
  }
  const SCENARIOS_INPUT = path.resolve(__dirname, `../dev/scenarios/${SCENARIO_ID}`);
  const SCENARIOS_OUTUP = path.resolve(__dirname, '../dev');

  const PAGES = [
    'index',
    'offers',
  ];
  console.log('scenario path:', SCENARIOS_INPUT);

  // eslint-disable-next-line no-restricted-syntax
  for (const page of PAGES) {
    generateScenario(`${SCENARIOS_INPUT}/${page}.html`, `${SCENARIOS_OUTUP}/${page}.html`);
  }
}
generate();

async function f() {
  return;
  // user, first argument
  // console.log(process.argv)
  // let user = process.argv.find((el) => (
  //   el.startsWith('--')
  // ));
  const user = process.argv[2] || 'bmoscicki';
  console.log(`=> start: ${user}`);

  const pathToSource = `${HTML_MOCKS_DIR}/index.html`;
  let dataSource = await fs.readFile(pathToSource, 'utf8');
  console.log(`=> read footer: ${pathToSource}`);

  dataSource = dataSource.replace(/<\/style>(.*)<\/head>/, '</style></head>');
  console.log('=> removed react css');

  dataSource = dataSource.replace(/<div id="appMarker"><\/div>(.*)<\/body>/, '<div id="appMarker"></div></body>');
  console.log('=> <div id="appMarker"></div> replaced');

  dataSource = dataSource.replace(/<!-- after jQuery -->/,
    `<script src="/mocks/jQueryAjaxRedirect.js"></script>
     <script src="/mocks/scenarios.js"></script>`);
  console.log('=> add mock script: mockAjax.js');
  // dataSource = dataSource.replace(/<script(.*)src="/g, '<script $1 src="' + DEMO_URL(user));
  // dataSource = dataSource.replace(/<script([^>]*)\ssrc=(['"])(?:[^\2\/]*\/)*([^\2]+)\2/g, "<script$1 src=$2SOMEVALUE/$3$2");
  // console.log('=> script URL added');

  // dataSource = dataSource.replace(/<link(.*)href="/g, '<link $1 href="' + DEMO_URL(user));
  // console.log('=> link href added');
  dataSource = dataSource.replace(/\/template\/widget(.*)app\/public\//g, '');

  // activity_tracking.js <- nie ma potrzeby
  // dataSource = dataSource.replace(/<script(.*)activity_tracking.js(.*)<\/script>/g, `<script defer src="https://${user}.emporium.idosell.com/scripts/shared/activity_tracking.js"></script>`);
  dataSource = dataSource.replace(/<script(.*)activity_tracking.js(.*)<\/script>/g, '');
  console.log('=> update source URLs');

  // write file
  const pathToDestination = `${PUBLIC_DIR}/index.html`;
  await fs.writeFile(pathToDestination, dataSource);
  console.log(`=> index.html created: ${pathToDestination}`);

  return true;
};
