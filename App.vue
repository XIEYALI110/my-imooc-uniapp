<script>
	export default {
		onLaunch: function() {
					console.log('App Launch')
					// 5e76254858d922004d6c9cdc
					// 请求接口，异步
					this.$api.get_user({
						user_id: '5fcf324fee98e30001386fdd'
					}).then((res) => {
						const {
							data
						} = res
						this.$store.dispatch('setUserinfo', data)
					})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import '/components/u-parse/u-parse.css' 
</style>
