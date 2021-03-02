// import {get_label,get_list} from './list.js'
// export default {
// 	get_label,
// 	get_list
// }
// 批量导出文件
const requireApi = require.context(
	// api相对路径
	'.',
	// 是否查询子目录
	false,
	// 查询文件的一个后缀
	/.js$/
)
let model = {}
requireApi.keys().forEach((key,index)=>{
	if(key == './index.js') return
	Object.assign(model, requireApi(key))
})
// console.log(model)
export default model