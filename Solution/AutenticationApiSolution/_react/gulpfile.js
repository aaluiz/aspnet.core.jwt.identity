var browserify = require('browserify');
var babelify = require('babelify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var util = require('gulp-util');

//transpila jsx e js para Ecma2005
gulp.task('build', function () {
  var b = browserify({
    entries: 'scr/js/main.jsx',
    debug: true,
    transform: [babelify.configure({
      presets:  ['@babel/preset-env', '@babel/preset-react']
    })]
  });

  return b.bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
      // Add other gulp transformations (eg. uglify) to the pipeline here.
      .on('error', util.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('C:/Users/alan.luiz3896/Source/Repos/aaluiz/aspnet.core.jwt.identity/Solution/AutenticationApiSolution/wwwroot/js'));
});

//Observar alteração no código fonte
gulp.task('watch',function(){
    gulp.watch('scr/**/*',gulp.series('build'));
});

//Tarefa principal
gulp.task('default',gulp.series('build','watch'));

