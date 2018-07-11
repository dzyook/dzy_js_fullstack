// 文件引用 顺序打包文件 依赖
require('./style.less')
require('./styles/index')
const { log } = require('./utils')
const format = require('utils/format')

log(format('hello world'))
document.querySelector('.superman').style.display = 'block'
log('hello world')
log(_.map([1,2,3],(item) => item * 2))