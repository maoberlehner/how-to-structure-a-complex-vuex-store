require(`./check-versions`)();

process.env.NODE_ENV = `production`;

const chalk = require(`chalk`);
const ora = require(`ora`);
const path = require(`path`);
const rm = require(`rimraf`);
const webpack = require(`webpack`);

const config = require(`../config`);
const webpackConfig = require(`./webpack.prod.conf`);

const spinner = ora(`building for production...`);
spinner.start();

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), (error) => {
  if (error) throw error;

  webpack(webpackConfig, (webpackError, stats) => {
    spinner.stop();
    if (webpackError) throw webpackError;

    process.stdout.write(`${stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
    })}\n\n`);

    if (stats.hasErrors()) {
      // eslint-disable-next-line no-console
      console.log(chalk.red(`  Build failed with errors.\n`));
      process.exit(1);
    }

    // eslint-disable-next-line no-console
    console.log(chalk.cyan(`  Build complete.\n`));
    // eslint-disable-next-line no-console
    console.log(chalk.yellow(
      `  Tip: built files are meant to be served over an HTTP server.\n` +
      `  Opening index.html over file:// won't work.\n`,
    ));
  });
});
