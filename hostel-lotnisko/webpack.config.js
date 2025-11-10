/* eslint-disable no-multiple-empty-lines */
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
// const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/* --------------------------------------------- *
 *                                               *
 *                   CONFIG                      *
 *                                               *
 ------------------------------------------------*/
const TRANSPILLING_FLAG = false; // dont support IE 11, so no need for transpilling

const BROWSER_SUPPORT = `
last 2 Android major versions, 
last 2 Samsung major versions, 
last 2 iOS major versions, 
last 2 and_ff major versions, 
last 2 and_chr major versions,  
last 1 Opera major versions, 
last 2 Edge major versions,  
last 2 Safari major versions,  
last 2 Chrome major versions,  
last 2 Firefox major versions,  
last 2 and_uc major versions`;

const ENTRIES = {
  index: `${__dirname}/pages/index/index.js`,
  contact: `${__dirname}/pages/contact/contact.js`,
  facebook: `${__dirname}/pages/facebook/facebook.js`,
  news: `${__dirname}/pages/news/news.js`,
  offer: `${__dirname}/pages/offer/offer.js`,
  offers: `${__dirname}/pages/offers/offers.js`,
  opinions: `${__dirname}/pages/opinions/opinions.js`,
  promotions: `${__dirname}/pages/promotions/promotions.js`,
  'special-offer': `${__dirname}/pages/special-offer/special-offer.js`,
  txt: `${__dirname}/pages/txt/txt.js`,

  app: `${__dirname}/components_standard/core-head/core-head.js`,
  //widgetlibs: `${__dirname}/components/widget-calendar/widget-calendar-init.js`,
};

/**
 * Generate config file.
 * - Create webpack dist files
 * - change app version
 */
