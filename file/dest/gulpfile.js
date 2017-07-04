

//gulp对象
//var gulp = require("gulp");
//gulp.src("src/html/*.html") //设置要处理的文件位置
//.pipe(gulp.dest("dest/html")); //设置处理后的文件存放位置


//task() : 定义任务
/*
var gulp = require("gulp");

//one
gulp.task("one", function(){
	console.log("one-task");
	setTimeout(function(){
		console.log("timeout");
	}, 3000);
})

//two
gulp.task("two", function(){
	console.log("two-task");
})

//three
gulp.task("three", function(){
	console.log("three-task");
})

//default任务默认执行
//第一个参数： 任务名称
//第二个参数： 当前任务所依赖的其他任务，所依赖的其他任务会先执行
gulp.task("default", ["one", "two","three"], function(){ 
	console.log("default-task!");
});

*/

//gulp.src()
//gulp.dest()
//.pipe()
//gulp.task()

/*
//gulp-htmlmin插件的参数对象
var obj = {
	removeComments: true, //清除HTML注释
	collapseWhitespace: true, //压缩HTML
	collapseBooleanAttributes: true,//省略布尔属性的值<input checked="true"/> ==> <input checked/>
	removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
	removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
	removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
	minifyJS: true, //压缩页面JS 
	minifyCSS: true //压缩页面CSS 
}

var gulp = require("gulp");  //gulp对象
var htmlmin = require("gulp-htmlmin"); //导入插件
gulp.task("htmlTask", function(){
	gulp.src("src/html/*")
	.pipe(htmlmin(obj)) //使用插件
	.pipe(gulp.dest("dest/html"));
});
gulp.task("default", ["htmlTask"]);

*/


var gulp = require('gulp');
var uglify = require('gulp-uglify'); //js压缩插件
//var bom = require('gulp-bom'); //解决中文乱码插件
var babel = require('gulp-babel');  
var minifyCss = require('gulp-minify-css'); //css压缩插件
//var minifyHtml = require('gulp-minify-html'); //html压缩插件
//var imagemin = require('gulp-imagemin'); //图片压缩相关插件
//var pngquant = require('imagemin-pngquant'); //png图片压缩插件
//var rename = require('gulp-rename'); //重命名插件
var babel = require('gulp-babel');  

//压缩js
gulp.task('jsTask', function(){
	gulp.src('src/js/*')
//	.pipe(bom()) 
 	.pipe(babel({presets: ['es2015']}))  
	.pipe(uglify())
	.pipe(gulp.dest('dest/js'));
});

//压缩css
gulp.task('cssTask', function(){
	gulp.src('src/css/*')
	.pipe(minifyCss())
	.pipe(gulp.dest('dest/css'));
});





////压缩html
//gulp.task('htmlTask2', function(){
//	gulp.src('src/html/*')
//	.pipe(minifyHtml())
//	.pipe(gulp.dest('dest/html'));
//});
//
//
//
//
////压缩图片
//gulp.task('imgTask', function(){
//	gulp.src('src/img/*')
//	.pipe(imagemin({
//		progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
//		use: [pngquant()] //使用pngquant插件来深度压缩png图片
////		optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
////      interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
////      multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
//	}))
//	.pipe(gulp.dest('dest/img'));
//});
//
////重命名
//gulp.task('renameTask', function(){
//	gulp.src('src/js/bullet.js')
//	.pipe(uglify())
//	.pipe(rename('bullet.min.js'))
//	.pipe(gulp.dest('dest/js'));
//});

//gulp.task('default', ['jsTask', 'cssTask', 'htmlTask2', 'imgTask', 'renameTask']);
gulp.task('default', ['cssTask']);




