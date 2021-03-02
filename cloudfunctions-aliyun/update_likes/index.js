'use strict';
const db = uniCloud.database()
const dbCmd = db.command
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const {
		user_id,
		articleId
	} = event
	const userInfo = await db.collection('user').get()
	// const userInfo = await db.collection('user').doc(user_id).get()
	const article_id_ids = userInfo.data[0].article_likes_ids 
	let articleFun = null
	console.log(article_id_ids,'article_id_ids')
	if(article_id_ids.includes(articleId)){
		articleFun = dbCmd.pull(articleId)
	} else {
		articleFun =  dbCmd.addToSet(articleId)
	}
	await db.collection('user').doc(user_id).update({
		article_likes_ids: articleFun
	})
	//返回数据给客户端
	return {
		code: 200,
		msg: "请求成功",
		data: userInfo.data[0]
	}
};
// 'use strict';
// const db = uniCloud.database()
// const dbCmd = db.command

// exports.main = async (event, context) => {
// 	const {
// 		userId,
// 		articleId
// 	} = event

// 	const  = await db.collection('user').doc(userId).get()
// 	const article_id_ids = userinfo.data[0].article_likes_ids
// 	let dbCmdFuns = null
// 	if (article_id_ids.includes(articleId)) {
// 		dbCmdFuns = dbCmd.pull(articleId)
// 	} else {
// 		dbCmdFuns = dbCmd.addToSet(articleId)
// 	}

// 	await db.collection('user').doc(userId).update({
// 		article_likes_ids: dbCmdFuns
// 	})
// 	//event为客户端上传的参数
// 	console.log('event : ' + event)
// 	//返回数据给客户端
// 	return {
// 		code: 200,
// 		msg: '数据请求成功',
// 		data: userinfo.data[0]
// 	}
// };