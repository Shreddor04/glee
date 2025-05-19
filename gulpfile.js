const { src, dest, watch, parallel, series } = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const nunjucksRender = require('gulp-nunjucks-render');
const browserSync = require('browser-sync');

function browsersync() {
    browserSync.init({
        server: {
            baseDir: 'app/'
        },
        notify: false
    });
}



function nunjucks() {
    return src('app/*.njk')
        .pipe(nunjucksRender())
        .pipe(dest('app'))

}


async function styles() {
    const autoprefixer = (await import('gulp-autoprefixer')).default;

    return src('app/scss/*.scss')
        .pipe(scss({ outputStyle: 'compressed' }))
        
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 versions'],
            grid: true
        }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream());
}

function scripts() {
    return src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/slick-carousel/slick/slick.js',
        'node_modules/mixitup/dist/mixitup.js',
        'node_modules/jquery-form-styler/dist/jquery.formstyler.js',
        'node_modules/ion-rangeslider/js/ion.rangeSlider.js',
        'app/js/main.js'
    ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.reload({ stream: true }));
}

async function cleanDist() {
    const del = (await import('del')).deleteSync;
    return del('dist');
}

async function images() {
    const imagemin = (await import('gulp-imagemin')).default;

    return src('app/images/**/*.*')
        .pipe(imagemin())
        .pipe(dest('dist/images'));
}

function build() {
    return src([
        'app/**/*.html',
        'app/css/style.min.css',
        'app/js/main.min.js'
    ], { base: 'app' })
        .pipe(dest('dist'));
}

function watching() {
    watch(['app/scss/**/*.scss'], styles);
    watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
    watch(['app/**/*.html']).on('change', browserSync.reload);
}

exports.styles = styles;
exports.scripts = scripts;
exports.browsersync = browsersync;
exports.watching = watching;
exports.images = images;
exports.cleanDist = cleanDist;
exports.nunjucks = nunjucks;
exports.build = series(cleanDist, images, build);
exports.default = parallel(nunjucks,styles, scripts, browsersync, watching);
