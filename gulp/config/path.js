import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());//name of project (response_part_2)

const buildFolder = `./dist`;//or name of rootFolder//folder with result
const srcFolder = `./src`;

export const path = {
	build: {
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		images: `${buildFolder}/img/`,
		//fonts: `${buildFolder}/fonts/**/*.*`,
		//files: `${buildFolder}/files/`,
		files: `${buildFolder}/fonts/`
	},
	src: {
		js: `${srcFolder}/js/app.js`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/img/**/*.svg`,
		scss: `${srcFolder}/scss/style.scss`,
		html: `${srcFolder}/*.html`,
		//files: `${srcFolder}/files/**/*.*`,
		files: `${srcFolder}/fonts/**/*.*`,
		svgicons: `${srcFolder}/svgicons/*.svg`,
	},
	watch: {
		js: `${srcFolder}/js/**/*.js`,
		scss: `${srcFolder}/scss/**/*.scss`,
		html: `${srcFolder}/**/*.html`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
		files: `${srcFolder}/files/**/*.*`
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: rootFolder,
	ftp: `test`
}