'use strict';
const db = uniCloud.database()
const $ = db.command.aggregate
exports.main = async (event, context) => {
	const {user_id,name,page = 1,pageSize =10} = event; let matchObj = {}
	if(name != "全部") {
		matchObj = {classify: name}
	}
	let userinfo = await db.collection('user').doc(user_id).get()
	let data = userinfo.data[0].article_likes_ids
	console.log(data,'data');
	// 聚合: 更精细化处理数据 求和分组指定哪些字段
	const list = await db.collection('article')
	.aggregate()
	.addFields({
		is_like: $.in(['$_id', data])
	})
	.match(matchObj)
	.project({
		content: false
	})
	// 跳过数据数量
	.skip(pageSize*(page -1))
	.limit(pageSize)
	.end()
	// let label = await db.collection('article').field({
	// 	content: false}).get()
	//event为客户端上传的参数
	//返回数据给客户端
	return {
		code: 200,
		msg: "成功",
		data: list.data
	}
};
