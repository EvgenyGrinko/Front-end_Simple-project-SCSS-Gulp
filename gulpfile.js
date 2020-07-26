const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//Gulp - is a task runner. We must specify for it, what tasks we need to run.

//TASKS

//function for convertation fron "scss" to "css"
function style() {
    //choose all files with ".scss" extension from the folder "scss"
    return gulp.src('./scss/**/*.scss')
    .pipe(sass())//make convertation
    .pipe(gulp.dest('./css'))//choose folder where gulp will put new converted file ".css"
    .pipe(browserSync.stream())
}

//Function for watching on automatic update files
// in case of any ".scss" file will be changed
function watch(){
    //initialize browser-sync
    browserSync.init({
        server: {
            baseUrl: "./"
        }
    })
    gulp.watch('./scss/**/*.scss', style);//watch on "style.css" file
    //1 argument - Files to watch after
    //2 argument - function to call in case of any changes in files ("style" defined above)

    gulp.watch('./*.html').on('change', browserSync.reload);//watch on all ".html" files in the root of the project
}

//Need to be installed "gulp-cli -g" globally
//"gulp gulp-sass browser-sync"

//In the terminal you can run "gulp style" for 1 time convertation
//Or "gulp watch" for watching after changes in files

exports.style = style;
exports.watch = watch;