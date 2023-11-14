import replace from "gulp-replace";//searching and replacing
//import plumber from "gulp-plumber";//processing error
//import notify from "gulp-notify";//messages
import browsersync from "browser-sync";//local server
import newer from "gulp-newer";//check update
import ifPlugin from "gulp-if";//conditional branch



export const plugins = {
	replace: replace,
	//plumber: plumber,
	//notify: notify,
	browsersync: browsersync,
	newer: newer,
	if: ifPlugin
}