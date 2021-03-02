const get_label = () => {
	return new Promise((resolve,reject) =>{
		uniCloud.callFunction({
			data
		}).then((res) => {
			if(res.code == 200){
				resolve(res.result)
			} else {
				reject(res.result)
			}
		}).catch((err) => {
			console.log(err);
		})
	})
}

export default {
	get_label
}