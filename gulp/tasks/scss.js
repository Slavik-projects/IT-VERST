import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css';//compress css file
import webpcss from 'gulp-webpcss';//display webp images
import autoprefixer from 'gulp-autoprefixer';//add vendor prefixes
import groupCssMediaQueries from 'gulp-group-css-media-queries';//group media quries

const sass = gulpSass(dartSass);

export const scss = () => {
	return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
		/*.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "SCSS",
				message: "Error <%= error.message %"
			})))*/
		.pipe(app.plugins.replace(/@img\//g, '../img/'))
		.pipe(sass({
			outputStyle: 'expanded'
		}))
		.pipe(
			app.plugins.if(
				app.isBuild,
				groupCssMediaQueries()
			)
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
				webpcss(
					{
						webpClass: ".webp",
						noWebpClass: ".no-webp"
					}
				)
			)
		)
		.pipe(app.plugins.if(
			app.isBuild,
			autoprefixer({
				grid: true,
				overrideBrowserslist: ["last 3 versions"],
				cascade: true
			})
		)


		)
		.pipe(app.gulp.dest(app.path.build.css))//uncompressed style file
		.pipe(
			app.plugins.if(
				app.isBuild,
				cleanCss()
			)
		)
		.pipe(rename({
			extname: ".min.css"
		}))
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.browsersync.stream());
}