    // !!!!!!! uncomment the minify css line for production builds


    // Gulp
    var gulp = require('gulp');

    // Sass/CSS stuff
    var sass = require('gulp-sass');
    var sourcemaps = require('gulp-sourcemaps');
    var prefix = require('gulp-autoprefixer');
    var minifycss = require('gulp-clean-css');

    // JavaScript
    var uglify = require('gulp-uglify');

    // Images
    var svgmin = require('gulp-svgmin');
    var imagemin = require('gulp-imagemin');

    // Stats and Things
    var size = require('gulp-size');

//

    // compile all your Sass
        gulp.task('sass', function (){
            return gulp.src('./dev/sass/*.sass')
                //.pipe(prefix(
                //    "last 2 versions", "> 1%", "ie 8", "ie 7"
               // ))
                .pipe(sourcemaps.init())
                .pipe(sass().on('error', sass.logError))
                .pipe(sourcemaps.write())
                
// !!!!!!uncomment for production                .pipe(minifycss()) !!!!!! //
                .pipe(gulp.dest('./library/css'));
        });

    // Uglify JS
        gulp.task('uglify', function(){
            gulp.src('./dev/js/*.js')
                .pipe(uglify())
                .pipe(gulp.dest('./library/js'));
        });

    // SVG & Images
        gulp.task('svgmin', function() {
            gulp.src('./dev/images/svg/*.svg')
            .pipe(svgmin())
            .pipe(gulp.dest('./library/images/svg'))
        });
        gulp.task('imagemin', function () {
            gulp.src('./dev/images/**/*')
            .pipe(imagemin())
            .pipe(gulp.dest('./library/images'));
        });

//

    gulp.task('default', function(){
        // watch me getting Sassy
        gulp.watch("./dev/sass/**/*.sass", function(event){
            gulp.run('sass');
        });
        // make my JavaScript ugly
        gulp.watch("./dev/js/**/*.js", function(event){
            gulp.run('uglify');
        });
        // images
        gulp.watch("./dev/images/**/*", function(event){
            gulp.run('imagemin');
            gulp.run('svgmin');
        });
    });