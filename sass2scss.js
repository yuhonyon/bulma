var vfs = require('vinyl-fs');
var converter = require('sass-convert');
var rename = require('gulp-rename');
vfs.src('./sass/**/*.+(sass|scss)')
  .pipe(converter({
    from: 'sass',
    to: 'scss'
  }))
  .pipe(rename({extname: ".scss"}))
  .pipe(vfs.dest('./scss'));
