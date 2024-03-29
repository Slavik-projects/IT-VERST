import svgSprite from "gulp-svg-sprite";
export const svgSprive = () => {
	return app.gulp.src(`${app.path.src.svgicons}`, {})
		/*.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "SVG",
				messsage: "Error: <%= error.message %>"
			})
		))*/
		.pipe(svgSprite({
			mode: {
				stack: {
					sprite: `../icons/icons.svg`,
					//create page with list of icons
					example: true
				}
			},
		}))
		.pipe(app.gulp.dest(`${app.path.build.images}`));
}