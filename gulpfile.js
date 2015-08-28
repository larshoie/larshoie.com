// The packages we are using
// Not using gulp-load-plugins as it is nice to see whats here.
var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    takana       = require('takana'),
    jade         = require('gulp-jade'),
    pretty       = require('gulp-pretty-url'),
    browserSync  = require('browser-sync'),
    autoprefix   = require('gulp-autoprefixer'),
    plumber      = require('gulp-plumber'),
    concat       = require('gulp-concat'),
    order        = require("gulp-order"),
    jshint       = require('gulp-jshint'),
    uglify       = require('gulp-uglify'),
    rename       = require('gulp-rename'),
    cleanup      = require('gulp-combine-media-queries'),
    minifyCss    = require('gulp-minify-css'),
    inlineCss    = require('gulp-inline-css'),
    sourcemaps   = require('gulp-sourcemaps'),
    responsive   = require('gulp-responsive'),
    webp         = require('gulp-webp'),
    minifyHTML   = require('gulp-minify-html'),
    run          = require('gulp-npm-run'),
    critical     = require('critical').stream;

// Sass
// Compile
// Compress/Minify
// Catch errors (gulp-plumber)
// Autoprefixer

gulp.task('sass', function() {
  gulp.src('src/assets/scss/style.scss')
  .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe(autoprefix('last 2 versions', '> 1%'))
    .pipe(plumber())
    .pipe(sourcemaps.write())
    //.pipe(cleanup())
    //.pipe(gulp.dest('build/css'))
    .pipe(minifyCss())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css'));
});

// gulp.task('takana', function() {
//   takana.run({
//     path:         __dirname,
//     includePaths: [] // Optional
//   });
// });

gulp.task('html', function() {
    gulp.src([
      'src/**/*.jade',
      '!src/includes/*.jade',         //! Ignore
      '!src/layout/*.jade',           //! Ignore
      '!src/layout/includes/*.jade'   //! Ignore
      ])
     .pipe(jade())
     .pipe(pretty())
      // .pipe(inlineCss({
      //            applyStyleTags: true,
      //            applyLinkTags: true,
      //            removeStyleTags: true,
      //            removeLinkTags: true
      //    }))
     .pipe(minifyHTML())
     .pipe(gulp.dest('build'))
 });

// Javascript
// Uglify/minify
// Coming soon, fuckin' concat those files!

// gulp.task('scripts', function() {
//   gulp.src('src/assets/js/*.js')
//   .pipe(uglify())
//   .pipe(rename({
//     suffix: '.min',
//   }))
//   .pipe(gulp.dest('build/js'))
// });



//'js/jquery.scrollstop.js',
//'js/jquery.scrollsnap.js',


gulp.task('scripts', function () {
    return gulp.src('src/assets/js/**/*.js')
        .pipe(plumber())
        .pipe(jshint())
        .pipe(uglify())
        .pipe(sourcemaps.init({
            loadMaps: false,
        }))

        .pipe(order([
          'js/jquery-2.1.4.min.js',
          'js/jquery.smoothState.js',
          //'js/jquery.tcycle.js',
          //'js/jquery.waypoints.min.js',
          'js/respimage.min.js',
          'js/scripts.js'
        ], { base: '/' }))

        .pipe(concat('scripts.js', {
            newLine:'\n;' // the newline is needed in case the file ends with a line comment, the semi-colon is needed if the last statement wasn't terminated
        }))
        .pipe(sourcemaps.write('.', {
            includeContent: true,
            sourceRoot: '/',
        }))
        .pipe(plumber.stop())
        .pipe(rename('scripts.min.js'))
        .pipe(gulp.dest('build/js'))
});


// Images
// Fuckin' generate images for srcset!!!

// WebP
  gulp.task('webp', function () {
     gulp.src('src/assets/images/**/*.*')
    .pipe(webp())
    .pipe(gulp.dest('build/images'));
    });

gulp.task('images', function () {
   return gulp.src('src/assets/images/**/*.jpg')
    .pipe(
      responsive({
        '**/*.*' : [
          {
            width: 1500, rename: {suffix: "-1500"}
          },
          {
            width: 1000, rename: {suffix: "-1000"}
          },
          {
            width: 500, rename: {suffix: "-500"}
          }]

      })
    )
    //errorOnEnlargement: false
    //withoutEnlargement: true
    //.pipe(plumber())
    .pipe(gulp.dest('build/images'));
});

// Copy stuff we need to the build folder
gulp.task('fonts', function() {
   gulp.src('src/assets/fonts/*.{ttf,woff,eof,svg}')
   .pipe(gulp.dest('build/css/fonts'));
});

gulp.task('CNAME', function() {
   gulp.src('src/CNAME')
   .pipe(gulp.dest('build/'));
});

// BrowserSync.io
// Watch CSS, JS & HTML for changes
// View project at: localhost:3000
gulp.task('browser-sync', function() {
  browserSync.init(['build/css/*.css', 'build/js/**/*.js', 'build/**/*.html'], {
    server: {
      baseDir: 'build'
    }

  });
});


var gulp = require('gulp-npm-run')(require('gulp'), {
  require: ['surge']
});


// Generate & Inline Critical-path CSS
// gulp.task('critical', function () {
//     return gulp.src('build/*.html')
//         .pipe(critical({base: 'build/', inline: true, css: 'build/css/style.min.css'}))
//         .pipe(gulp.dest('build'));
// });

gulp.task('copystyles', function () {
    return gulp.src(['build/css/style.min.css'])
        .pipe(rename({
            basename: "site" // site.css
        }))
        .pipe(gulp.dest('build/css'));
});

gulp.task('critical', ['build', 'copystyles'], function () {
  critical.generateInline({
      base: 'build/',
      src: 'index.html',
      styleTarget: 'css/style.min.css',
      htmlTarget: 'index.html',
      width: 1000,
      height: 800,
      minify: true
  });
});





gulp.task
('build',
  [
  'sass',
  'html',
  'scripts',
  'fonts',
  'images'
  ],
function () {

});



// Default task
// Runs sass, browser-sync, scripts and image tasks
// Watchs for file changes for images, scripts and sass/css
gulp.task
('default',
  [
  'sass',
  //'takana',
  'html',
  'scripts',
  //'polyfill-js',
  //'polyfill-css',
  //'webp',
  //'images',
  //'fonts',
  //'CNAME',
  //'critical',
  'browser-sync'
  //'deploy'
  ],
function () {
  gulp.watch('src/assets/scss/**/*.scss', ['sass']);
  //gulp.watch('src/assets/fonts', ['fonts']);
  gulp.watch('src/assets/js/**/*.js', ['scripts']);
  //gulp.watch('src/assets/polyfill/**/*.js', ['polyfill-js']);
  //gulp.watch('src/assets/polyfill/**/*.css', ['polyfill-css']);
  //gulp.watch('src/assets/images/**/*.jpg', ['webp']);
  //gulp.watch('src/assets/images/**/*.jpg', ['images']);
  gulp.watch('src/**/*.jade', ['html']);
});
