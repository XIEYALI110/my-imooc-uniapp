<template>
	<view class="icons" @click.stop="iconClick">
		<uni-icons size="20" color="red" :type="like ? 'heart-filled' : 'heart'"></uni-icons>
	</view> 
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				default(){
					return {}
				}
			},
			type: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				like: false
			};
		},
		watch:{
			item(newVal){
				this.like = newVal.is_like
			}
		},
		created(){
			this.like = this.item.is_like
		},
		methods: {
			iconClick(){
				this.like = !this.like
				this.setUpdateLike()
			},
			setUpdateLike(){
				// console.log(this.item._id,'id')
				this.$api.update_likes({
					userId: '',
					articleId: this.item._id
				}).then(res => {
					uni.$emit('update_article',this.type)
					console.log(res.data,'resss');
					uni.showToast({
						title:this.like ? '收藏成功':'取消收藏成功',
						icon:'none'
					})
				})
		    }
		}
	}
</script>

<style lang="scss">
	.icons{
		position: absolute;
		right: -30px;
		top: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 20px;
		height: 20px;
	}
</style>
