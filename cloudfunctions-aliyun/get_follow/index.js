'use strict';
const db = uniCloud.database()
const $ = db.command.aggregate
exports.main = async (event, context) => {
	//event为客户端上传的参数
	// console.log('event : ', event)
	const {user_id} = event
	let userInfo = await db.collection('user').doc(user_id).get()
	let data = userInfo.data[0].article_likes_ids
	console.log(data,'data');
	const list = await db.collection('article')
	.aggregate()
	.addFields({
		is_like: $.in(['$_id', data])
	})
	.match({
		is_like: true
	})
	.project({
		content: false
	})
	.end()
	//返回数据给客户端
	return {
		code: 200,
		msg: "数据获取成功",
		data: list.data
	}
};
