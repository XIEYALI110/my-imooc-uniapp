<template>
	<view>
		<view class="my-header">
			<!-- beijing -->
			<view class="my-header-bg">
				<image mode="aspectFill" :src="userinfo.avatar"></image>
			</view>
			<!-- beijing -->
			<view class="my-header-logo">
				<view class="my-header-logoImg">
					<image mode="aspectFill" :src="userinfo.avatar"></image>
				</view>
				<text class="my-header-logoText">{{userinfo.author_name}}</text>
			</view>
			<view class="my-header-info">
				<view class="my-header-infoPart">
					<view class="my-header-infoPart-name">被关注</view>
					<view class="my-header-infoPart-num">{{userinfo.follow_count}}</view>
				</view>
				<view class="my-header-infoPart">
					<view class="my-header-infoPart-name">粉丝</view>
					<view class="my-header-infoPart-num">{{userinfo.fans_count}}</view>
				</view>
				<view class="my-header-infoPart">
					<view class="my-header-infoPart-name">积分</view>
					<view class="my-header-infoPart-num">{{userinfo.integral_count || 0}}</view>
				</view>
			</view>
		</view>
        <view class="my-content">
			<view class="my-content__list" @click="open">
				<view class="my-content__list-title">
					<uni-icons class="icons" type="contact" size="16" color="#666"></uni-icons>
					<text>我的文章</text>
				</view>
				<uni-icons type="arrowright" size="14" color="#666"></uni-icons>
			</view>
			<view class="my-content__list"  @click="feedback">
				<view class="my-content__list-title">
					<uni-icons class="icons" type="help" size="16" color="#666"></uni-icons>
					<text>意见反馈</text>
				</view>
				<uni-icons type="arrowright" size="14" color="#666"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				
			}
		},
		computed: {
			...mapState(['userinfo'])
		},
		onLoad(){
			console.log(this.userinfo,'userinfo')
		},
		methods: {
		    open(){
				uni.navigateTo({
					url:'/pages/my-article/my-article'
				})
			},
			feedback(){
				uni.navigateTo({
					url:'/pages/feedback/feedback'
				})
			}
			
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #F5F5F5;
	}
	.my-header{
		padding-top: 15px;
		padding-bottom: 15px;
		position: relative;
		.my-header-bg{
			position: absolute;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
			filter: blur(8px);
			opacity: 0.2;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.my-header-logo{
			display: flex;
			flex-direction: column;
			align-items: center;
			.my-header-logoImg{
				width: 60px;
				height: 60px;
				border-radius: 50%;
				overflow: hidden;
				margin-bottom: 10px;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.my-header-logoText{
				font-weight: bold;
			}
		}
		.my-header-info{
			display: flex;
			color: #999;
			font-size: 12px;
			margin-top: 10px;
			.my-header-infoPart{
				display: flex;
				flex: 1;
				flex-direction: column;
				align-items: center;
				.my-header-infoPart-name{
					font-size: 14px;
					color: #333;
				}
			}
		}
	}
	.my-content {
		.my-content__list {
			display: flex;
			justify-content: space-between;
			padding: 15px;
			margin-bottom: 10px;
			background-color: #FFFFFF;
			color: #333;
			font-size: 14px;
			.my-content__list-title {
				display: flex;
				align-items: center;
				.icons {
					margin-right: 5px;
				}
			}
		}
	}
</style>
