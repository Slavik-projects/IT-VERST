//main Module
import gulp from "gulp";
//import paths
import { path } from "./gulp/config/path.js";
//import common plugins
import { plugins } from "./gulp/config/plugins.js";


//sent variable to global variable
global.app = {
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	path: path,
	gulp: gulp,
	plugins: plugins
}

//import tasks
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";

//import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { svgSprive } from "./gulp/tasks/svgSprive.js";
/*import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";*/



//watch the changes in files
function watcher() {
	gulp.watch(path.watch.files, copy);
	gulp.watch(path.watch.html, html);
	//gulp.watch(path.watch.html, gulp.series(html, ftp))
	gulp.watch(path.watch.scss, scss);
	gulp.watch(path.watch.js, js);
	gulp.watch(path.watch.images, images);

}

export { svgSprive }

//const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

//const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js /*, images*/));
const mainTasks = gulp.parallel(copy, html, scss, js, images);//this option without convert fonts

//build tasks scenarious
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

const build = gulp.series(reset, mainTasks);
//const deployZIP = gulp.series(reset, mainTasks/*, zip*/);
//const deployFTP = gulp.series(reset, mainTasks/*, ftp*/);


//Export scenarious
export { dev }
export { build }
//export { deployZIP }
//export { deployFTP }

//execute scenarious by default
gulp.task('default', dev);