module.exports = async function config(env, argv) {
  // CONST FLAGS
  const MODE_DEV = argv.mode === 'development';
  const MODE_PROD = argv.mode === 'production';
  const DIR_DIST = path.resolve(__dirname, 'dist');

  // START ~=~=~=~=~=~=~=~=~= print debug infos ~=~=~=~=~=~=~=~=~=~=
  console.log('~=~=~=~=~=~=~=~= ARGS =~=~=~=~=~=~=~=~=~==~==~==~==~==~==~==');
  console.log(argv);

  // ~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~= update function and mode
  function updateAppVersions() {
    const pathToSettings = path.resolve(__dirname, 'components/settings/settings.tpl');
    /**
     * Go to settings.tpl and auto update data.
     * Updates hash in CSS/JS src paths
     */
    fs.readFile(pathToSettings, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      const version = data.match(/APP_VERSION' value='([^']*)'/)[1];
      const versionArr = version.split('o');
      let mode = 'production';
      if (MODE_DEV) {
        ++versionArr[2];
        mode = 'dev';
      }
      if (MODE_PROD) {
        ++versionArr[1];
      }

      console.log(`~=~=~=~=~=~=~=~= ... settings.tpl configuration v[${versionArr.join('o')}] ... =~=~=~=~=~=~=~=~=`);
      console.log('~=~=~=~=~=~=~=~= ... sleeping zzz ... =~=~=~=~=~=~=~=~=');
      let result = data.replace(/APP_VERSION' value='([^']*)'/, `APP_VERSION' value='${versionArr.join('o')}'`);
      result = result.replace(/APP_MODE' value='([^']*)'/, `APP_MODE' value='${mode}'`);
      // console.log(result)
      fs.writeFile(pathToSettings, result, 'utf8', (errW) => {
        if (errW) {
          console.log(errW);
        }
      });
      console.log('~=~=~=~=~=~=~=~= ... wakey wakey sleepy head ... =~=~=~=~=~=~=~=~=');
    });
  }
  updateAppVersions();


  // ~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~= BABEL CONFIG ~=~=~=~=
  const babelConfig = MODE_PROD
    ? { // * PRODUCTION mode
      presets: TRANSPILLING_FLAG
        ? ['@babel/preset-env', {
          targets: {
            browsers: [BROWSER_SUPPORT],
          },
        }]
        : [],
      ignore: [
        'node_modules',
      ],
      plugins: [
        // This plugin places a "use strict"; directive
        // at the top of all files to enable strict mode.
        '@babel/plugin-transform-strict-mode',
        '@babel/plugin-transform-optional-chaining',
      ],
    } : { // * DEVELOPMENT mode
      presets: [/* do not transpile */],
      ignore: [
        'node_modules',
      ],
      plugins: ['@babel/plugin-transform-strict-mode'],
    };


  // ~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~= OPTIMALIZATION ~=~=~=~=
  const optimizationOptions = MODE_PROD
    // * PRODUCTION mode
    ? {
      runtimeChunk: false, // adds an extra chunk to each entrypoint containing only the runtime
      splitChunks: {
        maxInitialRequests: 2, // Maximum number of parallel requests at an entrypoint
        minSize: 0, // by deafault 30kb files are not bundeled
        cacheGroups: {
          default: false,
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor_app',
            chunks: 'all',
            minChunks: 2,
            priority: 20,
          },
        },
      },
      minimizer: MODE_PROD ? [
        // This is used only in production mode
        new TerserPlugin({
          terserOptions: {
            parse: {
              // we want terser to parse ecma 8 code. However, we don't want it
              // to apply any minfication steps that turns valid ecma 5 code
              // into invalid ecma 5 code. This is why the 'compress' and 'output'
              // sections only apply transformations that are ecma 5 safe
              // https://github.com/facebook/create-react-app/pull/4234
              ecma: 8,
            },
            compress: {
              ecma: 5,
              warnings: false,
              // Disabled because of an issue with Uglify breaking seemingly valid code:
              // https://github.com/facebook/create-react-app/issues/2376
              // Pending further investigation:
              // https://github.com/mishoo/UglifyJS2/issues/2011
              comparisons: false,
              // Disabled because of an issue with Terser breaking valid code:
              // https://github.com/facebook/create-react-app/issues/5250
              // Pending futher investigation:
              // https://github.com/terser-js/terser/issues/120
              inline: 2,
              drop_console: false,
            },
            mangle: {
              safari10: true,
            },
            output: {
              ecma: 5,
              comments: false,
              // Turned on because emoji and regex is not minified properly using default
              // https://github.com/facebook/create-react-app/issues/2488
              ascii_only: true,
            },
          },
          // Enable file caching
          cache: false,
          // Use source maps to map error message locations
          // to modules (this slows down the compilation).
          sourceMap: !MODE_PROD,
        }),

        // This is only used in production mode
        new OptimizeCSSAssetsPlugin({

        }),
      ] : [],
    }
    // * DEVELOPMENT mode
    : {
      // do nothing
    };

  /**
   * Webpack can generate in queue diffrent configs.
   * In booking prodject we need:
   *  - standard config to generate files JS, CSS etc
   *  - secound config for scheme colors CSS files
   *
   * use this function to generate one of those.
   *
   */
  function getConfigFile(entries) {
    const plugins = [
      /*
      new WebpackShellPlugin({
          onBuildStart:['echo "Webpack Start"'],
          onBuildEnd:['echo "Webpack Start" \n\
          &&  lessc dist/app.bundle.less dist/app.bundle.css \n\
          &&  lessc dist/index.bundle.less dist/index.bundle.css \n\
          ']
      }),
      */
      new MiniCssExtractPlugin({
        // This plugin extracts CSS into separate files.
        // It creates a CSS file per JS file which contains CSS.
        // It supports On-Demand-Loading of CSS and SourceMaps.
        filename: '[name].css', // [hash]
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
      }),
      new CopyPlugin(
        // copy file only for standard mode, for sheme do nothing
        MODE_PROD ? [
          // copy modernizer, its not bundle as it has to run as fast as possible
          { from: `${__dirname}/components_standard/core-head/libs/modernizer.js`, to: `${__dirname}/dist` },
          { from: `${__dirname}/components_standard/core-head/libs/modernizer.js`, to: `${__dirname}/dev` },
          { from: `${__dirname}/components_standard/core-head/libs/widget-temp.js`, to: `${__dirname}/dist` },
          { from: `${__dirname}/components_standard/core-head/libs/widget-temp.js`, to: `${__dirname}/dev` },
          { from: `${__dirname}/components/settings/scheme`, to: `${__dirname}/dist/scheme` },
          { from: `${__dirname}/components/settings/scheme`, to: `${__dirname}/dev/scheme` },
        ] : [],
      ),
    ];

    if (MODE_PROD) {
      // delete dist folder
      plugins.push(new CleanWebpackPlugin());
      // gizp only in production
      plugins.push(
        new CompressionPlugin({
          test: /\.(js|css)$/i,
          threshold: 0,
          minRatio: 1, // all assets have to be gziped, SMARTY path to files is static !
        }),
      );
    }

    return {
      bail: true, // stop on first error
      entry: entries,
      output: {
        filename: '[name].js',
        path: DIR_DIST,
      },
      optimization: optimizationOptions,
      // Source maps are resource heavy and can cause out of memory issue for large source files.
      devtool: MODE_DEV ? 'source-map' : false,
      devServer: {
        contentBase: `${__dirname}/dev`,
        watchContentBase: true,
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx|jsm)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: babelConfig,
            },
          },
          {
            test: /\.css|less$/,
            exclude: [/node_modules/, /dist/],
            use: [
              MiniCssExtractPlugin.loader, // create a CSS file per JS file containing CSS imports
              // 'style-loader', // creates style nodes from JS strings
              // imported with JS moduel declaration
              // useing this option: CSS will be inluded in [name].bundle.js file.
              'css-loader', // translates CSS into CommonJS
              'less-loader', // compiles Less to CSS
            ],
          },
          {
            test: /\.(woff(2)?|ttf|eot|gif|png|jpe?g|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/',
              },
            }],
          },
        ],
      },
      plugins,
    };
  }

  // START ~=~=~=~=~=~=~=~=~= CONFIG FILE FOR STANDARD JS/CSS ~=~=~=~=~=~=~=~=~=~=
  const configurationOptions = getConfigFile(ENTRIES);
  console.log('~=~=~=~=~=~=~=~= CONFIG FILE =~==~==~==~==~==~=~=~=~=~=~=~=~');
  console.log(configurationOptions);
  console.log('~=~=~=~=~=~=~=~= ... making a coffee ... ~=~=~=~=~=~=~=');

  return configurationOptions;
};
