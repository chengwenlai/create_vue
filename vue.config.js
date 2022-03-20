'use strict'
const path = require('path')

function resolve(dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	publicPath: '/customer',
	outputDir: 'dist',
	assetsDir: 'static',
	productionSourceMap: false,
	css: {
		loaderOptions: {
			postcss: {
				plugins: [
					require('postcss-pxtorem')({
						// rootValue: 16, // 换算的基数(设计图750的根字体为32)
						// selectorBlackList: [], // 忽略转换正则匹配项
						propList: ['*'], // 要转换的匹配项
						// unitPrecision: 5 // 保留rem小数点多少位
					})
				]
			}
		}
	},
	chainWebpack(config) {
		config.module
    	  .rule('svg')
    	  .exclude.add(resolve('src/assets/icons'))
    	  .end()
    	config.module
    	  .rule('icons')
    	  .test(/\.svg$/)
    	  .include.add(resolve('src/assets/icons'))
    	  .end()
    	  .use('svg-sprite-loader')
    	  .loader('svg-sprite-loader')
    	  .options({
    	    symbolId: 'icon-[name]'
    	  })
    	  .end()
	},
	devServer: {
		proxy: {
		  '/': {
			target: '',
			changeOrigin: true,
			ws: true
		  }
		}
	}
}
