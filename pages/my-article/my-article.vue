<template>
	<view>
		<uni-load-more v-if="lists.length === 0" status="loading"></uni-load-more>
		<list-card v-for="(item,index) in lists" :key="item.id + index" :item="item"></list-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lists: []
			}
		},
		onLoad() {
			uni.$on('update_article',e =>{
				console.log('enterload');
				if(e == 'follow'){
					this.listCatch = {}
					this.load = {}
					this.getMyArticle()
				}
			})
			this.getMyArticle()
		},
		methods: {
			getMyArticle() {
				this.$api.get_my_article().then(res => {
					console.log(res);
					const {
						data
					} = res
					this.lists = data
				})
			}
		}
	}
</script>

<style>

</style>

<style>

</style>
