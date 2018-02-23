'use strict';

var gulp = require('gulp'),
    gp = require('gulp-load-plugins')(),
    mqpacker = require('css-mqpacker'),
    browserSync = require('browser-sync').create();
   
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: './build'
        }           
    });
     browserSync.watch('build', browserSync.reload)
});

gulp.task('jscommon', function() {
    return gulp.src('src/script/*.js')
      .pipe(gp.concat('vendor.min.js'))
      .pipe(gp.uglify({}))
      .pipe(gulp.dest('build/js/'))
      .pipe(browserSync.stream());
  });

gulp.task('pug', function () {
    return gulp.src('src/pug/*.pug')
    .pipe(gp.plumber())
    .pipe(gp.pug({}))
    .pipe(gulp.dest('build'))
    .pipe(browserSync.stream());
});  

gulp.task('sass', function () {
    var processors = ([
        mqpacker({
          sort: true
        })
      ]);
    return gulp.src('src/sass/*.scss')
    .pipe(gp.concat('vendor.min.css'))
    .pipe(gp.sourcemaps.init())
        .pipe(gp.sass({}))
        .pipe(gp.postcss(processors))      
        .pipe(gp.autoprefixer({
            browsers: ['last 2 versions', 'ie > 10']
        }))        
        .pipe(gp.sourcemaps.write())        
        .pipe(gp.csso({
            restructure: false,
            sourceMap: true,
            debug: true
        }))
        .pipe(gulp.dest('build/css/'))
        .pipe(browserSync.stream());
});

gulp.task('img', function() {
    return gulp.src('src/images/*')
      .pipe(gp.imagemin({
        interlaced: true,
        progressive: true,
        optimizationLevel: 5,  
        use: [
          gp.pngquant()
        ]
    }))
      .pipe(gulp.dest('build/images'));
  });
    
gulp.task('watch', function () {
    gulp.watch('src/sass/*.scss', gulp.series('sass'));
    gulp.watch('src/pug/*.pug', gulp.series('pug'));            
    gulp.watch('src/script/*.js', gulp.series('jscommon'));
});

gulp.task('default', gulp.series(
    gulp.parallel('jscommon','pug','sass'),
    gulp.parallel('watch','serve','img')
));