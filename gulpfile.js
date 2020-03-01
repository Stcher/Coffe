let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('src/sass/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
});

gulp.task('html', function(){
    return gulp.src('src/teamplate/*.html')
});

gulp.task('watch', function(){
    gulp.watch('src/sass/*.sass', gulp.parallel('sass'))
    gulp.watch('**/*.html', gulp.parallel('html'))
});