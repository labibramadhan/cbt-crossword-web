import WebpackDevServer from 'webpack-dev-server';
import del from 'del';
import gulp from 'gulp';
import gulpCopy from 'gulp-copy';
import path from 'path';
import webpack from 'webpack';
import webpackConfig from './webpack.config';
import webpackStream from 'webpack-stream';

const BUILD_DIR = './build';

gulp.task('clean', () => {
  del.sync(BUILD_DIR);
});

gulp.task('build', ['clean'], async() => {
  delete webpackConfig.devtool;
  delete webpackConfig.debug;
  delete webpackConfig.devServer;

  await new Promise((resolve, reject) => {
    const pipes = gulp.src(webpackConfig.entry)
      .pipe(webpackStream(webpackConfig))
      .pipe(gulp.dest(BUILD_DIR));

    pipes.on('end', resolve);
    pipes.on('error', reject);
  });

  await new Promise((resolve, reject) => {
    const pipes = gulp
      .src('./app/components/libraries/**/*')
      .pipe(gulpCopy(BUILD_DIR, {
        prefix: 1,
      }))
      .pipe(gulp.dest(path.join(BUILD_DIR, 'components/libraries')));

    pipes.on('end', resolve);
    pipes.on('error', reject);
  });

  await new Promise((resolve, reject) => {
    const pipes = gulp
      .src('./app/components/templates/**/*')
      .pipe(gulpCopy(BUILD_DIR, {
        prefix: 1,
      }))
      .pipe(gulp.dest(path.join(BUILD_DIR, 'components/templates')));

    pipes.on('end', resolve);
    pipes.on('error', reject);
  });

  await new Promise((resolve, reject) => {
    const pipes = gulp
      .src('./app/assets/**/*')
      .pipe(gulpCopy(BUILD_DIR, {
        prefix: 1,
      }))
      .pipe(gulp.dest(path.join(BUILD_DIR, 'assets')));

    pipes.on('end', resolve);
    pipes.on('error', reject);
  });

  await new Promise((resolve, reject) => {
    const pipes = gulp
      .src('./app/bower_components/**/*')
      .pipe(gulpCopy(BUILD_DIR, {
        prefix: 1,
      }))
      .pipe(gulp.dest(path.join(BUILD_DIR, 'bower_components')));

    pipes.on('end', resolve);
    pipes.on('error', reject);
  });

  gulp
    .src(['./app/index.html', './app/app.css'])
    .pipe(gulp.dest('./build'));
});

gulp.task('dev', () => {
  delete webpackConfig.plugins;
  webpackConfig.entry = ['webpack-dev-server/client?http://localhost:8585/', webpackConfig.entry];
  new WebpackDevServer(webpack(webpackConfig), webpackConfig.devServer).listen(8585);
});

gulp.task('default', ['dev']);