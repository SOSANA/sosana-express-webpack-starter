// main starting point for app
import Express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';
import serverConfig from './config/serverConfig';

// Webpack Requirements
import webpack from 'webpack';
import webpackConfig from '../webpack.config.dev';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

// initialize the express app
const app = new Express();

// Add DB setup here

// app middleware setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(Express.static(path.join(__dirname, '../public')));
app.use(favicon(path.join(__dirname, '../public/img/favicon.ico')));

// webpack development setup
const compiler = webpack(webpackConfig);

if (process.env.NODE_ENV === 'development') {
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true,
    },
  }));
  app.use(webpackHotMiddleware(compiler));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// start app
app.listen(serverConfig.port, (err) => {
  if (!err) {
    console.log(`Server listening on http://localhost:${serverConfig.port}`); // eslint-disable-line
  }
});

export default app;
